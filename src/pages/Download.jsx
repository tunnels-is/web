import { downloadContent } from '../content/siteContent';
import DownloadHero from '../components/sections/DownloadHero';
import PlatformDownloads from '../components/sections/PlatformDownloads';
import AllReleasesSection from '../components/sections/AllReleasesSection';
import QuickStartSection from '../components/sections/QuickStartSection';
import WhatsIncludedSection from '../components/sections/WhatsIncludedSection';
import DownloadHelpSection from '../components/sections/DownloadHelpSection';

const Download = () => {
  const { version, hero, platforms, allReleasesSection, quickStart, whatsIncluded, helpSection } = downloadContent;

  return (
    <div className="min-h-screen pt-20 pb-12">
      <DownloadHero
        title={hero.title}
        subtitle={hero.subtitle}
        version={version}
      />

      <PlatformDownloads
        platforms={platforms}
        version={version}
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
