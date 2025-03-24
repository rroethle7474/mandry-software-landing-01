# Mandry Landing Page

## Overview
This is a modern landing page.

Prod Link: https://mandry.software

## Technologies Used

- **React 18**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling and build system
- **Tailwind CSS**: Utility-first CSS framework
- **Headless UI**: Unstyled UI components for React
- **Lucide React**: Beautiful & consistent icon toolkit
- **date-fns**: JavaScript date utility library

## Time-Based Features

The landing page implements dynamic time-based content that changes according to the time of day:

### Time Periods

The application recognizes four distinct time periods:

- **Morning** (4:00 AM - 11:59 AM): Bright, energetic visuals
- **Midday** (12:00 PM - 4:59 PM): Productive, focused atmosphere
- **Evening** (5:00 PM - 7:59 PM): Warm, winding-down visuals
- **Night** (8:00 PM - 3:59 AM): Calm, restful ambiance

### Dynamic Content

The following elements adjust automatically based on the current time period:

- **Hero Background**: The main hero image changes to reflect the time of day
- **Logo**: The logo subtly transforms to match the current time period
- **Visual Atmosphere**: Colors and imagery adapt to match the time-appropriate mood

### Time Override Slider

A custom time slider in the footer allows visitors to explore the site at different times of day:

- **Interactive Control**: Visitors can manually override the time to view different versions of the site
- **Real-time Updates**: Visuals update instantly when adjusting the slider without page refresh
- **Time Indicators**: Labels and icons provide feedback about the selected time period
- **Reset Functionality**: One-click reset returns to the current actual time

### Implementation Details

- **Context API**: Uses React Context for global time state management
- **Custom Hooks**: The `useTimeOfDay` hook manages time detection and transitions
- **Time Calculations**: Automatic detection of current time period with date-fns
- **Programmatic Transitions**: Scheduled updates for time period changes
- **Image Optimization**: Time-specific images with WebP format support

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

This will launch the application at [http://localhost:5173]

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
