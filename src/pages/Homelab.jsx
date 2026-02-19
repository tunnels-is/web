import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import StatsBanner from '../components/sections/StatsBanner';
import SplitContent from '../components/sections/SplitContent';
import { homelabContent } from '../content/siteContent';
import {
  SelfHostedIllustration,
  DNSFlowIllustration,
} from '../components/illustrations';
import { LightbulbIcon, ShieldCheckIcon } from '../components/ui/Icons';

const Homelab = () => {
  const {
    hero,
    benefitsSection,
    benefits,
    setupSection,
    setupSteps,
    useCasesSection,
    useCases,
    dnsSection,
    dnsFeatures,
    technicalSection,
    technicalHighlights,
    hardwareSection,
    hardwareOptions,
    ctaSection,
    ctaCards
  } = homelabContent;

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <HeroSimple
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        quickStats={hero.quickStats}
      />

      {/* Stats banner - quick facts at a glance */}
      <ContentSection background="dark-surface" padding="small">
        <StatsBanner
          variant="default"
          stats={[
            { value: "~15 min", label: "Setup Time" },
            { value: "$0", label: "Cost" },
            { value: "1", label: "Server Needed" },
            { value: "3+", label: "Platforms Supported" },
          ]}
        />
      </ContentSection>

      {/* Benefits - BentoGrid (asymmetric, replaces first FeatureGrid) */}
      <ContentSection>
        <SectionHeader
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
        />
        <BentoGrid
          layout="featured"
          items={[
            {
              ...benefits[0],
              features: [
                "Zero cloud dependencies",
                "No recurring subscription costs",
                "Complete data ownership",
                "Works offline when internet is down",
              ],
              highlight: "True digital sovereignty",
            },
            benefits[1],
            benefits[2],
            benefits[3],
            benefits[4],
            benefits[5],
          ]}
        />
      </ContentSection>

      {/* Illustrated: Self-Hosted Control */}
      <IllustratedSection
        subtitle="Complete Ownership"
        title="Your Infrastructure, Your Rules"
        description="Run everything on your own hardware. No cloud dependencies, no subscription fees, no data leaving your network. True digital sovereignty for your homelab."
        features={[
          "Zero cloud dependencies",
          "No recurring subscription costs",
          "Complete data ownership",
          "Works offline when internet is down",
        ]}
        illustration={SelfHostedIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Setup Steps - HorizontalSteps replaces FeatureTimeline */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <HorizontalSteps
          variant="default"
          steps={setupSteps}
        />
      </ContentSection>

      {/* Terminal Preview - shows actual install commands */}
      <ContentSection>
        <TerminalPreview
          title="Up and Running in Minutes"
          description="A single command installs everything. No complex configuration, no networking expertise required. Just run the installer and your homelab is connected."
          position="right"
          features={[
            "One-line installation script",
            "Auto-detects your environment",
            "Pre-configured for common setups",
            "Detailed logs for troubleshooting",
          ]}
          lines={[
            { type: 'comment', text: 'Download and run the installer' },
            { type: 'command', text: 'wget https://tunnels.is/install.sh && sudo bash install.sh' },
            { type: 'output', text: 'Detecting system architecture...' },
            { type: 'output', text: 'Found: linux/amd64' },
            { type: 'success', text: 'Tunnels server installed successfully' },
            { type: 'empty', text: '' },
            { type: 'comment', text: 'Start and enable the service' },
            { type: 'command', text: 'sudo systemctl enable --now tunnels' },
            { type: 'success', text: 'Service started: tunnels.service' },
            { type: 'empty', text: '' },
            { type: 'comment', text: 'Check server status' },
            { type: 'command', text: 'sudo systemctl status tunnels' },
            { type: 'info', text: '● tunnels.service - Tunnels VPN Server' },
            { type: 'success', text: '   Active: active (running)' },
          ]}
        />
      </ContentSection>

      {/* Use Cases - FeatureGrid (1 of max 2 kept) */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <FeatureGrid
          features={useCases}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* DNS Features - IllustratedSection (2 of max 2 kept) */}
      <IllustratedSection
        subtitle="Local Resolution"
        title="Private DNS for Your Network"
        description="Access your services by name instead of IP addresses. Tunnels provides automatic DNS resolution for all your connected devices and services."
        features={[
          "home.lan resolves to your server",
          "Split-horizon DNS support",
          "Automatic service discovery",
          "Works with Pi-hole and AdGuard",
        ]}
        illustration={DNSFlowIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* DNS details + GradientCallout replacing the old info box */}
      <ContentSection>
        <SectionHeader
          title={dnsSection.title}
          subtitle={dnsSection.subtitle}
        />
        <FeatureGrid
          features={dnsFeatures}
          columns={2}
          cardStyle="glass"
        />
        <div className="mt-8">
          <GradientCallout
            variant="banner"
            accent="teal"
            icon={<LightbulbIcon />}
            title={dnsSection.infoBox.title}
            description={dnsSection.infoBox.description}
          />
        </div>
      </ContentSection>

      {/* Technical Highlights - BentoGrid default layout (replaces second FeatureGrid) */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={technicalSection.title}
          subtitle={technicalSection.subtitle}
        />
        <BentoGrid
          layout="default"
          items={technicalHighlights}
        />
      </ContentSection>

      {/* Hardware - SplitContent with stacked cards */}
      <ContentSection>
        <SplitContent
          title={hardwareSection.title}
          description={hardwareSection.subtitle}
          position="right"
          accent="green"
          features={[
            "Runs on ARM and x86 architectures",
            "As little as 512 MB RAM required",
            "Minimal CPU overhead",
            "Works inside Docker and VMs",
          ]}
          cards={[
            {
              icon: hardwareOptions[0].icon,
              title: hardwareOptions[0].title,
              description: hardwareOptions[0].description,
            },
            {
              icon: hardwareOptions[1].icon,
              title: hardwareOptions[1].title,
              description: hardwareOptions[1].description,
            },
            {
              icon: hardwareOptions[2].icon,
              title: hardwareOptions[2].title,
              description: hardwareOptions[2].description,
            },
          ]}
        />
        <div className="mt-8">
          <GradientCallout
            variant="banner"
            accent="green"
            icon={<ShieldCheckIcon />}
            title="Pro Tip"
            description={hardwareSection.proTip}
          />
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title={ctaSection.title}
        description={ctaSection.description}
        layout={ctaSection.layout}
        cards={ctaCards}
      />

    </div>
  );
};

export default Homelab;
