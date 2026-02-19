import { motion } from 'framer-motion';

const DownloadHero = ({ title, subtitle, version }) => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            {title}
          </h1>
          <p className="text-base text-dark-text-secondary mb-2">
            Latest version: <span className="text-dark-accent-primary font-semibold">v{version}</span>
          </p>
          <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadHero;
