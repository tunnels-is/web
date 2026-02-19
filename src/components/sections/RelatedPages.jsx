import { Link } from 'react-router-dom';
import ContentSection from './ContentSection';
import SectionHeader from '../ui/SectionHeader';

const RelatedPages = ({ pages }) => {
  if (!pages || pages.length === 0) return null;

  return (
    <ContentSection>
      <SectionHeader
        title="Explore More"
        subtitle="Continue learning about Tunnels"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="block p-5 rounded-lg border border-dark-border/30 hover:border-dark-accent-primary/30 transition-all duration-200 group"
          >
            <h3 className="text-sm font-semibold text-dark-text-primary mb-1.5 group-hover:text-dark-accent-primary transition-colors">
              {page.title}
            </h3>
            <p className="text-xs text-dark-text-secondary leading-relaxed mb-3">
              {page.description}
            </p>
            <span className="text-dark-accent-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Learn more
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </ContentSection>
  );
};

export default RelatedPages;
