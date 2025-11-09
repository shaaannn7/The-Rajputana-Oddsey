import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTopButton from './components/BackToTopButton';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DestinationPage = lazy(() => import('./pages/DestinationPage'));
const PlannerPage = lazy(() => import('./pages/PlannerPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const PlansPage = lazy(() => import('./pages/PlansPage'));

const PageLoader: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[var(--color-accent)]"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="flex-grow animate-fade-in" key={location.pathname}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations/:id" element={<DestinationPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
