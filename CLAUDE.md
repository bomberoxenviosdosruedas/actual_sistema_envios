# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The `actual_sistema_envios` project is a web application with a strong focus on UI/UX design, primarily using HTML and Tailwind CSS. The project appears to be a system for managing shipments and deliveries, with a distinct brand identity centered around a specific blue and yellow color palette, condensed typography, and a modern, clean aesthetic.

The codebase includes a well-defined design system with tokens for colors, fonts, spacing, shadows, and motion, as well as reusable components for UI elements like buttons, cards, and forms. There's also a UI kit that recreates the website's interface, allowing for interactive exploration and testing of components.

## Architecture and Structure

The project is organized into several key directories:

- **`source/`**: Contains the main HTML files for each page of the website. These files are static and appear to have Tailwind CSS compiled inline.
- **`tokens/`**: Houses the design tokens in CSS format, defining colors, fonts, motion, spacing, etc. This is crucial for maintaining brand consistency.
- **`components/`**: Includes reusable UI components, categorized into `core`, `blocks`, `layout`, and `data`. This promotes modularity and code reuse.
- **`ui_kits/`**: Contains more comprehensive UI kit implementations, likely for interactive prototyping and design-to-code translation. The `website` subdirectory seems to hold React components or similar representations of the site's screens.
- **`assets/`**: Stores static assets like fonts and images.
- **`.agents/`**: Appears to be related to AI-assisted development, possibly for code generation or analysis.

## Development Commands

Here are some commonly used commands for development in this repository:

### Building and Linting

- **Build**: While there isn't an explicit build command found in the provided context, the project utilizes Tailwind CSS. Any changes to token or component files might require recompiling the CSS if a build process is set up.
- **Linting**: The presence of `.oxlintrc.json` suggests OXLint might be used for linting. A common command would be:
  ```bash
  npx olinth
  ```
  or if OXLint is installed globally or via npm scripts in a root `package.json` (not provided).

### Testing

- **Run all tests**: If tests are set up (e.g., using Jest or Vitest with React components in `ui_kits`), a common command would be:
  ```bash
  npm test
  # or
  yarn test
  ```
- **Run a single test**: To run a specific test file:
  ```bash
  # Example for Jest
  npx jest path/to/your/test.spec.js
  # Example for Vitest
  npx vitest path/to/your/test.spec.ts
  ```
- **Run a specific test case**: Many testing frameworks allow running tests that match a specific string:
  ```bash
  # Example for Jest
  npx jest -t "test case name"
  ```

### Development Server

- To run the development server (if one is configured, e.g., for React components):
  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Code Generation and Design

- **RTK (Rust Token Killer)**: This project uses `rtk` for optimizing command output.
  - `rtk gain`: Show token savings analytics.
  - `rtk discover`: Analyze Claude Code history for missed opportunities.
  - `rtk proxy <cmd>`: Execute raw command without filtering.
- **Design System**: The design system is well-documented in `tokens/` and `components/`. Adhering to these tokens and components is crucial for brand consistency.
- **HTML/Tailwind**: Direct editing of HTML files in `source/` and CSS within `tokens/` is the primary way to update the frontend.

## Key Architectural Concepts

- **Design Tokens**: The `tokens/` directory is central to the project's design. It defines all stylistic primitives (colors, fonts, spacing, etc.) in CSS variables. Any UI changes should primarily involve updating these tokens and their usages in components.
- **Reusable Components**: The `components/` directory contains modular UI elements. When developing, prioritize using existing components and extending them if necessary, rather than creating new ones from scratch.
- **Static HTML Output**: The `source/` directory contains static HTML files. This suggests a build process might concatenate CSS inline or generate these files from a more dynamic source (like React components in `ui_kits/website`).
- **UI Kit for Prototyping**: The `ui_kits/website/` directory serves as an interactive representation of the website, useful for understanding component behavior and design.
- **Brand Identity**: The brand is strongly defined by its specific blue (`#0950F6`) and yellow (`#FFEC01`) colors, condensed uppercase typography (Anton, Bebas Neue), and a modern aesthetic with elements like glassmorphism and hard shadows. Consistency with these brand guidelines, as detailed in `DESIGN.md` and `tokens/colors.css`, is paramount.

## Important Files and Directories

- **`CLAUDE.md`**: This file (currently being generated).
- **`README.md`**: Provides a high-level overview of the project.
- **`DESIGN.md`**: Contains detailed design guidelines and audits for the website.
- **`tokens/`**: The source of truth for all design tokens.
- **`components/`**: Reusable UI building blocks.
- **`source/`**: Main HTML pages.
- **`.oxlintrc.json`**: OXLint configuration file (for linting).
- **`package.json` (in `.agents/skills/`)**: Indicates potential build or script definitions for AI-assisted development tools.

## Code Quality and Practices

- **Brand Consistency**: Adhere strictly to the defined design tokens and brand guidelines.
- **Component Reusability**: Utilize existing components from the `components/` directory.
- **Accessibility**: Pay attention to contrast ratios, touch target sizes, and semantic HTML, as highlighted in the design audit.
- **Tailwind CSS**: Leverage Tailwind CSS utility classes for styling, but ensure they map to the project's design tokens.
- **Readability**: Maintain clear and concise code, following established patterns within the repository.

## Development Workflow

1.  **Understand the Brand**: Familiarize yourself with `DESIGN.md` and the tokens in `tokens/`.
2.  **Identify Components**: Locate and use existing components in `components/` whenever possible.
3.  **Implement Changes**: Modify HTML files in `source/` or component files in `components/`. For significant UI changes, consider updating the design tokens first.
4.  **Lint and Test**: Run linting and tests regularly to ensure code quality and consistency.
5.  **Verify Design**: Cross-reference changes against the design guidelines and potentially the interactive UI kit in `ui_kits/website/`.
