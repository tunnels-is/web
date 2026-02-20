import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import TerminalPreview from '../components/sections/TerminalPreview';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { cloudBaremetalContent } from '../content/siteContent';
import { MultiServerIllustration } from '../components/illustrations';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const CloudBaremetal = () => {
  const {
    hero, benefitsSection, benefits, architecture, useCases, performance,
    illustratedArchitecture, architectureBentoExtras, deployHeader,
    terminalPreview, deploymentsHeader, infrastructureHeader,
    deploymentTable, zeroTrustCallout, ctaSection, relatedPages
  } = cloudBaremetalContent;

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/cloud']} />
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Performance Stats Banner */}
      <ContentSection background="dark-surface">
        <StatsBanner
          stats={performance.stats}
          variant="default"
        />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
        />
        <FeatureGrid
          features={benefits}
          columns={3}
        />
      </ContentSection>

      {/* Illustrated: Multi-Server Architecture */}
      <IllustratedSection
        subtitle={illustratedArchitecture.subtitle}
        title={illustratedArchitecture.title}
        description={illustratedArchitecture.description}
        features={illustratedArchitecture.features}
        illustration={MultiServerIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      <MidPageCTA />

      {/* Architecture BentoGrid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={architecture.title}
          subtitle={architecture.description}
          titleSize="medium"
        />
        <BentoGrid
          layout="featured"
          items={[
            {
              title: architecture.controlServer.title,
              description: architecture.controlServer.description,
              features: architectureBentoExtras.item0Features,
              highlight: architectureBentoExtras.item0Highlight,
              icon: (
                <svg className="w-full h-full text-dark-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )
            },
            {
              title: architecture.vpnServers.title,
              description: architecture.vpnServers.description,
              icon: (
                <svg className="w-full h-full text-dark-accent-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              )
            },
            {
              title: architectureBentoExtras.item2.title,
              description: architectureBentoExtras.item2.description,
              icon: (
                <svg className="w-full h-full text-dark-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            }
          ]}
        />
      </ContentSection>

      {/* Global Reach: TerminalPreview */}
      <ContentSection>
        <SectionHeader
          title={deployHeader.title}
          subtitle={deployHeader.subtitle}
          titleSize="medium"
        />
        <TerminalPreview
          title={terminalPreview.title}
          description={terminalPreview.description}
          position="right"
          features={terminalPreview.features}
          lines={terminalPreview.lines}
        />
      </ContentSection>

      {/* Use Cases Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={deploymentsHeader.title}
          subtitle={deploymentsHeader.subtitle}
        />
        <StaggeredGrid
          items={useCases}
          columns={2}
        />
      </ContentSection>

      {/* Deployment Options: FeatureTable */}
      <ContentSection>
        <SectionHeader
          title={infrastructureHeader.title}
          subtitle={infrastructureHeader.subtitle}
          titleSize="medium"
        />
        <FeatureTable
          headers={deploymentTable.headers}
          rows={deploymentTable.rows}
          caption={deploymentTable.caption}
        />
      </ContentSection>

      {/* Security Callout */}
      <ContentSection background="dark-surface">
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="teal"
            title={zeroTrustCallout.title}
            description={zeroTrustCallout.description}
            button={{ text: "Learn about Security", href: "/security", primary: true }}
          />
        </div>
      </ContentSection>

      <RelatedPages pages={relatedPages} />

      {/* CTA Section */}
      <CTASection
        title={ctaSection.title}
        description={ctaSection.description}
        buttons={ctaSection.buttons}
      />
    </div>
  );
};

export default CloudBaremetal;
