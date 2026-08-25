import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Cpu, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt 
                className="h-full"
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#06b6d4"
                glarePosition="all"
                scale={1.01}
                transitionSpeed={2500}
              >
                <div className="glass-card rounded-xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.1)] glow-border">
                  {/* Project Image/Visual Placeholder */}
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    {project.type === 'ai-vision' ? (
                      <BrainCircuit size={56} className="text-primary opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    ) : (
                      <Cpu size={56} className="text-secondary opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    )}
                    
                    {/* Decorative glowing gradient spheres */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${project.type === 'ai-vision' ? 'bg-primary' : 'bg-secondary'}`}></div>
                    <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full filter blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${project.type === 'ai-vision' ? 'bg-secondary' : 'bg-primary'}`}></div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-350 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <a 
                        href={project.liveUrl} 
                        className="flex-1 flex justify-center items-center gap-2 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white text-sm font-semibold rounded-lg transition-all border border-primary/20 hover:border-primary active:scale-95 duration-200"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="flex items-center justify-center py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-colors border border-white/10"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
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

export default Projects;
