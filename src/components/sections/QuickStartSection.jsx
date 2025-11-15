import { motion } from 'framer-motion';

const QuickStartSection = ({ title, steps }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" p-12 rounded-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-dark-accent-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'tertiary'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-dark-text-secondary">
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
