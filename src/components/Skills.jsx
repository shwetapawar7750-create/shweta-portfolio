import { motion } from 'framer-motion';
import { skills, softSkills } from '../data/portfolioData';

const SkillCategory = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card glow-border p-6 rounded-xl"
  >
    <h3 className="text-lg font-headline font-bold text-white mb-5 flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1.5 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 rounded-lg font-mono text-xs text-slate-300 hover:text-white transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Programming" items={skills.programming} delay={0.1} />
          <SkillCategory title="Web Development" items={skills.webDevelopment} delay={0.2} />
          <SkillCategory title="AI & Data Science" items={skills.aiDataScience} delay={0.3} />
          <SkillCategory title="Databases" items={skills.databases} delay={0.4} />
          <SkillCategory title="Hardware" items={skills.hardware} delay={0.5} />
          <SkillCategory title="Tools" items={skills.tools} delay={0.6} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-headline font-bold text-center text-white mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="glass-card px-5 py-2.5 rounded-full border border-white/5 hover:border-secondary/30 text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
