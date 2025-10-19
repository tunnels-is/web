import { motion } from 'framer-motion';
import { pricingContent } from '../content/siteContent';

const Pricing = () => {
  const { hero, subscriptions, anonymousKey, freeFeatures, faq, cta } = pricingContent;

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
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-4">
            {hero.description}
          </p>
          <p className="text-lg text-dark-accent-primary font-semibold">
            {hero.tagline}
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptions.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-effect p-8 rounded-xl relative ${
                plan.popular ? 'ring-2 ring-dark-accent-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dark-accent-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-dark-text-secondary ml-2">{plan.period}</span>
                </div>
                {plan.price !== "$8" && (
                  <p className="text-sm text-dark-text-muted line-through">
                    {plan.title === "6 Months" ? "$8/month" : "$8/month"}
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-dark-accent-primary mr-3 mt-1">✓</span>
                    <span className="text-dark-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all ${
                  plan.popular
                    ? 'bg-dark-accent-primary text-white hover:bg-opacity-90'
                    : 'glass-effect hover:bg-dark-elevated'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Anonymous License */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 rounded-xl max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{anonymousKey.title}</h3>
            <p className="text-dark-text-secondary">{anonymousKey.description}</p>
          </div>
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl font-bold text-gradient">{anonymousKey.price}</span>
            <span className="text-dark-text-secondary ml-2">{anonymousKey.period}</span>
          </div>
          <motion.a
            href={anonymousKey.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full max-w-sm mx-auto px-6 py-3 glass-effect rounded-lg font-semibold text-center hover:bg-dark-elevated transition-all"
          >
            Purchase License Key
          </motion.a>
        </motion.div>
      </section>

      {/* Free Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">{freeFeatures.title}</span>
          </h2>
          <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            {freeFeatures.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeFeatures.features.map((feature, index) => (
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

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {faq.title}
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faq.questions.map((item, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-dark-text-secondary">
                  {item.answer}
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
            {cta.title}
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
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

export default Pricing;
