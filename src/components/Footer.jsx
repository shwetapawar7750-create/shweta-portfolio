import { personalInfo } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#090d16] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2026 {personalInfo.name}. Built with passion for technology.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
