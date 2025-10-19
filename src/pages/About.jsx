import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 82 },
    { name: 'UI/UX Design', level: 78 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Developer',
      description: 'Leading development of modern web applications',
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      description: 'Building scalable solutions with React and Node.js',
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      description: 'Creating responsive and accessible user interfaces',
    },
    {
      year: '2021',
      title: 'Junior Developer',
      description: 'Started professional journey in web development',
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
            About Me
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-dark-text-primary">
                Hello, I'm a Developer
              </h2>
              <div className="space-y-4 text-dark-text-secondary">
                <p>
                  With years of experience in web development, I specialize in creating
                  modern, responsive, and user-friendly applications using the latest
                  technologies.
                </p>
                <p>
                  My passion lies in crafting beautiful interfaces that not only look great
                  but also provide excellent user experiences. I believe in writing clean,
                  maintainable code that stands the test of time.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-2xl aspect-square flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-8xl mb-4">👨‍💻</div>
              <p className="text-dark-text-secondary">
                Building the future, one line at a time
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="bg-dark-surface py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
            <p className="text-dark-text-secondary text-lg">
              Technologies I work with regularly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={skillsVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-dark-text-primary font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-dark-accent-primary font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-dark-elevated rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="h-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-tertiary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Experience Timeline</h2>
          <p className="text-dark-text-secondary text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              animate={timelineVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-dark-accent-primary border-4 border-dark-bg" />

              <div className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-dark-accent-primary/10 transition-all">
                <span className="text-dark-accent-primary font-bold text-sm">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-dark-text-primary mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
