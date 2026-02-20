import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import GradientCallout from '../components/sections/GradientCallout';
import { freeOpenSourceContent } from '../content/siteContent';
import { SecurityIllustration } from '../components/illustrations';
import RelatedPages from '../components/sections/RelatedPages';

const FreeAndOpenSource = () => {
  const {
    hero,
    statsBanner,
    whyOpenSource,
    communityCallout,
    illustratedSecurity,
    community,
    socialLinks,
    cta,
    relatedPages,
  } = freeOpenSourceContent;

  return (
    <div className="min-h-screen">
      <HeroSimple
        title={hero.title}
        description={hero.description}
        buttons={hero.buttons}
      />

      <ContentSection>
        <StatsBanner
          variant="default"
          stats={statsBanner}
        />
      </ContentSection>

      <ContentSection background="dark-surface">
        <SectionHeader
          title={whyOpenSource.title}
          titleSize="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {whyOpenSource.reasons.map((item, index) => (
            <div key={index} className="p-5 transition-colors">
              <h3 className="text-base font-semibold text-dark-accent-primary mb-3">{item.title}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">{item.content1}</p>
              <p className="text-dark-text-secondary text-sm leading-relaxed">{item.content2}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <GradientCallout
          accent={communityCallout.accent}
          title={communityCallout.title}
          description={communityCallout.description}
          features={communityCallout.features}
          button={communityCallout.button}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
      </ContentSection>

      <IllustratedSection
        subtitle={illustratedSecurity.subtitle}
        title={illustratedSecurity.title}
        description={illustratedSecurity.description}
        features={illustratedSecurity.features}
        illustration={SecurityIllustration}
        illustrationPosition={illustratedSecurity.illustrationPosition}
        illustrationSize={illustratedSecurity.illustrationSize}
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title={community.title}
          subtitle={community.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 text-center transition-colors group"
            >
              <div className="w-10 h-10 mb-3 mx-auto flex items-center justify-center text-dark-text-muted group-hover:text-dark-accent-primary transition-colors">
                <div className="transform scale-[2.5] flex items-center justify-center">{social.icon}</div>
              </div>
              <h3 className="text-base font-semibold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">{social.name}</h3>
              <p className="text-dark-text-secondary text-xs">{social.desc}</p>
            </a>
          ))}
        </div>
      </ContentSection>

      <RelatedPages pages={relatedPages} />

      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
      />
    </div>
  );
};

export default FreeAndOpenSource;
