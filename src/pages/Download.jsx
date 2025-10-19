import { motion } from 'framer-motion';
import { downloadContent } from '../content/siteContent';

const Download = () => {
  const { version, hero, platforms, allReleasesSection, quickStart, whatsIncluded, helpSection } = downloadContent;

  const platformIcons = {
    "Windows": (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    "macOS": (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
    ),
    "Linux": (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
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
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          <p className="text-xl text-dark-text-secondary mb-4">
            Latest version: <span className="text-dark-accent-primary font-semibold">v{version}</span>
          </p>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Platform Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platformsWithIcons.map((platform, index) => (
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
            {allReleasesSection.description}
          </p>
          <motion.a
            href={allReleasesSection.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
          >
            {allReleasesSection.buttonText}
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
            <span className="text-gradient">{quickStart.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStart.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-dark-accent-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'tertiary'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-dark-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
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
            {whatsIncluded.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatsIncluded.features.map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
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
            {helpSection.title}
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {helpSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {helpSection.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target={button.href.startsWith('http') ? "_blank" : undefined}
                rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                  button.primary
                    ? 'bg-dark-accent-primary text-white hover:bg-opacity-90'
                    : 'glass-effect hover:bg-dark-elevated'
                }`}
              >
                {button.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Download;
