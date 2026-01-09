import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureTimeline - Modern vertical timeline layout for setup guides
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
 * @param {boolean} compactMode - Use compact spacing (default: false)
 */
const FeatureTimeline = ({
  steps = [],
  showConnectingLines = true,
  compactMode = false
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="relative">
      {/* Vertical timeline line */}
      {showConnectingLines && (
        <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-0.5 bg-dark-accent-primary opacity-30" />
      )}

      <div className={compactMode ? "space-y-6" : "space-y-12"}>
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative"
            >
              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-6">
                {/* Step badge */}
                <div className="relative flex-shrink-0">
                  {/* Step circle */}
                  <div className="relative w-12 h-12 bg-dark-accent-primary rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <StepContent step={step} index={index} position="right" />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                {/* Left content (for odd indices) */}
                <div className={isEven ? '' : 'flex justify-end'}>
                  {!isEven && <StepContent step={step} index={index} position="left" />}
                </div>

                {/* Center - Step badge */}
                <div className="relative flex-shrink-0">
                  {/* Step circle */}
                  <div className="relative w-16 h-16 bg-dark-accent-primary rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Right content (for even indices) */}
                <div>
                  {isEven && <StepContent step={step} index={index} position="right" />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Separated content component for reuse
const StepContent = ({ step, index, position = "right" }) => {
  // Determine border classes based on position
  const borderClasses = position === "left"
    ? "border-r border-b border-dark-border"
    : "border-l border-b border-dark-border";

  return (
    <motion.div
      className="relative"
    >
      {/* Main card */}
      <div className={`relative p-6 md:p-8 ${borderClasses}`}>
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg text-dark-text-secondary leading-snug mb-3">
        {step.description}
      </p>

      {/* Command/specs/details section */}
      {(step.command || step.specs || step.details || step.providers) && (
        <div className="space-y-3">
          {/* Command box */}
          {step.command && (
            <div className="bg-dark-bg/50 p-4 border border-dark-accent-primary/20">
              <div className="flex items-start gap-3">
                {/* Terminal icon */}
                <svg className="w-5 h-5 text-dark-accent-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <code className="text-dark-accent-secondary font-mono text-xs md:text-sm flex-1 break-all">
                  {step.command}
                </code>
              </div>
            </div>
          )}

          {/* Specs/details */}
          {(step.specs || step.details) && (
            <div className="flex items-start gap-2 text-dark-text-muted text-sm">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{step.specs || step.details}</span>
            </div>
          )}

          {/* Providers badges */}
          {step.providers && step.providers.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {step.providers.map((provider, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.12 + idx * 0.05 }}
                  className="px-3 py-1 bg-dark-accent-primary/10 text-dark-accent-primary text-xs font-medium rounded-full border border-dark-accent-primary/30"
                >
                  {provider}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </motion.div>
  );
};

export default FeatureTimeline;
