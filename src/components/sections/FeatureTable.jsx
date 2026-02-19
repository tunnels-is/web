import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureTable = ({
  headers = [],
  rows = [],
  caption,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="w-full text-sm min-w-[400px]">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-3 sm:px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest ${
                    index === 0 ? 'text-dark-text-primary' : 'text-dark-text-muted'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border/50">
            {rows.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + rowIndex * 0.03 }}
                className="hover:bg-dark-card/50 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-3 sm:px-5 py-3 ${
                      cellIndex === 0
                        ? 'font-medium text-dark-text-primary'
                        : 'text-dark-text-secondary'
                    }`}
                  >
                    {typeof cell === 'boolean' ? (
                      cell ? (
                        <svg className="w-4 h-4 text-dark-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-dark-text-muted/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <div className="px-5 py-3">
          <p className="text-xs text-dark-text-muted">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default FeatureTable;
