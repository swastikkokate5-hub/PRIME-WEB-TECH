import { RouteConfig } from '@/types';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import Portfolio from '@/pages/Portfolio';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/services/:id',
    element: <ServiceDetail />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
  },
];
