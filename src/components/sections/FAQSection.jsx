import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FAQSection = ({
  faqs = [],
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-2.5">
      {faqs.map((faq, index) => {
        const question = faq.q || faq.question;
        const answer = faq.a || faq.answer;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.25, delay: index * 0.03 }}
            className="group p-5 transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-dark-text-primary mb-1.5 group-hover:text-dark-accent-primary transition-colors">
              {question}
            </h3>
            <p className="text-sm text-dark-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQSection;
