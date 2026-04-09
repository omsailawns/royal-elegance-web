import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Features from "./pages/Features";
import Location from "./pages/Location";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout with navbar & footer for banquet pages
const BanquetLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <AnimatePresence mode="wait">{children}</AnimatePresence>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing splash — no navbar/footer */}
          <Route path="/" element={<Landing />} />

          {/* Banquet sub-pages */}
          <Route path="/banquet" element={<BanquetLayout><Index /></BanquetLayout>} />
          <Route path="/banquet/about" element={<BanquetLayout><About /></BanquetLayout>} />
          <Route path="/banquet/services" element={<BanquetLayout><Services /></BanquetLayout>} />
          <Route path="/banquet/gallery" element={<BanquetLayout><Gallery /></BanquetLayout>} />
          <Route path="/banquet/features" element={<BanquetLayout><Features /></BanquetLayout>} />
          <Route path="/banquet/location" element={<BanquetLayout><Location /></BanquetLayout>} />
          <Route path="/banquet/testimonials" element={<BanquetLayout><Testimonials /></BanquetLayout>} />
          <Route path="/banquet/contact" element={<BanquetLayout><Contact /></BanquetLayout>} />

          {/* Lawns placeholder */}
          <Route path="/lawns" element={<Landing />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
