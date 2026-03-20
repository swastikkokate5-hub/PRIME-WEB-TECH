# PRIME WEB TECH - Features Documentation

This document outlines the core features and pages of the PRIME WEB TECH application in a clear, structured format.

## 1. Core Pages & Routing
The application is a Single Page Application (SPA) built with React and features the following main routes:
- **Home (`/`)**: The landing page showcasing the main value proposition, features, and call-to-actions.
- **Services (`/services`)**: A comprehensive list of digital services offered by the company.
- **Service Details (`/services/:id`)**: Dynamic pages showing in-depth information about a specific service.
- **About (`/about`)**: Information regarding the company's background, mission, and team.
- **Pricing (`/pricing`)**: Detailed pricing plans and service tiers.
- **Contact (`/contact`)**: A contact form and company location/contact details.
- **404 Not Found / Fallback**: Automatic redirection to existing routes.

## 2. Global UI / UX Features
- **Dark/Light Mode Support**: Built-in theme toggling via `ThemeProvider`, defaulting to dark mode with local storage persistence (`prime-web-tech-theme`).
- **Responsive Navigation**: A standard `Navbar` that adapts to desktop and mobile views.
- **Consistent Footers**: A global `Footer` present across all pages.
- **Floating Action Buttons**: Quick-access interactive buttons globally available (`FloatingButtons`).
- **Scroll Management**: Automatic scroll-to-top behavior when navigating between routes.
- **Toast Notifications**: Interactive toast messages powered by `sonner` for user feedback and alerts.

## 3. Theming & Animations
- **Tailwind CSS Integration**: Comprehensive styling with utility classes.
- **Framer Motion**: Page transitions and component micro-animations (`framer-motion` / `motion`).
- **Radix UI Primitives**: Accessible, unstyled UI components forming the foundation of interactive elements (accordions, dialogs, dropdowns, etc.).

## 4. Forms & Data Handling
- **React Hook Form**: Form state management and validation.
- **Zod**: Schema-based form validation for ensuring data integrity (e.g., in the Contact page).
