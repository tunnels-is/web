import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FAQSection - FAQ/Common questions expandable cards
 *
 * @param {Array} faqs - Array of FAQ objects
 * @param {string} faqs[].q - Question
 * @param {string} faqs[].a - Answer
 * @param {string} faqs[].question - Alternative to q
 * @param {string} faqs[].answer - Alternative to a
 * @param {string} icon - Icon emoji for questions (default: "❓")
 */
const FAQSection = ({
  faqs = [],
  icon = "❓"
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-6">
      {faqs.map((faq, index) => {
        const question = faq.q || faq.question;
        const answer = faq.a || faq.answer;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.25, delay: index * 0.04, ease: [0.4, 0, 0.2, 1] }}
            className="group bg-dark-surface p-8 rounded-2xl hover:bg-dark-elevated border border-transparent hover:border-dark-accent-primary/30 transition-all duration-150"
          >
            <h3 className="text-xl font-bold text-dark-accent-primary mb-2 leading-tight flex items-start gap-3 group-hover:text-dark-accent-secondary transition-colors duration-150">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <span>{question}</span>
            </h3>
            <p className="text-base text-dark-text-secondary leading-snug pl-11">
              {answer}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQSection;
