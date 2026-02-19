import TopBar from './TopBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
