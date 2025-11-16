import { motion } from 'framer-motion';

const PricingFAQSection = ({ title, questions }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {title}
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-dark-text-secondary">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingFAQSection;
