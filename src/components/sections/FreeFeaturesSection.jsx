import { motion } from 'framer-motion';

const FreeFeaturesSection = ({ title, description, features }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">{title}</span>
        </h2>
        <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FreeFeaturesSection;
