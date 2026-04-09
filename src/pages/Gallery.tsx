import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { X } from "lucide-react";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, title: "Wedding Ceremony", span: "row-span-2" },
  { src: g2, title: "Birthday Celebration", span: "row-span-2" },
  { src: g3, title: "Corporate Event", span: "" },
  { src: g4, title: "Reception Dinner", span: "" },
  { src: g5, title: "Sangeet Night", span: "row-span-2" },
  { src: g6, title: "Outdoor Dinner", span: "row-span-2" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageWrapper>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">Our Gallery</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Moments of <span className="gold-text">Elegance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the magical events we've hosted. Every frame tells a story of love, joy, and celebration.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-royal/0 group-hover:bg-royal/40 transition-all duration-500 flex items-end p-6">
                    <span className="font-display text-cream text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      {img.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-royal/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, rotateY: -15 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.7, rotateY: 15 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].title}
                className="rounded-2xl max-h-[80vh] object-contain shadow-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground shadow-lg"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-display text-cream text-xl font-semibold bg-royal/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                  {images[selected].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Gallery;
