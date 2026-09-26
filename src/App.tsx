import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';
import GridBackground from '@/components/layout/GridBackground';
import { routes } from '@/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="prime-web-tech-theme">
      <Router>
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen selection:bg-primary selection:text-black">
          <GridBackground />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </div>
        <Toaster position="top-center" expand={true} richColors closeButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
