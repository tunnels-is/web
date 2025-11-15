import { motion } from 'framer-motion';

const AllReleasesSection = ({ description, buttonText, url }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <p className="text-dark-text-secondary mb-4">
          {description}
        </p>
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AllReleasesSection;
