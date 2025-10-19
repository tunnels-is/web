import { motion } from 'framer-motion';

const Pricing = () => {
  const subscriptions = [
    {
      title: "1 Month",
      price: "$8",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/6f75871d-ea8d-46e3-927b-f62dc2453ad3",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Community Support",
        "All Basic Features",
      ],
      popular: false,
    },
    {
      title: "6 Months",
      price: "$6",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/214e7bee-3e9c-4d14-8e3d-0a96a1b48361",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Priority Support",
        "All Basic Features",
        "25% Savings",
      ],
      popular: true,
    },
    {
      title: "12 Months",
      price: "$4",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/71bb1dd8-8fac-4d56-bfbf-63cfd6081c5a",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Priority Support",
        "All Basic Features",
        "50% Savings",
      ],
      popular: false,
    },
  ];

  const anonymousKey = {
    title: "Anonymous License",
    price: "$8",
    period: "/month",
    url: "https://tunnels.lemonsqueezy.com/buy/e8cbc47c-c19b-4ef7-9f8a-c8e2b94597dd",
    description: "Top up your account anonymously with license keys",
  };

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
            <span className="text-gradient">Simple Pricing</span>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-4">
            Choose the plan that works best for you. All plans include access to our public VPN network.
          </p>
          <p className="text-lg text-dark-accent-primary font-semibold">
            24-hour free trial • No credit card required
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
            <span className="text-gradient">Always Free</span>
          </h2>
          <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            These features are available to everyone, no subscription required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ Private Servers
              </h3>
              <p className="text-dark-text-secondary">
                Create unlimited private VPN servers at no cost. Perfect for personal use or small teams.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ DNS Protection
              </h3>
              <p className="text-dark-text-secondary">
                Full DNS threat protection with daily blocklist updates, available without an account.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ Custom DNS Records
              </h3>
              <p className="text-dark-text-secondary">
                Register custom A, TXT, and CNAME records directly in your configuration.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
                ✓ No Limitations
              </h3>
              <p className="text-dark-text-secondary">
                No device limits, no user limits on private servers. Use as many as you need.
              </p>
            </div>
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What's the difference between plans?</h3>
              <p className="text-dark-text-secondary">
                All plans provide the same features and access to the public VPN network. Longer subscriptions offer better value with discounted monthly rates.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Can I create an account anonymously?</h3>
              <p className="text-dark-text-secondary">
                Yes! You can create accounts using usernames or UUIDs, and top up using anonymous license keys purchased separately.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Do you offer refunds?</h3>
              <p className="text-dark-text-secondary">
                Yes, we offer a money-back guarantee on all subscriptions. Contact support if you're not satisfied.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-dark-text-secondary">
                We accept all major credit cards through our secure payment processor. Anonymous license keys can be purchased separately.
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
            Ready to get started?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Try Tunnels free for 24 hours. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Download Now
            </motion.a>
            <motion.a
              href="mailto:support@tunnels.is"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
            >
              Contact Sales
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
