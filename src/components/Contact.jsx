import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Send } from 'lucide-react';
import { LinkedinIcon } from './Icons';

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 p-5 glass-card glow-border rounded-xl transition-all duration-300 border border-white/5"
  >
    <div className="p-3 bg-primary/10 text-primary rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.2)]">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-slate-400 text-xs font-mono uppercase tracking-wider">{title}</h4>
      <p className="text-white font-semibold mt-1.5 break-all text-sm">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-black heading-gradient inline-block">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"></div>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-headline font-bold text-white mb-6">Contact Information</h3>
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              value={personalInfo.email} 
              href={`mailto:${personalInfo.email}`} 
            />
            <ContactInfo 
              icon={Phone} 
              title="Phone" 
              value={personalInfo.phone} 
              href={`tel:${personalInfo.phone}`} 
            />
            <ContactInfo 
              icon={LinkedinIcon} 
              title="LinkedIn" 
              value="shweta-pawar" 
              href={personalInfo.linkedin} 
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-card glow-border p-8 rounded-xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <h3 className="text-2xl font-headline font-bold text-white mb-6">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-wide uppercase text-slate-400">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold tracking-wide uppercase text-slate-400">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold tracking-wide uppercase text-slate-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                    placeholder="How can I help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase text-slate-400">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none font-mono text-sm"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95 duration-200"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
