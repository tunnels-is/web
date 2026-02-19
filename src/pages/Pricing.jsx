import { pricingContent } from '../content/siteContent';
import PricingHero from '../components/sections/PricingHero';
import SubscriptionPlans from '../components/sections/SubscriptionPlans';
import AnonymousLicenseCard from '../components/sections/AnonymousLicenseCard';
import FreeFeaturesSection from '../components/sections/FreeFeaturesSection';
import PricingFAQSection from '../components/sections/PricingFAQSection';
import CTASection from '../components/sections/CTASection';
import ComparisonCards from '../components/sections/ComparisonCards';
import IllustratedSection from '../components/IllustratedSection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';

const ZeroCostBadge = () => (
  <div className="text-center">
    <div className="text-5xl md:text-7xl font-bold text-dark-accent-tertiary leading-none tracking-tight">$0</div>
    <div className="text-sm text-dark-text-secondary mt-3 font-medium">Self-host cost</div>
  </div>
);

const Pricing = () => {
  const { hero, subscriptions, anonymousKey, freeFeatures, cta } = pricingContent;

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

      {/* Comparison: Commercial VPNs vs Tunnels */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Pay More?"
          subtitle="Compare Tunnels to commercial VPN services"
        />
        <ComparisonCards
          dividerLabel="vs"
          leftCard={{
            title: "Commercial VPNs",
            subtitle: "$5-15/month",
            items: [
              "Monthly subscription required",
              "Limited device connections",
              "Their servers, their rules",
              "Closed-source software",
              "Trust their no-logs claims"
            ]
          }}
          rightCard={{
            title: "Tunnels",
            subtitle: "Free forever",
            accent: "green",
            items: [
              "No recurring fees",
              "Unlimited devices",
              "Your server, your control",
              "100% open source",
              "Verify — don't trust"
            ]
          }}
        />
      </ContentSection>

      {/* Self-Hosted */}
      <IllustratedSection
        subtitle="Self-Hosted"
        title="Own Your Infrastructure"
        description="Deploy on your own servers and pay nothing to us. Full control over your data, your network, and your costs."
        features={[
          "Run on your own hardware",
          "No recurring fees required",
          "Full data sovereignty",
          "Commercial use allowed"
        ]}
        illustration={ZeroCostBadge}
        illustrationPosition="left"
        illustrationSize="small"
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
