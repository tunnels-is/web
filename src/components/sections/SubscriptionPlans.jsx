import { motion } from 'framer-motion';

const SubscriptionPlans = ({ subscriptions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
      {subscriptions.map((plan, index) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 transition-all duration-200"
        >
          {plan.popular && (
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-dark-accent-primary to-blue-500 text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </span>
            </div>
          )}
          <div className="text-center mb-5">
            <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
            <div className="flex items-baseline justify-center mb-0.5">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-dark-text-muted ml-1 text-xs">{plan.period}</span>
            </div>
            {plan.price !== "$8" && (
              <p className="text-xs text-dark-text-muted line-through">$8/month</p>
            )}
          </div>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <svg className="w-3.5 h-3.5 text-dark-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-text-secondary text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={plan.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full text-center py-2 text-sm`}
          >
            Get Started
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;
