import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">Certifications & Awards</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glow-border p-6 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-primary/20 group"
            >
              <div className="mt-0.5 flex-shrink-0 p-2.5 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-all duration-300">
                {cert.toLowerCase().includes('internship') ? (
                  <Award className="text-secondary filter drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]" size={20} />
                ) : (
                  <CheckCircle className="text-primary filter drop-shadow-[0_0_5px_rgba(99,102,241,0.3)]" size={20} />
                )}
              </div>
              <p className="text-slate-300 font-headline font-semibold text-sm leading-relaxed mt-1 group-hover:text-white transition-colors">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
