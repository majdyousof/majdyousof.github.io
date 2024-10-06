# Personal Website

This is the repository for my personal website, built using React with TypeScript. The website showcases my projects, CV, blog posts, and other information about me.

# Contents
- [Features](#features)
- [Tech Stack](#tech-Stack)
- [Start-up](#start-up)
- [Scripts](#scripts)

# Features
- 📝 Blog: Share articles and tutorials.
- 👨‍💻 Projects: Showcase my work and personal projects.
- 📄 CV: Provide a downloadable version of my CV (WIP).
- 🌐 Responsive Design: Mobile-friendly website.

# Tech Stack
- Frontend: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- Styling: [CSS Modules](https://github.com/css-modules/css-modules)
- Routing: [React Router](https://reactrouter.com/en/main)
- Bundling: [Vite](https://vite.dev)

# Start-up

## Prerequisites

You must have the following installed:
- **Node.js** (>= 14.x)
- **npm** or **yarn**

## Installation
1. Clone the repository and open up the project directory
2. Install the project dependencies:
```bash
npm install #if you are using npm
yarn install #if you are using yarn
```
## Running the Development Server

To run the development server, use the following commands:

```bash
npm run dev #if you are using npm
yarn dev #if you are using yarn
```
This will run the app in development on a port on yor computer.

## Building for Production

To create an optimized production build:

```bash
npm run build #if you are using npm
yarn build #if you are using yarn
```
The build files will be output to the `dist/` directory.

# Scripts
- `dev`: Runs the development server.
- `build`: Builds the app for production.
- `lint`: Lints the TypeScript files.
- `format`: Formats/Refactors the files using Prettier
- `deploy`: Deploys the website through Github Pages (*Requires Github Actions set up*)