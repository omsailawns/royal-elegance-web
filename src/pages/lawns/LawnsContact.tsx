import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const LawnsContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Booking request sent! We'll contact you shortly.");
  };

  return (
    <PageWrapper>
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">Book Your Lawn Event</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">Celebrate <span className="gold-text">Outdoors</span></h2>
            <p className="text-muted-foreground">Fill in the details and our team will plan your perfect outdoor celebration.</p>
          </motion.div>
          {submitted ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-12 text-center">
              <CheckCircle className="mx-auto text-gold mb-6" size={64} />
              <h3 className="font-display text-2xl font-bold mb-3">Thank You!</h3>
              <p className="text-muted-foreground">We've received your lawn booking request. Our team will contact you within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", eventType: "", date: "" }); }} className="mt-6 gold-gradient px-6 py-3 rounded-xl text-primary-foreground font-medium glow-hover">Submit Another Request</button>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-8 md:p-12 space-y-6">
              {[
                { label: "Your Name", key: "name", type: "text", placeholder: "John Doe" },
                { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block font-display text-sm font-semibold mb-2">{field.label}</label>
                  <input type={field.type} required placeholder={field.placeholder} value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 font-body" />
                </div>
              ))}
              <div>
                <label className="block font-display text-sm font-semibold mb-2">Event Type</label>
                <select required value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 font-body">
                  <option value="">Select Event Type</option>
                  <option value="wedding">Lawn Wedding</option>
                  <option value="reception">Outdoor Reception</option>
                  <option value="birthday">Garden Party</option>
                  <option value="corporate">Corporate Outing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-display text-sm font-semibold mb-2">Preferred Date</label>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 font-body" />
              </div>
              <button type="submit" className="w-full gold-gradient px-6 py-4 rounded-xl text-primary-foreground font-semibold text-lg glow-hover flex items-center justify-center gap-2">
                Book Your Lawn Event <Send size={20} />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default LawnsContact;
