const FeatureCard = ({
  title,
  content,
  description,
  icon,
  delay = 0,
  variant = 'simple'
}) => {
  const text = content || description;

  return (
    <div className="group p-5 transition-all duration-200">
      {icon && (
        <div className="w-10 h-10 mb-3">{icon}</div>
      )}
      <h3 className="text-base font-semibold mb-1.5 text-dark-text-primary group-hover:text-dark-accent-primary transition-colors">
        {title}
      </h3>
      <p className="text-dark-text-secondary text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
