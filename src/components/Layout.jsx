import TopBar from './TopBar';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow pb-14 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Layout;
