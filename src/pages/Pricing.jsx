import { pricingContent } from '../content/siteContent';
import PricingHero from '../components/sections/PricingHero';
import SubscriptionPlans from '../components/sections/SubscriptionPlans';
import AnonymousLicenseCard from '../components/sections/AnonymousLicenseCard';
import FreeFeaturesSection from '../components/sections/FreeFeaturesSection';
import PricingFAQSection from '../components/sections/PricingFAQSection';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import {
  OpenSourceIllustration,
  SelfHostedIllustration,
} from '../components/illustrations';

const Pricing = () => {
  const { hero, subscriptions, anonymousKey, freeFeatures, faq, cta } = pricingContent;

  return (
    <div className="min-h-screen">
      <PricingHero
        title={hero.title}
        description={hero.description}
        tagline={hero.tagline}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnonymousLicenseCard
          title={anonymousKey.title}
          description={anonymousKey.description}
          price={anonymousKey.price}
          period={anonymousKey.period}
          url={anonymousKey.url}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SubscriptionPlans subscriptions={subscriptions} />
      </section>

      <FreeFeaturesSection
        title={freeFeatures.title}
        description={freeFeatures.description}
        features={freeFeatures.features}
      />

      {/* Illustrated: Free Forever */}
      <IllustratedSection
        subtitle="No Hidden Costs"
        title="Open Source = Free Forever"
        description="All core features are available in our open-source version. No artificial limitations, no feature paywalls. Self-host and use every feature for free."
        features={[
          "Full VPN functionality included",
          "Unlimited devices and connections",
          "No bandwidth restrictions",
          "Community support on Discord"
        ]}
        illustration={OpenSourceIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Illustrated: Self-Host */}
      <IllustratedSection
        subtitle="Own Your Infrastructure"
        title="Self-Host for Complete Control"
        description="Deploy on your own servers and pay nothing to us. Full control over your data, your network, and your costs. The subscription is optional support."
        features={[
          "Run on your own hardware",
          "No recurring fees required",
          "Full data sovereignty",
          "Commercial use allowed"
        ]}
        illustration={SelfHostedIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
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
