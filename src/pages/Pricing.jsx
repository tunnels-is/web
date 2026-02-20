import { pricingContent } from '../content/siteContent';
import RelatedPages from '../components/sections/RelatedPages';
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
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const { zeroCostBadge: _zcBadge } = pricingContent;
const ZeroCostBadge = () => (
  <div className="text-center">
    <div className="text-5xl md:text-7xl font-bold text-dark-accent-tertiary leading-none tracking-tight">{_zcBadge.value}</div>
    <div className="text-sm text-dark-text-secondary mt-3 font-medium">{_zcBadge.label}</div>
  </div>
);

const Pricing = () => {
  const { hero, subscriptions, anonymousKey, freeFeatures, faq, cta, comparisonSection, comparisonCards, illustratedSelfHosted, relatedPages } = pricingContent;

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/pricing']} />
      <PricingHero
        title={hero.title}
        description={hero.description}
        tagline={hero.tagline}
      />

      <ContentSection>
        <SubscriptionPlans subscriptions={subscriptions} />
      </ContentSection>

      <FreeFeaturesSection
        title={freeFeatures.title}
        description={freeFeatures.description}
        features={freeFeatures.features}
      />

      {/* Comparison: Commercial VPNs vs Tunnels */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={comparisonSection.title}
          subtitle={comparisonSection.subtitle}
        />
        <ComparisonCards
          dividerLabel={comparisonCards.dividerLabel}
          leftCard={comparisonCards.leftCard}
          rightCard={comparisonCards.rightCard}
        />
      </ContentSection>

      <ContentSection>
        <AnonymousLicenseCard
          title={anonymousKey.title}
          description={anonymousKey.description}
          price={anonymousKey.price}
          period={anonymousKey.period}
          url={anonymousKey.url}
        />
      </ContentSection>

      {/* Self-Hosted */}
      <IllustratedSection
        subtitle={illustratedSelfHosted.subtitle}
        title={illustratedSelfHosted.title}
        description={illustratedSelfHosted.description}
        features={illustratedSelfHosted.features}
        illustration={ZeroCostBadge}
        illustrationPosition="left"
        illustrationSize="small"
        dark={false}
      />

      <PricingFAQSection
        title={faq.title}
        questions={faq.questions}
      />

      <RelatedPages pages={relatedPages} />

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
