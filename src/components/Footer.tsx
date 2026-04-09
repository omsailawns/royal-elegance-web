import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-royal text-cream py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold gold-text mb-4">OM SAI</h3>
          <p className="text-cream/60 text-sm leading-relaxed">
            Where Celebrations Become Memories. Premium banquet hall and lawn venue for your special occasions.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold-light">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Gallery", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="block text-cream/60 hover:text-gold-light transition-colors text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold-light">Contact</h4>
          <div className="space-y-2 text-cream/60 text-sm">
            <p>📍 123 Royal Avenue, City</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@omsaibanquet.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-gold" /> OM SAI BANQUET & LAWNS © 2026
      </div>
    </div>
  </footer>
);

export default Footer;
