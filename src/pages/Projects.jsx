import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management and insights',
      tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tags: ['React', 'Firebase', 'Framer Motion'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Weather Application',
      description: 'Beautiful weather app with detailed forecasts and animations',
      tags: ['React', 'OpenWeather API', 'CSS Animations'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design and smooth animations',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support',
      tags: ['React', 'Next.js', 'MDX', 'Vercel'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            My Projects
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            A collection of projects showcasing my skills and expertise in web development
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-6xl opacity-50">📱</div>
                </motion.div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-dark-bg font-semibold rounded-lg"
                  >
                    View Project
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text-primary mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-dark-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-dark-elevated text-dark-text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Have a Project in Mind?
          </h2>
          <p className="text-dark-text-secondary text-lg mb-8">
            Let's collaborate and create something amazing together
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-dark-accent-primary/20"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
