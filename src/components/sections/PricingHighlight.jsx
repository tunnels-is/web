import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const PricingHighlight = ({
  title,
  description,
  icon,
  highlights = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-dark-accent-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-white"
        >
          {icon && (
            <div className="flex justify-center mb-6">{icon}</div>
          )}

          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">{title}</h2>

          {description && (
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
              {description}
            </p>
          )}

          {highlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/15"
                >
                  <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm opacity-85">{item.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHighlight;
