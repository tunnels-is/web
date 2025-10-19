import { motion } from 'framer-motion';

/**
 * WaveAnimation - SVG wave animation component for hero sections
 *
 * @param {string} gradientId - Unique ID for the gradient (default: "wave-gradient")
 * @param {Array} gradientStops - Array of gradient stop configurations
 * @param {string} gradientStops[].offset - Offset percentage (e.g., "0%")
 * @param {string} gradientStops[].color - CSS variable or color (e.g., "var(--color-dark-accent-primary)")
 * @param {number} duration - Animation duration in seconds (default: 10)
 * @param {number} opacity - Wave opacity (default: 0.2)
 * @param {string} className - Additional CSS classes (default: "absolute bottom-0 w-full h-96")
 */
const WaveAnimation = ({
  gradientId = "wave-gradient",
  gradientStops = [
    { offset: "0%", color: "var(--color-dark-accent-primary)" },
    { offset: "50%", color: "var(--color-dark-accent-secondary)" },
    { offset: "100%", color: "var(--color-dark-accent-tertiary)" }
  ],
  duration = 10,
  opacity = 0.2,
  className = "absolute bottom-0 w-full h-96"
}) => {
  const wavePaths = [
    "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ];

  return (
    <svg
      className={className}
      style={{ opacity }}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <motion.path
        fill={`url(#${gradientId})`}
        animate={{
          d: wavePaths
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WaveAnimation;
