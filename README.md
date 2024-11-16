# Static Site Generator with 11ty, Vite.js, Tailwind CSS, and Nunjucks

This project is a setup for building fast, static websites using a mix of cool tools. We’re using **11ty** to generate the site content, **Vite.js** to bundle everything up, **Tailwind CSS** for quick and flexible styling, and **Nunjucks** to handle all the templates. It’s a powerful, yet simple setup to get your site up.

## Description

This project uses a combination of modern web technologies to build fast, static websites. Here's a breakdown of the key technologies used:

### 1. 11ty as Static Site Generator

[11ty](https://www.11ty.dev/) is a simple and flexible static site generator. It processes your content files (markdown, JSON, Nunjucks templates, etc.) and generates HTML files.

### 2. Vite.js as Module Bundler

[Vite.js](https://vitejs.dev/) is used as the module bundler to manage and optimize JavaScript, CSS, and other assets during the build process. It provides fast build times and efficient code splitting.

### 3. Tailwind CSS Framework

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that allows for highly customizable and responsive designs. It is integrated into this project to provide utility classes for styling.

### 4. Nunjucks as Template Engine

[Nunjucks](https://mozilla.github.io/nunjucks/) is a powerful and flexible templating engine that allows us to define HTML templates with dynamic content. It is used to render layouts and partials in this project.

## Directory Structure

```bash
.
├── plugin/
│   └── # 11ty mandatory config files
├── src/
│   ├── _data/            # Configuration and data files for the website
│   ├── _includes/        # 11ty component & layout pages
│   ├── assets/           # Assets directory (JS, SCSS files, etc.)
│   └── sites/            # 11ty page content (individual pages of the site)
```

### Explanation of Directory Structure
- `plugin/`: This directory contains the mandatory configuration files for 11ty, such as .eleventy.config.vite.js as example.
- `src/_data/`: This folder contains global configuration data and JSON files that can be used across the site (e.g., metadata, configuration values, etc.).
- `src/_includes/`: Here, you'll find the layout and reusable components (e.g., header, footer, etc.) defined using Nunjucks templates.
- `src/assets/`: This folder contains the raw assets like SCSS files, JavaScript files, and images, which are processed and bundled using Vite.js.
- `src/sites/`: This folder contains the content files for individual pages of the website, such as markdown or HTML files processed by 11ty.

## Requirements
Node.js version 20 or higher

## Setup and Installation
Clone the repository to your local machine:

```bash
git clone https://github.com/whydev-id/11ty-tailwind-vite-template.git
```

Navigate into the project directory:

```bash
cd project-name
```

Install the necessary dependencies:

```bash
npm install
```

Start the development server:
```bash
npm run dev
```
This will start a local server at `http://localhost:8080`

Build the project for production:
```bash
npm run build
```
The final, production-ready static files will be generated in the `/dist` directory & ready to deploy