import { motion } from 'framer-motion';

const DownloadHelpSection = ({ title, description, buttons }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-10 rounded-2xl bg-dark-card border border-dark-border text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-dark-text-secondary text-base mb-8 max-w-xl mx-auto">
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
