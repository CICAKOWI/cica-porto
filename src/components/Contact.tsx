import React from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:cicaluci5@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-cyan-500/5 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
                    <Mail className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">cicaluci5@gmail.com</div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div 
                  className="flex items-start gap-4 p-3 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">Indonesia</div>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-cyan-500/20">
                <h4 className="text-sm text-gray-400 mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/siti-nurcica-717254281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/CICAKOWI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all group"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div 
            className="p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}