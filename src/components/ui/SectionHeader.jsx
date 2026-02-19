const SectionHeader = ({
  title,
  subtitle,
  alignment = 'center',
  titleSize = 'large',
  className = ''
}) => {
  const alignmentClass = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }[alignment] || 'text-center';

  const titleSizeClass = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-3xl md:text-4xl',
    xlarge: 'text-4xl md:text-5xl'
  }[titleSize] || 'text-3xl md:text-4xl';

  const maxWidthClass = alignment === 'center' ? 'max-w-3xl mx-auto' : '';

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h2 className={`${titleSizeClass} font-bold mb-4 tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-dark-text-secondary leading-relaxed ${maxWidthClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
