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
        {/* Image or Illustration */}
        <div className={`${imageOrder} ${image ? 'lg:overflow-visible' : ''}`}>
          {image ? (
            <div className={`relative rounded-xl overflow-hidden border border-dark-border ${
              imagePosition === 'right'
                ? 'lg:-mr-[calc((100vw-1280px)/2+2rem)] xl:-mr-[calc((100vw-1280px)/2+2rem)]'
                : 'lg:-ml-[calc((100vw-1280px)/2+2rem)] xl:-ml-[calc((100vw-1280px)/2+2rem)]'
            }`}>
              <img
                src={image}
                alt={title}
                className="w-full object-cover"
              />
            </div>
          ) : (
            <div className="p-6">
              <div className="aspect-square bg-dark-accent-primary/5 rounded-lg flex items-center justify-center">
                {illustration}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={contentOrder}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            {title}
          </h2>

          {customContent ? (
            customContent
          ) : (
            <>
              {descriptions.map((description, index) => (
                <p key={index} className="text-sm text-dark-text-secondary leading-relaxed mb-4">
                  {description}
                </p>
              ))}
            </>
          )}

          {features.length > 0 && (
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <svg className={`w-4 h-4 text-${featureCheckColor} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-text-primary mb-0.5">{feature.title}</h4>
                    <p className="text-sm text-dark-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcase;
