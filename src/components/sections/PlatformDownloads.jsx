import { motion } from 'framer-motion';

const PlatformDownloads = ({ platforms, version }) => {
  const platformIcons = {
    "Windows": (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    "macOS": (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
    ),
    "Linux": (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.974-.284 2.65.09.49.231.945.439 1.319.685 1.273 2.478 2.833 2.478 2.833s.462.412 1.262.412c.8 0 1.261-.412 1.261-.412s1.793-1.56 2.478-2.833c.208-.374.35-.83.439-1.319.127-.676-.006-1.81-.284-2.65-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.215 5.09c1.408 0 2.55 1.142 2.55 2.551 0 1.408-1.142 2.55-2.55 2.55s-2.55-1.142-2.55-2.55c0-1.409 1.142-2.551 2.55-2.551z" />
      </svg>
    )
  };

  const platformsWithIcons = platforms.map(platform => ({
    ...platform,
    icon: platformIcons[platform.name],
    downloadUrl: `https://github.com/tunnels-is/tunnels/releases/download/v${version}/tunnels_${version}_${platform.name === "Windows" ? "Windows_amd64.zip" : platform.name === "macOS" ? "Darwin_arm64.tar.gz" : "Linux_amd64.tar.gz"}`
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {platformsWithIcons.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 transition-all duration-200 group"
          >
            <div className="text-dark-accent-primary mb-4 flex justify-center group-hover:text-dark-accent-secondary transition-colors">
              {platform.icon}
            </div>
            <h3 className="text-lg font-bold text-center mb-1">{platform.name}</h3>
            <p className="text-dark-text-secondary text-xs text-center mb-4">
              Version {version} {platform.fileType}
            </p>
            <a
              href={platform.downloadUrl}
              className="btn-primary w-full text-center py-2 text-sm"
            >
              Download for {platform.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformDownloads;
