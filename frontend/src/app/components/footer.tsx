import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Preeti Rajdhami. All rights reserved.
        </p>

        
        <div className="flex gap-5 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-primaryText hover:scale-110 transition-transform duration-300">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primaryText  hover:scale-110 transition-transform duration-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primaryText  hover:scale-110 transition-transform duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
