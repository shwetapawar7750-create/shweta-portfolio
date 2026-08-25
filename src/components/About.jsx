import { motion } from 'framer-motion';
import { personalInfo, education } from '../data/portfolioData';
import { BrainCircuit, Code, Database, Cpu, Layout, TerminalSquare } from 'lucide-react';

const About = () => {
  const whatIWorkWith = [
    { icon: <BrainCircuit size={24} className="text-primary" />, title: "AI & Machine Learning" },
    { icon: <Layout size={24} className="text-secondary" />, title: "Full-Stack Development" },
    { icon: <TerminalSquare size={24} className="text-accent" />, title: "Python Development" },
    { icon: <Database size={24} className="text-primary" />, title: "Data Processing" },
    { icon: <Cpu size={24} className="text-secondary" />, title: "Hardware Integration" },
    { icon: <Code size={24} className="text-accent" />, title: "Web Development" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-base leading-relaxed"
          >
            <p className="glass-card glow-border p-8 rounded-xl border-l-4 border-l-primary text-slate-300">
              {personalInfo.about}
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-headline font-bold text-white mb-6">Education Highlight</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover:border-primary/20 transition-all border border-white/5">
                    <h4 className="text-lg font-headline font-bold text-primary">{edu.degree}</h4>
                    <p className="text-slate-300 mt-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-4 text-xs font-mono text-slate-400">
                      <span>{edu.duration}</span>
                      {edu.details && <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">{edu.details}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: What I Work With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-headline font-bold text-white mb-6">What I Work With</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatIWorkWith.map((item, index) => (
                <div key={index} className="glass-card glow-border p-5 rounded-xl flex items-center gap-4 group transition-all duration-300">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-headline font-semibold text-slate-200 group-hover:text-white transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
