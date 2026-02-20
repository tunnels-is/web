import { useMemo } from 'react';
import { motion } from 'framer-motion';

function detectPlatform() {
  const ua = navigator.userAgent;
  if (/Windows/.test(ua)) return { os: 'Windows', label: 'Windows', file: 'Windows_amd64.zip' };
  if (/Mac/.test(ua)) return { os: 'macOS', label: 'macOS', file: 'Darwin_arm64.tar.gz' };
  if (/Linux/.test(ua)) return { os: 'Linux', label: 'Linux', file: 'Linux_amd64.tar.gz' };
  return null;
}

const AutoDownloadButton = ({ version, loading }) => {
  const platform = useMemo(() => detectPlatform(), []);

  if (!platform || loading || !version) return null;

  const url = `https://github.com/tunnels-is/tunnels/releases/download/v${version}/tunnels_${version}_${platform.file}`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <a
          href={url}
          className="btn-primary px-8 py-3 text-base font-bold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
          Download Now for {platform.label}
        </a>
        <p className="text-xs text-dark-text-secondary mt-2">
          v{version} &middot; {platform.file}
        </p>
      </motion.div>
    </section>
  );
};

export default AutoDownloadButton;
