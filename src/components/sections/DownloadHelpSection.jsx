import { motion } from 'framer-motion';

const DownloadHelpSection = ({ title, description, buttons }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" p-12 rounded-2xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? "_blank" : undefined}
              rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${button.primary
                  ? 'bg-dark-accent-primary text-white hover:bg-opacity-90'
                  : 'glass-effect hover:bg-dark-elevated'
                }`}
            >
              {button.text}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadHelpSection;
