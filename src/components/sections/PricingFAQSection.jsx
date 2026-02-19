import { motion } from 'framer-motion';

const PricingFAQSection = ({ title, questions }) => {
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
        <div className="space-y-4 max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-colors">
              <h3 className="text-base font-semibold mb-2">{item.question}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed">
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
