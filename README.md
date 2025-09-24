# WebScrape Frontend

A modern Next.js frontend application for browsing and interacting with web scraped product data.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Project Structure](#project-structure)
- [Required Dependencies](#required-dependencies)
- [Backend Integration](#backend-integration)

## Features
- Responsive category and subcategory dropdown navigation
- User authentication (login/register) with modal interface
- Search functionality
- Product browsing and detail pages
- Favourites management
- Mobile-responsive design

## Technologies
- **Framework**: Next.js 13.5.11 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query for API calls
- **UI Components**: Custom React components

## Installation

### Prerequisites
- Node.js 16.14 or later
- npm 8.3 or later

### Clone the repository
```bash
# Clone the project (replace with your actual repository URL)
git clone <repository-url>
cd webscrapeFrontend
```

### Install dependencies
```bash
npm install
```

## Development

### Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Key Development Features
- Fast Refresh: The page automatically updates as you edit files
- TypeScript support: Provides type checking during development
- Tailwind CSS: Hot-reloading of styles during development

## Production

### Build for production
```bash
npm run build
```

This generates an optimized production build in the `.next` directory.

### Run the production server
```bash
npm start
```

## Project Structure

```
webscrapeFrontend/
├── app/              # Next.js App Router pages and layouts
│   ├── auth/         # Authentication pages (login/register)
│   ├── categories/   # Category browsing pages
│   ├── product/      # Product detail pages
│   ├── search/       # Search functionality
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable UI components
│   ├── AuthModel.tsx        # Authentication modal
│   ├── CategoryDropdown.tsx # Responsive category dropdown
│   ├── Header.tsx           # Application header
│   └── SearchBar.tsx        # Search bar component
├── public/           # Static assets
├── styles/           # Global styles
├── .next/            # Build output (generated during build)
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

## Required Dependencies

The project uses the following key dependencies:
- `next`: React framework for production
- `react` and `react-dom`: UI library
- `@tanstack/react-query`: For data fetching and state management
- `tailwindcss`: Utility-first CSS framework
- `typescript`: Typed JavaScript superset

All dependencies are listed in the `package.json` file and will be installed with `npm install`.

## Backend Integration

If your backend API sits on a different origin in development, you have two options:
1. Set up rewrites in `next.config.js`
2. Use an environment variable and update fetch calls

Ensure all API endpoints are correctly configured to work with your web scraping backend service.
