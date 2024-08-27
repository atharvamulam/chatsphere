import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FF4E6E] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
              <li><a href="/blog" className="hover:text-gray-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              src="/icons/logo.svg"
              alt="Logo"
              className="mx-auto w-12 h-12"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="/terms-of-service" className="hover:text-gray-200">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="flex justify-center md:justify-start gap-4">
              <li><a href="https://twitter.com/VedaAI" target="_blank" rel="noopener noreferrer"><img src="/images/X_logo.jpg" alt="Twitter" className="w-6 h-6" /></a></li>
              <li><a href="https://www.linkedin.com/company/vedaai-io/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.jpg" alt="LinkedIn" className="w-6 h-6" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-200">
          <p>&copy; 2024 ChatSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
