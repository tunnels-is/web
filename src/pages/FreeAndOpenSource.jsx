import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import GradientCallout from '../components/sections/GradientCallout';
import { freeOpenSourceContent } from '../content/siteContent';
import { SecurityIllustration } from '../components/illustrations';

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

      <ContentSection>
        <StatsBanner
          variant="card"
          stats={[
            { value: "100%", label: "Free Forever", description: "Every feature, no paywalls" },
            { value: "MIT", label: "License", description: "Use it however you want" },
            { value: "10K+", label: "GitHub Stars", description: "Trusted by the community" },
            { value: "$0", label: "Hidden Fees", description: "What you see is what you get" },
          ]}
        />
      </ContentSection>

      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Open Source?"
          titleSize="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {[
            { title: 'Transparency', text1: 'Open source means complete transparency. Anyone can review our code, audit our security practices, and verify that we\'re doing exactly what we say we\'re doing.', text2: 'There are no hidden backdoors, no secret data collection, and no mysterious code that you can\'t inspect.' },
            { title: 'Community', text1: 'Being open source allows developers and security experts from around the world to contribute, improve, and help shape the future of Tunnels.', text2: 'This collaborative approach leads to better security, more features, and faster bug fixes than any closed-source project could achieve alone.' },
            { title: 'Freedom', text1: 'You\'re free to use Tunnels however you want - personally, commercially, or modify it to fit your specific needs. No licensing restrictions.', text2: 'Deploy it on your own infrastructure, integrate it with your systems, and maintain complete control over your networking solution.' },
            { title: 'Trust', text1: 'In the world of VPNs and networking, trust is everything. Open source allows you to verify our claims and build that trust through transparency.', text2: 'Security experts can audit the code, and the community can vouch for the integrity of the project.' },
          ].map((item, index) => (
            <div key={index} className="p-5 transition-colors">
              <h3 className="text-base font-semibold text-dark-accent-primary mb-3">{item.title}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">{item.text1}</p>
              <p className="text-dark-text-secondary text-sm leading-relaxed">{item.text2}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <GradientCallout
          accent="green"
          title="Community-Driven Development"
          description="Tunnels is built by a global community of developers, security researchers, and networking experts. Every pull request, issue report, and code review makes the project stronger. Whether you want to contribute code, improve documentation, or share feedback — you are welcome here."
          features={[
            "Open pull requests welcome",
            "Active Discord community",
            "Regular security audits",
            "Transparent roadmap",
          ]}
          button={{ text: "View on GitHub", href: "https://github.com/tunnels-is", primary: true }}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
      </ContentSection>

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
