import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const AccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  variant,
  isVisible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className={
        variant === 'separated'
          ? 'overflow-hidden transition-colors duration-200'
          : 'overflow-hidden'
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-inset group"
      >
        {/* Optional icon */}
        {item.icon && (
          <span
            className="flex-shrink-0 w-5 h-5 text-[#06b6d4]"
            aria-hidden="true"
          >
            {item.icon}
          </span>
        )}

        {/* Title */}
        <span
          className={`flex-1 text-sm font-semibold transition-colors duration-150 ${
            isOpen
              ? 'text-[#e2e8f0]'
              : 'text-[#e2e8f0] group-hover:text-white'
          }`}
        >
          {item.title}
        </span>

        {/* Optional tag badge */}
        {item.tag && (
          <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide text-[#3b82f6]">
            {item.tag}
          </span>
        )}

        {/* Chevron */}
        <motion.span
          className="flex-shrink-0 text-[#94a3b8] transition-colors duration-150 group-hover:text-[#e2e8f0]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <ChevronIcon />
        </motion.span>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pt-1">
              {item.icon && <div className="w-5" />}
              <div
                className={`text-sm text-[#94a3b8] leading-relaxed ${
                  item.icon ? 'pl-8' : ''
                }`}
              >
                {item.content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider (default variant only, not on last item — handled by parent) */}
    </motion.div>
  );
};

const AccordionSection = ({
  items = [],
  variant = 'default',
  allowMultiple = false,
  defaultOpen = null,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const buildInitialState = () => {
    if (defaultOpen !== null && defaultOpen >= 0 && defaultOpen < items.length) {
      return new Set([defaultOpen]);
    }
    return new Set();
  };

  const [openSet, setOpenSet] = useState(buildInitialState);

  const toggle = (index) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  if (items.length === 0) return null;

  if (variant === 'separated') {
    return (
      <div ref={ref} className="flex flex-col gap-2">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openSet.has(index)}
            onToggle={() => toggle(index)}
            variant="separated"
            isVisible={isVisible}
          />
        ))}
      </div>
    );
  }

  // "default" variant — shared outer card, divided by border lines
  return (
    <div
      ref={ref}
      className="overflow-hidden"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={
            index < items.length - 1
              ? 'border-b border-[#1e293b]/50'
              : ''
          }
        >
          <AccordionItem
            item={item}
            index={index}
            isOpen={openSet.has(index)}
            onToggle={() => toggle(index)}
            variant="default"
            isVisible={isVisible}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
