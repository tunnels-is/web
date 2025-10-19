import { motion } from 'framer-motion';

const Download = () => {
  const version = "2.0.7";

  const platforms = [
    {
      name: "Windows",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      downloadUrl: `https://github.com/tunnels-is/tunnels/releases/download/v${version}/tunnels_${version}_Windows_amd64.zip`,
      fileType: ".zip",
    },
    {
      name: "macOS",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
      ),
      downloadUrl: `https://github.com/tunnels-is/tunnels/releases/download/v${version}/tunnels_${version}_Darwin_arm64.tar.gz`,
      fileType: ".tar.gz",
    },
    {
      name: "Linux",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.974-.284 2.65.09.49.231.945.439 1.319.685 1.273 2.478 2.833 2.478 2.833s.462.412 1.262.412c.8 0 1.261-.412 1.261-.412s1.793-1.56 2.478-2.833c.208-.374.35-.83.439-1.319.127-.676-.006-1.81-.284-2.65-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.215 5.09c1.408 0 2.55 1.142 2.55 2.551 0 1.408-1.142 2.55-2.55 2.55s-2.55-1.142-2.55-2.55c0-1.409 1.142-2.551 2.55-2.551z" />
        </svg>
      ),
      downloadUrl: `https://github.com/tunnels-is/tunnels/releases/download/v${version}/tunnels_${version}_Linux_amd64.tar.gz`,
      fileType: ".tar.gz",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Download Tunnels</span>
          </h1>
          <p className="text-xl text-dark-text-secondary mb-4">
            Latest version: <span className="text-dark-accent-primary font-semibold">v{version}</span>
          </p>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            No installation required. Just download, extract, and run. Available for Windows, macOS, and Linux.
          </p>
        </motion.div>
      </section>

      {/* Platform Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-dark-accent-primary mb-6 flex justify-center">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{platform.name}</h3>
              <p className="text-dark-text-secondary text-center mb-6">
                Version {version} {platform.fileType}
              </p>
              <motion.a
                href={platform.downloadUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-6 py-3 bg-dark-accent-primary text-white rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all"
              >
                Download for {platform.name}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Releases Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-dark-text-secondary mb-4">
            Looking for a different version or architecture?
          </p>
          <motion.a
            href="https://github.com/tunnels-is/tunnels/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
          >
            View All Releases on GitHub
          </motion.a>
        </motion.div>
      </section>

      {/* Installation Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-gradient">Quick Start</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-accent-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download</h3>
              <p className="text-dark-text-secondary">
                Choose your platform and download the latest release
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extract</h3>
              <p className="text-dark-text-secondary">
                Extract the archive to your preferred location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-accent-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Run</h3>
              <p className="text-dark-text-secondary">
                Launch Tunnels - no installation required!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ No Installation
              </h3>
              <p className="text-dark-text-secondary">
                Portable executable with no system changes or background services
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ Free DNS Protection
              </h3>
              <p className="text-dark-text-secondary">
                Built-in DNS blocking available without an account
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ Private Servers
              </h3>
              <p className="text-dark-text-secondary">
                Create unlimited private servers at no cost
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ 24h Free Trial
              </h3>
              <p className="text-dark-text-secondary">
                Test public VPN features with no credit card required
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Check out our documentation for detailed setup guides and troubleshooting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:support@tunnels.is"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Support
            </motion.a>
            <motion.a
              href="https://github.com/tunnels-is"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
            >
              View on GitHub
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Download;
