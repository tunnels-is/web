import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TerminalPreview = ({
  title,
  description,
  lines = [],
  position = 'right',
  features = [],
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const terminal = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-dark-border overflow-hidden bg-[#0a0e17] shadow-2xl shadow-black/20"
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-dark-surface/80 border-b border-dark-border/50">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-dark-text-muted font-mono">terminal</span>
      </div>
      {/* Terminal content */}
      <div className="p-4 font-mono text-[13px] leading-relaxed space-y-1">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
          >
            {line.type === 'command' && (
              <div className="flex items-start gap-2">
                <span className="text-dark-accent-green select-none">$</span>
                <span className="text-dark-text-primary">{line.text}</span>
              </div>
            )}
            {line.type === 'output' && (
              <div className="text-dark-text-muted pl-4">{line.text}</div>
            )}
            {line.type === 'success' && (
              <div className="text-dark-accent-green pl-4">{line.text}</div>
            )}
            {line.type === 'info' && (
              <div className="text-dark-accent-secondary pl-4">{line.text}</div>
            )}
            {line.type === 'comment' && (
              <div className="text-dark-text-muted/60 pl-4"># {line.text}</div>
            )}
            {line.type === 'empty' && <div className="h-3" />}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.span
          className="inline-block w-2 h-4 bg-dark-accent-primary/70 ml-4"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-dark-text-secondary leading-relaxed mb-4 max-w-lg">{description}</p>
      )}
      {features.length > 0 && (
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-dark-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-dark-text-secondary text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10">
      {position === 'left' ? (
        <>{terminal}<div className="flex-1">{content}</div></>
      ) : (
        <>{content}<div className="flex-1 w-full">{terminal}</div></>
      )}
    </div>
  );
};

export default TerminalPreview;
