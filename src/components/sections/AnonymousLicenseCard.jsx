import { motion } from 'framer-motion';

const AnonymousLicenseCard = ({ title, description, price, period, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 max-w-2xl mx-auto transition-colors"
    >
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-dark-text-secondary text-sm">{description}</p>
      </div>
      <div className="flex items-baseline justify-center mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-dark-text-muted ml-1.5 text-sm">{period}</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary block w-full max-w-sm mx-auto text-center py-2.5"
      >
        Purchase License Key
      </a>
    </motion.div>
  );
};

export default AnonymousLicenseCard;
