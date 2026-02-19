import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { freeOpenSourceContent } from '../content/siteContent';
import {
  OpenSourceIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const FreeAndOpenSource = () => {
  const { socialLinks } = freeOpenSourceContent;

  return (
    <div className="min-h-screen">
      <HeroSimple
        title="Tunnels is Free and Open Source"
        description="All of our features are free and available in the open source version. No paywalls, no hidden fees."
        buttons={[
          { text: "View on GitHub", href: "https://github.com/tunnels-is", primary: true }
        ]}
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Open Source?"
          titleSize="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            { title: 'Transparency', text1: 'Open source means complete transparency. Anyone can review our code, audit our security practices, and verify that we\'re doing exactly what we say we\'re doing.', text2: 'There are no hidden backdoors, no secret data collection, and no mysterious code that you can\'t inspect.' },
            { title: 'Community', text1: 'Being open source allows developers and security experts from around the world to contribute, improve, and help shape the future of Tunnels.', text2: 'This collaborative approach leads to better security, more features, and faster bug fixes than any closed-source project could achieve alone.' },
            { title: 'Freedom', text1: 'You\'re free to use Tunnels however you want - personally, commercially, or modify it to fit your specific needs. No licensing restrictions.', text2: 'Deploy it on your own infrastructure, integrate it with your systems, and maintain complete control over your networking solution.' },
            { title: 'Trust', text1: 'In the world of VPNs and networking, trust is everything. Open source allows you to verify our claims and build that trust through transparency.', text2: 'Security experts can audit the code, and the community can vouch for the integrity of the project.' },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-colors">
              <h3 className="text-lg font-semibold text-dark-accent-primary mb-3">{item.title}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">{item.text1}</p>
              <p className="text-dark-text-secondary text-sm leading-relaxed">{item.text2}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <IllustratedSection
        subtitle="Built Together"
        title="Community-Driven Development"
        description="Tunnels is built by a global community of developers, security researchers, and networking experts. Every contribution makes the project stronger."
        features={[
          "Open pull requests welcome",
          "Active Discord community",
          "Regular security audits",
          "Transparent roadmap"
        ]}
        illustration={OpenSourceIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      <IllustratedSection
        subtitle="Verifiable Security"
        title="Audit Every Line of Code"
        description="Don't trust, verify. Our entire codebase is available for inspection. Security researchers regularly audit our code and report findings publicly."
        features={[
          "Full source on GitHub",
          "Public security advisories",
          "Bug bounty program",
          "Reproducible builds"
        ]}
        illustration={SecurityIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title="Join Our Community"
          subtitle="Join our community to contribute, follow our development, or just stay connected with other Tunnels users."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl text-center bg-dark-card hover:bg-dark-elevated transition-colors group"
            >
              <div className="w-12 h-12 mb-3 mx-auto flex items-center justify-center text-dark-text-muted group-hover:text-dark-accent-primary transition-colors">
                <div className="transform scale-[2.5] flex items-center justify-center">{social.icon}</div>
              </div>
              <h3 className="text-base font-semibold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">{social.name}</h3>
              <p className="text-dark-text-muted text-xs">{social.desc}</p>
            </a>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Ready to get started?"
        description="Download Tunnels today and experience open source networking at its finest."
        buttons={[
          { text: "Download Now", href: "/download", primary: true },
          { text: "View Source Code", href: "https://github.com/tunnels-is", primary: false }
        ]}
      />
    </div>
  );
};

export default FreeAndOpenSource;
