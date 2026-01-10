import { downloadContent } from '../content/siteContent';
import DownloadHero from '../components/sections/DownloadHero';
import PlatformDownloads from '../components/sections/PlatformDownloads';
import AllReleasesSection from '../components/sections/AllReleasesSection';
import QuickStartSection from '../components/sections/QuickStartSection';
import WhatsIncludedSection from '../components/sections/WhatsIncludedSection';
import DownloadHelpSection from '../components/sections/DownloadHelpSection';
import IllustratedSection from '../components/IllustratedSection';
import {
  DownloadIllustration,
} from '../components/illustrations';

const Download = () => {
  const { version, hero, platforms, allReleasesSection, quickStart, whatsIncluded, helpSection } = downloadContent;

  return (
    <div className="min-h-screen">
      <DownloadHero
        title={hero.title}
        subtitle={hero.subtitle}
        version={version}
      />

      <PlatformDownloads
        platforms={platforms}
        version={version}
      />

      {/* Illustrated: Cross-Platform */}
      <IllustratedSection
        subtitle="Universal Support"
        title="Run Anywhere"
        description="Native applications for every major platform. Whether you're on desktop, server, or mobile - tunnels runs natively without emulation or compatibility layers."
        features={[
          "Native Windows, macOS, Linux apps",
          "iOS and Android mobile clients",
          "Docker containers available",
          "ARM and x86 architecture support"
        ]}
        illustration={DownloadIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      <AllReleasesSection
        description={allReleasesSection.description}
        buttonText={allReleasesSection.buttonText}
        url={allReleasesSection.url}
      />

      <QuickStartSection
        title={quickStart.title}
        steps={quickStart.steps}
      />

      <WhatsIncludedSection
        title={whatsIncluded.title}
        features={whatsIncluded.features}
      />

      <DownloadHelpSection
        title={helpSection.title}
        description={helpSection.description}
        buttons={helpSection.buttons}
      />
    </div>
  );
};

export default Download;
