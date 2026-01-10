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
      {/* Hero Section */}
      <HeroSimple
        title="Tunnels is Free and Open Source"
        description="All of our features are free and available in the open source version. No paywalls, no hidden fees."
        buttons={[
          { text: "View on GitHub", href: "https://github.com/tunnels-is", primary: true }
        ]}
        showNetworkLines={true}
      />

      {/* Why Open Source Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Open Source?"
          titleSize="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-dark-elevated p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Transparency</h3>
            <p className="text-dark-text-secondary mb-4">
              Open source means complete transparency. Anyone can review our code, audit our security practices,
              and verify that we're doing exactly what we say we're doing.
            </p>
            <p className="text-dark-text-secondary">
              There are no hidden backdoors, no secret data collection, and no mysterious code that you can't inspect.
            </p>
          </div>
          <div className="bg-dark-elevated p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Community</h3>
            <p className="text-dark-text-secondary mb-4">
              Being open source allows developers and security experts from around the world to contribute,
              improve, and help shape the future of Tunnels.
            </p>
            <p className="text-dark-text-secondary">
              This collaborative approach leads to better security, more features, and faster bug fixes than
              any closed-source project could achieve alone.
            </p>
          </div>
          <div className="bg-dark-elevated p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Freedom</h3>
            <p className="text-dark-text-secondary mb-4">
              You're free to use Tunnels however you want - personally, commercially, or modify it to fit
              your specific needs. No licensing restrictions.
            </p>
            <p className="text-dark-text-secondary">
              Deploy it on your own infrastructure, integrate it with your systems, and maintain complete
              control over your networking solution.
            </p>
          </div>
          <div className="bg-dark-elevated p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Trust</h3>
            <p className="text-dark-text-secondary mb-4">
              In the world of VPNs and networking, trust is everything. Open source allows you to verify
              our claims and build that trust through transparency.
            </p>
            <p className="text-dark-text-secondary">
              Security experts can audit the code, and the community can vouch for the integrity of the project.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Illustrated: Community Driven */}
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

      {/* Illustrated: Auditable Security */}
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

      {/* Join Community Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Join Our Community"
          subtitle="Join our community to contribute, follow our development, or just stay connected with other Tunnels users."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl text-center bg-dark-elevated hover:bg-dark-bg transition-colors duration-150"
            >
              <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center text-white">
                <div className="transform scale-[3] flex items-center justify-center">{social.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-dark-accent-primary mb-2">{social.name}</h3>
              <p className="text-dark-text-secondary text-sm">{social.desc}</p>
            </a>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
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
