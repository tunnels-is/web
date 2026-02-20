import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." />
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-dark-accent-primary mb-4">404</h1>
        <p className="text-lg text-dark-text-primary mb-2">Page not found</p>
        <p className="text-sm text-dark-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary text-sm px-5 py-2">
            Back to Home
          </Link>
          <Link to="/download" className="btn-secondary text-sm px-5 py-2">
            Download
          </Link>
          <a
            href="https://docs.tunnels.is"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-5 py-2"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
