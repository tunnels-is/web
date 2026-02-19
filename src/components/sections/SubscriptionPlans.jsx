import { motion } from 'framer-motion';

const SubscriptionPlans = ({ subscriptions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
      {subscriptions.map((plan, index) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.3 }}
          className={`relative p-7 rounded-xl transition-all ${
            plan.popular
              ? 'bg-dark-card shadow-lg shadow-dark-accent-primary/10 ring-1 ring-dark-accent-primary/30'
              : 'bg-dark-card hover:bg-dark-elevated'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-dark-accent-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                MOST POPULAR
              </span>
            </div>
          )}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
            <div className="flex items-baseline justify-center mb-1">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-dark-text-muted ml-1.5 text-sm">{plan.period}</span>
            </div>
            {plan.price !== "$8" && (
              <p className="text-xs text-dark-text-muted line-through">$8/month</p>
            )}
          </div>
          <ul className="space-y-3 mb-7">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm">
                <svg className="w-4 h-4 text-dark-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={plan.url}
            target="_blank"
            rel="noopener noreferrer"
            className={plan.popular ? 'btn-primary w-full text-center py-2.5' : 'btn-secondary w-full text-center py-2.5'}
          >
            Get Started
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;
