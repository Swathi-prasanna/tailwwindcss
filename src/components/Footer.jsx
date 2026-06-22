import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#021f1c] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h1 className="text-2xl font-bold mb-4">
              clear<span className="text-teal-300">wave</span>
            </h1>
            <p className="text-gray-400 leading-7 text-sm max-w-xs mb-6">
              The calm, powerful workspace for teams that want to focus on work — not on managing it.
            </p>
            <div className="flex gap-3">
              {[
                { name: "twitter", icon: <RiTwitterXFill /> },
                { name: "linkedin", icon: <TbBrandLinkedin /> },
                { name: "youtube", icon: <FaYoutube /> },
                { name: "tiktok", icon: <IoLogoTiktok /> }
              ].map((social, index) => (
                <div
                  key={social.name}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">Product</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Features</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Mobile App</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Integrations</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Changelog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">About</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Press Kit</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Status</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">Support</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Security</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Contact</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Community</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">@copy;2026 Clearwave. Design by TemplateMo.</p>
          <div className="flex gap-8 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
