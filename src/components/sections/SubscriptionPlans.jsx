import { motion } from 'framer-motion';

const SubscriptionPlans = ({ subscriptions }) => {
  return (
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
              <span className="text-5xl font-bold">{plan.price}</span>
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
  );
};

export default SubscriptionPlans;
