import { motion } from 'framer-motion';

/**
 * SectionHeader - Reusable section heading component
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle/description
 * @param {string} alignment - Text alignment: center, left, right (default: center)
 * @param {boolean} gradient - Apply gradient to title (default: true)
 * @param {string} titleSize - Title size: small, medium, large, xlarge (default: large)
 * @param {string} className - Additional CSS classes
 */
const SectionHeader = ({
  title,
  subtitle,
  alignment = 'center',
  gradient = true,
  titleSize = 'large',
  className = ''
}) => {
  const alignmentClass = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }[alignment] || 'text-center';

  const titleSizeClass = {
    small: 'text-3xl md:text-4xl',
    medium: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl',
    xlarge: 'text-6xl md:text-7xl'
  }[titleSize] || 'text-5xl md:text-6xl';

  const maxWidthClass = alignment === 'center' ? 'max-w-4xl mx-auto' : '';

  return (
    <div className={`mb-16 ${alignmentClass} ${className}`}>
      <h2 className={`${titleSizeClass} font-bold mb-6`}>
        <span className={gradient ? 'text-gradient' : 'text-dark-text-primary'}>
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl text-dark-text-secondary leading-snug ${maxWidthClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
