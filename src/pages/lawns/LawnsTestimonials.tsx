import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Neha & Arjun Kapoor", event: "Lawn Wedding", text: "Our outdoor wedding at OM SAI Lawns was a dream come true! The fairy lights, the green grass, the sunset — everything was picture-perfect. Our guests are still talking about it!", rating: 5 },
  { name: "Meera Joshi", event: "Garden Birthday Party", text: "My daughter's 5th birthday on the lawn was magical! The team set up a beautiful garden theme with games, entertainment, and amazing food. Best party ever!", rating: 5 },
  { name: "Rajesh Gupta", event: "Corporate Team Outing", text: "We hosted our annual team outing here and the open-air setup was refreshing. Great food, perfect arrangements, and the team loved the garden ambiance.", rating: 5 },
  { name: "Pooja & Siddharth", event: "Engagement on the Lawn", text: "The lawn was decorated like a fairy tale for our engagement. The floral arrangements and lighting were beyond our expectations. Thank you OM SAI!", rating: 5 },
];

const LawnsTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <PageWrapper>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">What Our <span className="gold-text">Guests</span> Say</h2>
          </motion.div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, rotateY: -10, scale: 0.95 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} exit={{ opacity: 0, rotateY: 10, scale: 0.95 }} transition={{ duration: 0.5 }} className="glass-card p-8 md:p-12 text-center" style={{ perspective: "1000px" }}>
                <Quote className="mx-auto text-gold/30 mb-6" size={48} />
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-body italic">"{testimonials[current].text}"</p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => <Star key={i} size={18} className="text-gold fill-gold" />)}
                </div>
                <h4 className="font-display text-xl font-bold">{testimonials[current].name}</h4>
                <p className="text-gold text-sm">{testimonials[current].event}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/10 transition-colors"><ChevronLeft size={20} /></button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "gold-gradient w-8" : "bg-muted"}`} />)}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/10 transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default LawnsTestimonials;
