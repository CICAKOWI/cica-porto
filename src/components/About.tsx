import React from 'react';
import { Code2, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main bio card */}
          <motion.div 
            className="md:col-span-3 p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.1)] hover:shadow-[0_0_70px_rgba(6,182,212,0.2)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Hi! I'm Siti Nurcica, a passionate Informatics student with a keen interest in creating 
              beautiful and intuitive user experiences. I specialize in UI/UX design and front-end development, 
              while actively exploring the exciting world of Web3 and decentralized technologies. 
              My goal is to bridge design and technology to build products that make a difference.
            </p>
          </motion.div>

          {/* Feature cards */}
          {[
            {
              icon: Palette,
              title: 'Design Focus',
              description: 'Creating pixel-perfect interfaces with user-centered design principles',
              delay: 0.3
            },
            {
              icon: Code2,
              title: 'Development',
              description: 'Building responsive web applications with modern technologies',
              delay: 0.4
            },
            {
              icon: Sparkles,
              title: 'Web3 Explorer',
              description: 'Diving into blockchain and decentralized application development',
              delay: 0.5
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl hover:bg-slate-900/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}