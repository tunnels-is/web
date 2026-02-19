import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HorizontalSteps = ({
  steps = [],
  variant = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  if (variant === 'compact') {
    return (
      <div ref={ref} className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-dark-border" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative z-10 w-12 h-12 mx-auto mb-3 rounded-full border-2 border-dark-accent-primary flex items-center justify-center">
                <span className="text-sm font-bold text-dark-accent-primary">{index + 1}</span>
              </div>
              <h4 className="text-sm font-semibold text-dark-text-primary mb-1">{step.title}</h4>
              <p className="text-xs text-dark-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-5 transition-all duration-200 group"
          >
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dark-accent-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-dark-border" />
              )}
            </div>
            <h4 className="text-base font-semibold text-dark-text-primary mb-1.5 group-hover:text-dark-accent-primary transition-colors">
              {step.title}
            </h4>
            <p className="text-sm text-dark-text-secondary leading-relaxed">{step.description}</p>
            {step.command && (
              <div className="mt-3 p-2.5 rounded-lg bg-[#0a0e17]/50 font-mono">
                <div className="flex items-start gap-2">
                  <span className="text-dark-accent-green text-xs select-none">$</span>
                  <code className="text-xs text-dark-text-primary break-all">{step.command}</code>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSteps;
