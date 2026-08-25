import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 shadow-xl shadow-indigo-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl font-headline font-black tracking-tight text-primary">
              Shweta Pawar
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-all hover:bg-white/5 rounded-lg px-3 py-1.5 font-display font-bold tracking-tight text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume button */}
          <div className="hidden md:flex items-center">
            <a 
              href={personalInfo.resumeUrl} 
              className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all active:scale-95 duration-200 font-medium text-sm"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-20 left-0 w-full border-b border-white/10 flex flex-col py-4 px-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white text-base font-medium py-2 px-3 hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center text-primary border border-primary/20 bg-primary/10 py-2.5 rounded-lg mt-2 font-medium"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
