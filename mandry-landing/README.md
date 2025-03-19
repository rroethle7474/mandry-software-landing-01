# Mandry Landing Page

## Overview
[Your project description here] - This is a modern landing page built with React and Vite, featuring a responsive design with Tailwind CSS.
https://mandry.software

## Technologies Used

- **React 18**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling and build system
- **Tailwind CSS**: Utility-first CSS framework
- **Headless UI**: Unstyled UI components for React
- **Lucide React**: Beautiful & consistent icon toolkit
- **date-fns**: JavaScript date utility library

## Project Structure

```
mandry-landing/
├── public/              # Static files served as-is
│   ├── images/          # Public images
│   └── vite.svg         # Favicon
├── src/                 # Source code
│   ├── assets/          # Bundled assets (processed during build)
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services and data fetching
│   ├── styles/          # Additional CSS styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (including Tailwind)
├── .eslintrc.js         # ESLint configuration
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository (https://github.com/rroethle7474/mandry-software-landing-01)
   ```bash
   git clone [repository-url]
   cd mandry-landing
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will launch the application at [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
# For production
npm run build:prod
# or
yarn build:prod

# For staging environment
npm run build:staging
# or
yarn build:staging
```

### Azure Deployment

To prepare files for Azure deployment:
```bash
npm run prepare-azure
# or
yarn prepare-azure
```

This will build the application and copy the necessary `web.config` file to the `dist` directory.

## Additional Scripts

- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run analyze`: Analyze the bundle size in production mode

## Environment Configuration

The application supports different build modes:
- Development (default)
- Staging
- Production

Each environment can have its own configuration in the corresponding `.env` files (`.env.staging`, `.env.production`).

## Performance Optimization

The build pipeline includes:
- Code splitting for optimal loading
- Asset compression (gzip and brotli)
- CSS optimization with Tailwind's JIT compiler

## Contributing

[Add your contribution guidelines here]

## License

[Add your license information here]
