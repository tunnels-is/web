import { motion } from 'framer-motion';

const QuickStartSection = ({ title, steps }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex justify-center mb-4">
          <div className="accent-line" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-5">
              <div className="w-10 h-10 bg-gradient-to-br from-dark-accent-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-base font-semibold mb-1.5">{step.title}</h3>
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
