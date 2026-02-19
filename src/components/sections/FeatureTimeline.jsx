import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureTimeline = ({
  steps = [],
  showConnectingLines = true,
  compactMode = false
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="relative">
      {showConnectingLines && (
        <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-px bg-dark-border" />
      )}

      <div className={compactMode ? "space-y-4" : "space-y-8"}>
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
            >
              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-dark-accent-primary to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <StepContent step={step} />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                <div className={isEven ? '' : 'flex justify-end'}>
                  {!isEven && <StepContent step={step} />}
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-dark-accent-primary to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-base font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div>
                  {isEven && <StepContent step={step} />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const StepContent = ({ step }) => {
  return (
    <div className="p-4">
      <h3 className="text-base font-bold text-dark-text-primary mb-1.5">
        {step.title}
      </h3>
      <p className="text-sm text-dark-text-secondary leading-relaxed mb-2.5">
        {step.description}
      </p>

      {(step.command || step.specs || step.details || step.providers) && (
        <div className="space-y-2.5">
          {step.command && (
            <div className="bg-dark-bg/60 p-2.5 rounded-lg border border-dark-border/50">
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-dark-accent-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <code className="text-dark-accent-secondary font-mono text-xs flex-1 break-all">
                  {step.command}
                </code>
              </div>
            </div>
          )}

          {(step.specs || step.details) && (
            <p className="text-dark-text-muted text-xs flex items-start gap-1.5">
              <svg className="w-3 h-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{step.specs || step.details}</span>
            </p>
          )}

          {step.providers && step.providers.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-0.5">
              {step.providers.map((provider, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-dark-accent-primary/8 border border-dark-accent-primary/15 text-dark-accent-primary text-xs font-medium rounded-full"
                >
                  {provider}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureTimeline;
