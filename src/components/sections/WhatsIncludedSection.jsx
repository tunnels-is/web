import { motion } from 'framer-motion';

const WhatsIncludedSection = ({ title, features }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="p-5 transition-colors">
              <h3 className="text-base font-semibold text-dark-accent-primary mb-2">
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

export default WhatsIncludedSection;
