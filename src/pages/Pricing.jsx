import { pricingContent } from '../content/siteContent';
import PricingHero from '../components/sections/PricingHero';
import SubscriptionPlans from '../components/sections/SubscriptionPlans';
import AnonymousLicenseCard from '../components/sections/AnonymousLicenseCard';
import FreeFeaturesSection from '../components/sections/FreeFeaturesSection';
import PricingFAQSection from '../components/sections/PricingFAQSection';
import CTASection from '../components/sections/CTASection';

const Pricing = () => {
  const { hero, subscriptions, anonymousKey, freeFeatures, faq, cta } = pricingContent;

  return (
    <div className="min-h-screen pt-20 pb-12">
      <PricingHero
        title={hero.title}
        description={hero.description}
        tagline={hero.tagline}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SubscriptionPlans subscriptions={subscriptions} />

        <AnonymousLicenseCard
          title={anonymousKey.title}
          description={anonymousKey.description}
          price={anonymousKey.price}
          period={anonymousKey.period}
          url={anonymousKey.url}
        />
      </section>

      <FreeFeaturesSection
        title={freeFeatures.title}
        description={freeFeatures.description}
        features={freeFeatures.features}
      />

      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
        layout="centered"
      />
    </div>
  );
};

export default Pricing;
