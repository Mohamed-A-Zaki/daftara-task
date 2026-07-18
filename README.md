# Pokemon App

A modern React application built with TypeScript, Vite, and cutting-edge frontend technologies. This project demonstrates best practices in React development with a focus on performance, maintainability, and developer experience.

## 🚀 Tech Stack

- **React 19** - Latest React with React Compiler enabled for optimized performance
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Mantine UI** - Comprehensive React component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **TanStack React Query** - Powerful data fetching and state management
- **Axios** - HTTP client for API requests
- **Mongez** - Utility libraries for DOM manipulation and state management

## 📦 Features

- ⚡ Fast development with Vite HMR
- 🎨 Beautiful UI components with Mantine and Tailwind
- 🔍 Efficient data fetching with React Query
- 🛣️ Client-side routing with React Router
- 📱 Responsive design
- 🧪 Type-safe with TypeScript
- 🎯 React Compiler for automatic optimizations
- 🚀 GitHub Pages deployment ready

## 🛠️ Installation

```bash
# Install dependencies
yarn install
```

## 📜 Available Scripts

```bash
# Start development server (opens browser automatically)
yarn dev

# Update dependencies and start dev server
yarn start

# Build for production
yarn build

# Preview production build locally
yarn preview

# Run ESLint
yarn lint

# Format code with Prettier
yarn format

# Update all dependencies
yarn update

# Serve production build locally
yarn serve

# Deploy to GitHub Pages
yarn deploy
```

## 📁 Project Structure

```
src/
├── modules/           # Feature-based modules
│   ├── home/         # Home page module
│   ├── pokemons/     # Pokemon-related features
│   └── not-found/    # 404 page
├── shared/           # Shared utilities and configurations
│   ├── api/          # API configurations and services
│   ├── configurations/ # App configurations
│   ├── providers/    # React context providers
│   ├── routes/       # Route definitions
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── App.tsx           # Root component
└── main.tsx          # Application entry point
```

## 🚢 Deployment

This project is configured for GitHub Pages deployment. The `homepage` field in `package.json` is set to deploy to `https://Mohamed-A-Zaki.github.io/daftara-task/`.

To deploy:

```bash
yarn deploy
```

## 🔧 Development Tools

- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Code formatting with Tailwind and import organization plugins
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

## 📝 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.js` - ESLint rules and configuration
- `.prettierrc` - Prettier formatting rules
- `postcss.config.cjs` - PostCSS configuration for Tailwind

## 🌐 Live Demo

Visit the live application at: https://Mohamed-A-Zaki.github.io/daftara-task/

## 📄 License

This project is private.
