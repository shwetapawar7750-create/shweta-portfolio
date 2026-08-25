import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline LED Glowing Dot */}
              <div className="absolute -left-3 top-2.5 w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              </div>

              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor="#06b6d4"
                glarePosition="all"
                scale={1.01}
                transitionSpeed={2500}
              >
                <div className="glass-card glow-border p-6 md:p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-headline font-black text-white flex items-center gap-2.5">
                        <Briefcase size={20} className="text-primary" />
                        {exp.role}
                      </h3>
                      <h4 className="text-base md:text-lg font-semibold text-slate-300 mt-1">{exp.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full whitespace-nowrap w-fit">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-slate-400 flex items-start gap-3">
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
