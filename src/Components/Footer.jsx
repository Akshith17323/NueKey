import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition"><FaFacebookF size={24} /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-white transition"><FaLinkedinIn size={24} /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram size={24} /></a>
        </div>

        <p className="text-sm text-gray-500">
          © 2025 NueKey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;