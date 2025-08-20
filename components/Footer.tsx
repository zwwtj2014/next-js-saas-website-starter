import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        <p className="ml-4">&copy; {currentYear} Your Company Name. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 mr-4 sm:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <AiOutlineFacebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <AiOutlineLinkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="X (formerly Twitter)" className="hover:text-gray-300">
            <AiOutlineX className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-300">
            <AiOutlineGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
