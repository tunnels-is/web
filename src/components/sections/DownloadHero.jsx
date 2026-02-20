import { motion } from 'framer-motion';

const DownloadHero = ({ title, subtitle, version, loading }) => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-dark-text-secondary mb-1.5">
            Latest version: {loading || !version
              ? <span className="text-dark-text-secondary/50">loading...</span>
              : <span className="text-dark-accent-primary font-semibold">v{version}</span>
            }
          </p>
          <p className="text-sm text-dark-text-primary/70 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
};

export default DownloadHero;
