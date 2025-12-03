import { motion } from 'framer-motion';

const DownloadHero = ({ title, subtitle, version }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl text-dark-text-secondary mb-4">
          Latest version: <span className="text-dark-accent-primary font-semibold">v{version}</span>
        </p>
        <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default DownloadHero;
