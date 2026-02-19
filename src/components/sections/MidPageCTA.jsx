import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MidPageCTA = ({ text = 'Ready to get started?', buttonText = 'Download Tunnels', buttonHref = '/download' }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="bg-dark-surface/50 border-y border-dark-border/30">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <p className="text-sm text-dark-text-secondary font-medium">{text}</p>
        <Link
          to={buttonHref}
          className="bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white text-sm font-medium py-2 px-5 rounded transition-colors"
        >
          {buttonText}
        </Link>
      </motion.div>
    </div>
  );
};

export default MidPageCTA;
