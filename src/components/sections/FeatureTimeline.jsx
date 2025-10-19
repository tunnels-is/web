import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureTimeline - Timeline/step-by-step layout for setup guides
 *
 * @param {Array} steps - Array of step objects
 * @param {string} steps[].step - Step number or identifier
 * @param {string} steps[].title - Step title
 * @param {string} steps[].description - Step description
 * @param {string} steps[].command - Command or code snippet (optional)
 * @param {string} steps[].details - Additional details (optional)
 * @param {string} steps[].specs - Specifications or notes (optional)
 * @param {Array} steps[].providers - Array of provider names (optional)
 * @param {boolean} showConnectingLines - Show connecting lines between steps (default: true)
 * @param {boolean} pulseEffect - Enable pulse effect on step numbers (default: false)
 */
const FeatureTimeline = ({
  steps = [],
  showConnectingLines = true,
  pulseEffect = false
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          className="relative"
        >
          <div className={`flex flex-col md:flex-row gap-8 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}>
            {/* Step Number - Large Circle */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary rounded-full flex items-center justify-center shadow-2xl relative"
            >
              <span className="text-5xl font-bold text-white">{step.step}</span>

              {/* Pulse effect */}
              {pulseEffect && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-dark-accent-primary"
                ></motion.div>
              )}
            </motion.div>

            {/* Content Card */}
            <div className="flex-1 glass-effect p-8 rounded-2xl hover:bg-dark-elevated transition-all duration-300 border border-dark-border hover:border-dark-accent-primary">
              <h3 className="text-3xl font-bold text-dark-accent-primary mb-4">
                {step.title}
              </h3>
              <p className="text-xl text-dark-text-secondary mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Command/Detail Box */}
              {(step.command || step.specs || step.details) && (
                <div className="bg-dark-bg p-6 rounded-xl border border-dark-accent-primary/30">
                  {step.command && (
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-6 h-6 text-dark-accent-tertiary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <code className="text-dark-accent-secondary font-mono text-sm flex-1 break-all">
                        {step.command}
                      </code>
                    </div>
                  )}
                  {(step.specs || step.details) && (
                    <p className="text-dark-text-muted text-sm pl-9">
                      {step.specs || step.details}
                    </p>
                  )}
                  {step.providers && (
                    <div className="mt-4 pl-9">
                      <div className="flex flex-wrap gap-2">
                        {step.providers.map((provider, idx) => (
                          <span key={idx} className="px-3 py-1 bg-dark-accent-primary/20 text-dark-accent-primary text-xs rounded-full">
                            {provider}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Connecting Line */}
          {showConnectingLines && index < steps.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              className="hidden md:block absolute left-16 top-32 w-1 h-8 bg-gradient-to-b from-dark-accent-secondary to-dark-accent-tertiary origin-top"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureTimeline;
