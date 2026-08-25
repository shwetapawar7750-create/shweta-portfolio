import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass text-xs font-semibold tracking-wider uppercase text-secondary border border-secondary/20">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tight leading-none">
              Hi, I'm <br className="hidden lg:block" /><span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-lg md:text-2xl font-mono text-muted mt-4 h-12 md:h-10">
              <TypeAnimation
                sequence={[
                  'Aspiring Software Developer',
                  2000,
                  'AI & Data Science Undergraduate',
                  2000,
                  'Hardware & AI Integrator',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </h2>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-base text-slate-300 mt-6 leading-relaxed">
              Engineering intelligent systems and exploring the frontiers of machine learning. Turning complex data into actionable insights.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10"
            >
              <a href="#projects" className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>

              <a href={personalInfo.resumeUrl} className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2">
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Glowing Background for Photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full animate-blob filter blur-3xl opacity-30"></div>
              
              {/* Photo Container */}
              <div className="absolute inset-4 lg:inset-8 glass rounded-full z-10 flex items-center justify-center overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                {/* 
                  IMPORTANT: Replace this image src with your actual photo 
                  Place your image in the 'public' folder (e.g., public/profile.jpg) 
                  and change src to "/profile.jpg"
                */}
                <img 
                  src="/profile.jpg.jpeg" 
                  alt="Shweta Pawar" 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Shweta+Pawar&background=0D8ABC&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
