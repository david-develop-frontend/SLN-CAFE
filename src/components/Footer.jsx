import React from "react";
import { Reveal } from "@/components/ui/reveal";
import Logo from "../images/slnCafe.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "#",
    },
  ];

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Menu", href: "#menu" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Gallery", href: "#gallery" },
    { text: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-restaurant-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-amatic font-bold mb-4 flex items-center">
                The SLN CAFE
                <img
                  src={Logo}
                  alt="SLN Cafe Logo"
                  className="h-8 w-auto ml-2"
                />
              </h3>

              <p className="text-gray-300 mb-4">
                Shivappa Building Near Lakshmi Narasimha Swamy Temple <br />
                Bidarahalli,Bengaluru-560049 <br />
                Karnataka
              </p>
              <p className="text-gray-300">
                <strong>Phone:</strong> +91 88922 37416 <br />
                <strong>Email:</strong> info@theslncafe.com
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Useful Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-restaurant-red"></span>
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-restaurant-red transition-300 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-restaurant-red"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Our Newsletter
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-restaurant-red"></span>
              </h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest updates and special
                offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none bg-white/10 text-white"
                />
                <button
                  type="submit"
                  className="bg-restaurant-red text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300">
                  &copy; {new Date().getFullYear()}{" "}
                  <strong>The SLN CAFE</strong>. All Rights Reserved
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Designed with love for good food and good times
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-restaurant-red/20 p-2 rounded-full hover:bg-restaurant-red transition-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-restaurant-red text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-300 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
