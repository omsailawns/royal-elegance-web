import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    text: "Our wedding at OM SAI was absolutely magical! The décor was breathtaking, the staff was incredibly attentive, and every guest was blown away. It was the most beautiful night of our lives.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    event: "50th Birthday Celebration",
    text: "The team went above and beyond for my mother's milestone birthday. The lawn setup was stunning, food was exceptional, and the coordination was flawless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    event: "Corporate Annual Meet",
    text: "Professional setup, top-notch AV facilities, and excellent catering. OM SAI handled our 300-person corporate event seamlessly. Will definitely return for future events.",
    rating: 5,
  },
  {
    name: "Sneha & Karan Patel",
    event: "Engagement Ceremony",
    text: "From the floral arrangements to the lighting — everything was perfect. The banquet hall looked like a dream. Thank you OM SAI for making our engagement so special!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <PageWrapper>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              What Our <span className="gold-text">Guests</span> Say
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, rotateY: -10, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 10, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12 text-center"
                style={{ perspective: "1000px" }}
              >
                <Quote className="mx-auto text-gold/30 mb-6" size={48} />
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-body italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>
                <h4 className="font-display text-xl font-bold">{testimonials[current].name}</h4>
                <p className="text-gold text-sm">{testimonials[current].event}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current ? "gold-gradient w-8" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Testimonials;
