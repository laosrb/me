# Portfolio Application

A modern React portfolio application built with Vite, React Router, and Tailwind CSS.

## Features

- **Home Page**: Animated greeting in multiple languages with portfolio overview
- **Experience Page**: Showcase of work experience, projects, and internships with filtering
- **Resume Page**: Professional summary and resume download
- **About Me Page**: Collapsible sections for bio, blog, bucket list, and contact information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── api/              # API client (base44Client)
│   ├── components/       # Reusable components
│   │   ├── about/        # About page components
│   │   └── ui/           # UI component library
│   ├── lib/              # Utility libraries
│   ├── Pages/            # Page components
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component with routing
│   ├── Layout.jsx        # Layout wrapper component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TanStack Query** - Data fetching and state management
- **date-fns** - Date formatting utilities

## Notes

- The API client (`src/api/base44Client.js`) is currently a mock implementation for local development. Replace it with your actual API client when ready.
- Update resume URL in `src/Pages/Resume.jsx` when you have your resume file.
- Customize contact information in `src/components/about/ContactSection.jsx` and `src/Layout.jsx`.

