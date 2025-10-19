import { motion } from 'framer-motion';

/**
 * FloatingOrbs - Animated background orbs for hero sections
 *
 * @param {Array} orbs - Array of orb configurations
 * @param {string} orbs[].position - CSS class for positioning (e.g., "top-20 right-20")
 * @param {string} orbs[].size - CSS class for size (e.g., "w-64 h-64")
 * @param {string} orbs[].color - CSS class for color (e.g., "bg-dark-accent-primary")
 * @param {number} orbs[].duration - Animation duration in seconds
 * @param {number} orbs[].delay - Animation delay in seconds
 * @param {Array} orbs[].yRange - Y-axis movement range [start, middle, end]
 * @param {Array} orbs[].scaleRange - Scale range [start, middle, end]
 * @param {Array} orbs[].opacityRange - Opacity range [start, middle, end]
 */
const FloatingOrbs = ({ orbs = [] }) => {
  // Default orbs configuration if none provided
  const defaultOrbs = [
    {
      position: "top-20 right-20",
      size: "w-64 h-64",
      color: "bg-dark-accent-primary",
      duration: 8,
      delay: 0,
      yRange: [0, -30, 0],
      scaleRange: [1, 1.1, 1],
      opacityRange: [0.3, 0.5, 0.3]
    },
    {
      position: "bottom-40 left-20",
      size: "w-80 h-80",
      color: "bg-dark-accent-tertiary",
      duration: 10,
      delay: 1,
      yRange: [0, 30, 0],
      scaleRange: [1, 1.2, 1],
      opacityRange: [0.2, 0.4, 0.2]
    }
  ];

  const orbsToRender = orbs.length > 0 ? orbs : defaultOrbs;

  return (
    <>
      {orbsToRender.map((orb, index) => (
        <motion.div
          key={index}
          animate={{
            y: orb.yRange,
            scale: orb.scaleRange,
            opacity: orb.opacityRange
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
          className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full blur-3xl`}
        />
      ))}
    </>
  );
};

export default FloatingOrbs;
