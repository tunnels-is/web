import { motion } from 'framer-motion';

const AllReleasesSection = ({ description, buttonText, url }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-dark-text-secondary text-sm mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-block px-6 py-2.5"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
};

export default AllReleasesSection;
