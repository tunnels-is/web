import { motion } from 'framer-motion';

const DownloadHelpSection = ({ title, description, buttons }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 text-center max-w-3xl mx-auto transition-colors"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-dark-text-secondary text-base mb-6 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? "_blank" : undefined}
              rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={button.primary ? 'btn-primary px-8 py-3' : 'btn-secondary px-8 py-3'}
            >
              {button.text}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadHelpSection;
