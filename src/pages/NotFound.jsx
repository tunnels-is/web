import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-dark-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-dark-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-dark-accent-primary/20"
            >
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
