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
    <div className="group p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-all duration-200">
      {icon && (
        <div className="w-12 h-12 mb-4">{icon}</div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-dark-text-primary group-hover:text-dark-accent-primary transition-colors">
        {title}
      </h3>
      <p className="text-dark-text-secondary text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
