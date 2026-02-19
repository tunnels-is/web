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
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-2xl md:text-3xl',
    xlarge: 'text-3xl md:text-4xl'
  }[titleSize] || 'text-2xl md:text-3xl';

  const maxWidthClass = alignment === 'center' ? 'max-w-2xl mx-auto' : '';

  return (
    <div className={`mb-10 ${alignmentClass} ${className}`}>
      {alignment === 'center' && (
        <div className="flex justify-center mb-4">
          <div className="accent-line" />
        </div>
      )}
      {alignment === 'left' && (
        <div className="mb-4">
          <div className="accent-line" />
        </div>
      )}
      <h2 className={`${titleSizeClass} font-bold mb-3 tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base text-dark-text-secondary leading-relaxed ${maxWidthClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
