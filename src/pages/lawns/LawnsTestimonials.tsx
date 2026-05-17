import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  PlayCircle,
  CalendarDays,
} from "lucide-react";

const videos = [
  {
    title: "Royal Wedding Highlights",
    date: "February 2026",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
  },

  {
    title: "Luxury Reception Night",
    date: "January 2026",
    video:
      "https://www.w3schools.com/html/movie.mp4",
  },

  {
    title: "Engagement Ceremony",
    date: "December 2025",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
  },

  {
    title: "Corporate Annual Event",
    date: "November 2025",
    video:
      "https://www.w3schools.com/html/movie.mp4",
  },
];

const PastEvents = () => {
  return (
    <PageWrapper>
      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">
              Event Memories
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Past Event <span className="gold-text">Videos</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Relive the unforgettable celebrations hosted
              at OM SAI Banquet & Lawns.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {videos.map((video, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden rounded-3xl"
              >

                {/* Video */}
                <div className="relative overflow-hidden">

                  <video
                    controls
                    className="w-full h-[350px] object-cover"
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>

                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm">
                    <PlayCircle size={16} />
                    Event Video
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="font-display text-2xl font-bold mb-3">
                    {video.title}
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CalendarDays size={16} />
                    {video.date}
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default PastEvents;