import React from 'react';
import { ExternalLink, Heart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import tenangincoverImage from 'figma:asset/4ddca3ed41f5569df94d9bb3b2fbb9d862e1a1de.png';
import bugarkuCoverImage from 'figma:asset/63ece9ed1eb5d89b6bcb100ec452224e106f0c30.png';

const projects = [
  {
    title: 'BUGARKU',
    subtitle: 'Digital Healthcare App',
    description: 'A comprehensive digital healthcare platform designed to connect patients with medical professionals seamlessly. Features include appointment scheduling, medical records management, and telemedicine consultations.',
    image: bugarkuCoverImage,
    tags: ['UI/UX', 'Healthcare', 'Mobile App'],
    icon: Smartphone,
    link: 'https://www.figma.com/proto/lWfsXy9RyW9GEa54vowfWs/Bugarku-By-Siti-Nurcica?node-id=888-6390&t=pgu2zzFOXsTfcXIu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'TENANGIN.ME',
    subtitle: 'AI Mental Health App',
    description: 'An AI-powered mental health companion app that provides personalized support, mood tracking, and guided meditation. Designed with empathy and accessibility at its core.',
    image: tenangincoverImage,
    tags: ['UI/UX', 'AI', 'Mental Health'],
    icon: Heart,
    link: 'https://www.figma.com/proto/wEUiUf77Usf8MKKcdCOu91/Tenagin-Me-By-Siti-Nurcica?node-id=2634-42636&p=f&t=NZmj5hNsesUDgF9f-1&scaling=scale-down&content-scaling=fixed&page-id=2611%3A11934&starting-point-node-id=2634%3A42636',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Decorative gradient */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Project image */}
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  
                  {/* Icon overlay */}
                  <motion.div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 rounded-xl border border-cyan-500/50 bg-cyan-500/5 text-cyan-400 font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}