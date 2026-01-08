import React from 'react';
import { Figma, Code, Palette, Blocks, Globe, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'UI/UX Design', icon: Palette, level: 90 },
  { name: 'Figma', icon: Figma, level: 85 },
  { name: 'HTML', icon: Code, level: 80 },
  { name: 'CSS', icon: Code, level: 80 },
  { name: 'JavaScript', icon: Code, level: 75 },
  { name: 'Web3 Basics', icon: Blocks, level: 60 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
                <div className="text-right mt-2 text-sm text-cyan-400">{skill.level}%</div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech stack */}
        <motion.div 
          className="mt-12 p-8 rounded-3xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Tailwind CSS', 'Git', 'Responsive Design', 'Prototyping', 'User Research'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-sm hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}