# PRIME WEB TECH - Architecture & Tech Stack

## Tech Stack Overview
The application is a modern, high-performance web frontend built with the following technologies:
- **Framework**: React 18
- **Build Tool**: Vite (specifically `rolldown-vite` and `@vitejs/plugin-react` for ultra-fast HMR and building)
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS (v3) along with `class-variance-authority` and `clsx` for dynamic class merging.
- **UI Components**: Radix UI (Headless primitives for accessibility) + custom components (likely modeled after shadcn/ui).
- **Icons**: Lucide React
- **Animations**: Framer Motion (`framer-motion` & `motion`)
- **Forms & Validation**: React Hook Form combined with Zod schema validation.
- **Language**: TypeScript for static type checking.
- **Linting & Formatting**: Biome (`@biomejs/biome`) and TypeScript compiler (`tsc`).

*Note: The project does not currently use Next.js. It is a pure React SPA bundled via Vite.*

## Folder Structure

```text
d:\PRIME WEB TECH
├── .rules/             # Custom build/lint checking scripts
├── public/             # Static public assets (e.g., icons, images) not processed by Vite
├── src/                # Main application source code
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Structural components (Navbar, Footer, Sidebar, etc.)
│   │   ├── shared/     # Generic components used across multiple pages
│   │   ├── ui/         # Base UI primitives (Buttons, Inputs, Dialogs)
│   │   └── common/     # Other common UI components
│   ├── contexts/       # React Context providers (Theme, Auth, etc.)
│   ├── data/           # Mock data or static configuration constants
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and library wrappers (e.g., Tailwind merge utilities)
│   ├── pages/          # Top-level route components (Home, About, Services, etc.)
│   ├── services/       # API integration and external service calls
│   ├── types/          # TypeScript interface and type definitions
│   ├── App.tsx         # Root React component tying providers, routing, and layout together
│   ├── index.css       # Global Tailwind CSS and base styles
│   ├── main.tsx        # React DOM entry point
│   └── routes.tsx      # Route definitions mapping paths to page components
├── biome.json          # Configuration for the Biome linter/formatter
├── components.json     # Configuration for shadcn/ui or similar UI generators
├── index.html          # Vite entry HTML file
├── package.json        # Project dependencies and npm scripts
├── tailwind.config.js  # Tailwind CSS configuration and theme extensions
└── tsconfig.*.json     # TypeScript configurations for app, node, and strict checking
```

## Security & Readiness
- **Forms**: Secured thoroughly on the client side with Zod validation.
- **Routing**: Standard client-side routing. For a fully secure production environment, ensure the chosen hosting provider handles SPA fallback routing (redirecting all requests to `index.html`).
