import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcase - Two-column layout featuring detailed content with image or illustration
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {Array} features - Array of feature objects with title and description
 * @param {string} image - Image URL (alternative to illustration)
 * @param {React.ReactNode} illustration - SVG or illustration component (alternative to image)
 * @param {string} imagePosition - Position of image/illustration: left or right (default: right)
 * @param {string} featureCheckColor - Color for checkmark (default: dark-accent-primary)
 * @param {React.ReactNode} customContent - Optional custom content to replace descriptions
 */
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

  // When imagePosition is 'left': image is order-1 (left), content is order-2 (right)
  // When imagePosition is 'right': content is order-1 (left), image is order-2 (right)
  const contentOrder = imagePosition === 'left' ? 'order-2 lg:order-2' : 'order-1 lg:order-1';
  const imageOrder = imagePosition === 'left' ? 'order-1 lg:order-1' : 'order-2 lg:order-2';

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image or Illustration */}
        <div className={`${imageOrder} ${image ? 'lg:overflow-visible' : ''}`}>
          {image ? (
            // Image variant - extends beyond ContentSection constraints only on outer edge
            <div className={`relative rounded-xl overflow-hidden ${
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
            // Illustration variant
            <div className="bg-dark-surface p-8 rounded-xl">
              <div className="aspect-square bg-dark-accent-primary/10 rounded-lg flex items-center justify-center">
                {illustration}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={contentOrder}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>

          {customContent ? (
            customContent
          ) : (
            <>
              {descriptions.map((description, index) => (
                <p key={index} className="text-lg text-dark-text-secondary leading-snug mb-6">
                  {description}
                </p>
              ))}
            </>
          )}

          {features.length > 0 && (
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className={`text-${featureCheckColor} text-2xl`}>✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-dark-text-secondary">{feature.description}</p>
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
