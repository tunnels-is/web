import { motion } from 'framer-motion';

const QuickStartSection = ({ title, steps }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-dark-card border border-dark-border">
              <div className="w-12 h-12 bg-dark-accent-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStartSection;
