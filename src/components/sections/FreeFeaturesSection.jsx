import { motion } from 'framer-motion';

const FreeFeaturesSection = ({ title, description, features }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
          {title}
        </h2>
        <p className="text-center text-dark-text-secondary text-base mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-colors">
              <h3 className="text-lg font-semibold text-dark-accent-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed">
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
