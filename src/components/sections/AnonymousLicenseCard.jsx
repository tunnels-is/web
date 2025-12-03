import { motion } from 'framer-motion';

const AnonymousLicenseCard = ({ title, description, price, period, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" p-8 rounded-xl max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-dark-text-secondary">{description}</p>
      </div>
      <div className="flex items-center justify-center mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-dark-text-secondary ml-2">{period}</span>
      </div>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block w-full max-w-sm mx-auto px-6 py-3 glass-effect rounded-lg font-semibold text-center hover:bg-dark-elevated transition-all"
      >
        Purchase License Key
      </motion.a>
    </motion.div>
  );
};

export default AnonymousLicenseCard;
