import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2025',
    title: 'UI/UX Design Competition - 1st Place',
    organization: 'National Design Summit',
    description: 'Won first place for innovative healthcare app design',
    icon: Trophy,
  },
  {
    year: '2025',
    title: 'Best Student Project Award',
    organization: 'University Informatics Expo',
    description: 'Recognized for outstanding TENANGIN.ME project',
    icon: Award,
  },
  {
    year: '2024',
    title: 'UI/UX Design Excellence',
    organization: 'Regional Tech Competition',
    description: 'Awarded for exceptional user-centered design approach',
    icon: Star,
  },
  {
    year: '2024',
    title: 'Innovation Challenge Finalist',
    organization: 'Campus Innovation Week',
    description: 'Finalist in the digital health innovation category',
    icon: Medal,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-cyan-400">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline line connector */}
                {index < achievements.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent md:left-[4.5rem]"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Year badge */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all z-10"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="w-20 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                      <span className="text-cyan-400 font-semibold text-sm">{achievement.year}</span>
                    </div>
                  </div>

                  {/* Achievement card */}
                  <motion.div 
                    className="flex-1 p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{achievement.organization}</p>
                    <p className="text-gray-400">{achievement.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '4+', label: 'Awards Won' },
            { value: '2+', label: 'Major Projects' },
            { value: '6+', label: 'Skills Mastered' },
            { value: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl text-center hover:bg-slate-900/50 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold text-cyan-400 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}