import { downloadContent } from '../content/siteContent';
import useLatestRelease from '../hooks/useLatestRelease';
import DownloadHero from '../components/sections/DownloadHero';
import AutoDownloadButton from '../components/sections/AutoDownloadButton';
import PlatformDownloads from '../components/sections/PlatformDownloads';
import AllReleasesSection from '../components/sections/AllReleasesSection';
import QuickStartSection from '../components/sections/QuickStartSection';
import WhatsIncludedSection from '../components/sections/WhatsIncludedSection';
import DownloadHelpSection from '../components/sections/DownloadHelpSection';
import IllustratedSection from '../components/IllustratedSection';
import {
  DownloadIllustration,
} from '../components/illustrations';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const Download = () => {
  const { hero, platforms, allReleasesSection, quickStart, whatsIncluded, helpSection, illustratedPlatforms } = downloadContent;
  const { version, loading } = useLatestRelease();

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/download']} />
      <DownloadHero
        title={hero.title}
        subtitle={hero.subtitle}
        version={version}
        loading={loading}
      />

      <AutoDownloadButton version={version} loading={loading} />

      <PlatformDownloads
        platforms={platforms}
        version={version}
        loading={loading}
      />

      {/* Illustrated: Cross-Platform */}
      <IllustratedSection
        subtitle={illustratedPlatforms.subtitle}
        title={illustratedPlatforms.title}
        description={illustratedPlatforms.description}
        features={illustratedPlatforms.features}
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
