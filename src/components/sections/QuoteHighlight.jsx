import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const accentMap = {
  blue: {
    text: 'text-dark-accent-primary',
    bg: 'bg-dark-accent-primary',
    border: 'border-dark-accent-primary/20',
    gradientFrom: 'from-dark-accent-primary',
    gradientTo: 'to-blue-400',
    divider: 'bg-dark-accent-primary',
    // raw hex for the decorative quote mark (rendered via inline style)
    hex: '#3b82f6',
  },
  teal: {
    text: 'text-dark-accent-tertiary',
    bg: 'bg-dark-accent-tertiary',
    border: 'border-dark-accent-tertiary/20',
    gradientFrom: 'from-dark-accent-tertiary',
    gradientTo: 'to-cyan-400',
    divider: 'bg-dark-accent-tertiary',
    hex: '#06b6d4',
  },
  green: {
    text: 'text-dark-accent-green',
    bg: 'bg-dark-accent-green',
    border: 'border-dark-accent-green/20',
    gradientFrom: 'from-dark-accent-green',
    gradientTo: 'to-emerald-400',
    divider: 'bg-dark-accent-green',
    hex: '#10b981',
  },
};

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

const QuoteHighlight = ({
  quote = '',
  author = '',
  role = '',
  avatar,
  accent = 'blue',
  variant = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();
  const colors = accentMap[accent] || accentMap.blue;
  const initials = getInitials(author);

  if (variant === 'large') {
    return (
      <div ref={ref} className="relative">
        {/* Left gradient border */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} rounded-full`}
        />

        <div className="pl-8 pr-4 py-2">
          {/* Quote text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl font-medium text-dark-text-primary leading-snug italic">
              {quote}
            </p>
          </motion.blockquote>

          {/* Author section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 flex items-center justify-end gap-3"
          >
            {/* Avatar */}
            <div className="text-right">
              <p className="text-sm font-semibold text-dark-text-primary leading-tight">
                {author}
              </p>
              {role && (
                <p className="text-xs text-dark-text-muted mt-0.5">{role}</p>
              )}
            </div>

            <div
              className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border ${colors.border}`}
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt={author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span
                  className={`text-xs font-bold text-dark-bg ${colors.bg} w-full h-full flex items-center justify-center`}
                >
                  {initials}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Default variant — centered, max-w-3xl
  return (
    <div ref={ref} className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
      {/* Decorative quote mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="select-none leading-none"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '8rem',
          lineHeight: 1,
          color: colors.hex,
          opacity: 0.15,
          marginBottom: '-1.5rem',
        }}
      >
        &ldquo;
      </motion.div>

      {/* Quote text */}
      <motion.blockquote
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xl font-medium text-dark-text-primary leading-relaxed italic">
          {quote}
        </p>
      </motion.blockquote>

      {/* Author info */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        {/* Accent divider line */}
        <div className={`h-0.5 w-8 rounded-full ${colors.divider}`} />

        <div className="mt-1">
          <p className="text-sm font-semibold text-dark-text-primary">{author}</p>
          {role && (
            <p className="text-xs text-dark-text-muted mt-0.5">{role}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuoteHighlight;
