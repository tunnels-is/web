import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureShowcase = ({
  title,
  descriptions = [],
  features = [],
  image = null,
  illustration = null,
  imagePosition = 'right',
  featureCheckColor = 'dark-accent-primary',
  customContent = null
}) => {
  const [ref, isVisible] = useScrollAnimation();

  // Illustration-only fallback: keep the old two-column grid layout
  if (!image && illustration) {
    const contentOrder = imagePosition === 'left' ? 'order-2 lg:order-2' : 'order-1 lg:order-1';
    const imageOrder = imagePosition === 'left' ? 'order-1 lg:order-1' : 'order-2 lg:order-2';

    return (
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className={imageOrder}>
            <div className="p-6">
              <div className="aspect-square bg-dark-accent-primary/5 rounded-lg flex items-center justify-center">
                {illustration}
              </div>
            </div>
          </div>
          <div className={contentOrder}>
            <TextContent
              title={title}
              descriptions={descriptions}
              features={features}
              featureCheckColor={featureCheckColor}
              customContent={customContent}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  const isLeft = imagePosition === 'left';

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Full-width image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>

        {/* Overlapping text panel — half in, half out of the image corner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 ${isLeft ? 'mr-auto lg:-ml-[20%]' : 'ml-auto lg:-mr-[20%]'} w-full sm:w-3/4 lg:w-2/5 -mt-[20%] sm:-mt-[15%] lg:-mt-[10%]`}
        >
          <div
            className={`backdrop-blur-xl bg-dark-bg/75 border border-white/[0.06] rounded-2xl p-5 sm:p-6 shadow-2xl`}
          >
            <TextContent
              title={title}
              descriptions={descriptions}
              features={features}
              featureCheckColor={featureCheckColor}
              customContent={customContent}
              compact
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const TextContent = ({
  title,
  descriptions,
  features,
  featureCheckColor,
  customContent,
  compact = false,
}) => (
  <>
    <h2 className={`${compact ? 'text-lg sm:text-xl' : 'text-2xl md:text-3xl'} font-bold mb-2 tracking-tight text-white`}>
      {title}
    </h2>

    {customContent ? (
      customContent
    ) : (
      <>
        {descriptions.map((description, index) => (
          <p key={index} className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} text-dark-text-primary/70 leading-relaxed mb-3`}>
            {description}
          </p>
        ))}
      </>
    )}

    {features.length > 0 && (
      <div className={`${compact ? 'space-y-1.5' : 'space-y-3'}`}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <svg className={`w-3.5 h-3.5 text-${featureCheckColor} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} font-medium text-dark-text-primary`}>{feature.title}</span>
          </div>
        ))}
      </div>
    )}
  </>
);

export default FeatureShowcase;
