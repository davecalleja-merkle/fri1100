# fri1100

asdasd

[![Next.js 15](https://img.shields.io/badge/Next.js%2015-black)](https://nextjs.org/)
[![pnpm 9.0](https://img.shields.io/badge/pnpm%209.0-FF6C37)](https://pnpm.io/)
[![Tailwind CSS 4.1](https://img.shields.io/badge/Tailwind%20CSS%204.1-06B6D4)](https://tailwindcss.com/)
[![Storybook 7.0](https://img.shields.io/badge/Storybook%207.0-FF4785)](https://storybook.js.org/)
[![Style Dictionary 5.0](https://img.shields.io/badge/Style%20Dictionary%205.0-FF6B6B)](https://styledictionary.com/)

## 🚀 Quick Start

```bash
# Get the code on your local machine
git clone https://github.com/davecalleja-merkle/fri1100.git

# Install all required packages
cd fri1100 && pnpm install

# Install all 45+ ShadCN components and build design tokens
pnpm run setup  # This automatically runs: npx shadcn@latest add --all --yes && pnpm run build:tokens

# Launch the dev server at http://localhost:3000
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your design system.

## ✨ What's Included

### Core Framework
- **Next.js 15** - App Router with React 18
- **TypeScript** - Full type safety

### Design System
- **Tailwind CSS** - Utility-first CSS framework
- **Complete ShadCN UI Library** - 45+ ShadCN UI components
- **Style Dictionary** - Design tokens in 3 formats


#### Component Library: Complete ShadCN UI Library


This project includes the **complete ShadCN UI library** with 45+ production-ready components.

- **Installation**: Automatically installed via `pnpm run setup`
- **Command**: `npx shadcn@latest add --all --yes`
- **Location**: All components will be available in `components/ui/`
- **Features**:
  - Fully typed with TypeScript
  - Accessible (WCAG compliant)
  - Customizable source code
  - Production-ready


### Development Tools
- **PNPM** - Fast package management
- **Storybook** - Component documentation and testing
- **ESLint** - Code quality and consistency

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run setup` | Automatically installs all 45+ ShadCN UI components and builds design tokens |
| `pnpm run dev` | Start development server on port 3000 |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |
| `pnpm run build:tokens` | Build design tokens to all configured formats |
| `pnpm run build:tokens:watch` | Watch and rebuild design tokens on changes |
| `pnpm run storybook` | Start Storybook dev server on port 6006 |
| `pnpm run build-storybook` | Build Storybook for production |

## 📁 Project Structure

```
fri1100/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   └── ui/                # ShadCN UI components
├── lib/                   # Utility functions
│   └── utils.ts           # Utility functions
├── tokens/                # Design token source files
│   ├── base.json          # Base tokens
│   └── theme/             # Theme-specific tokens
├── dist/                  # Generated design token outputs
│   ├── css/               # CSS variables
│   ├── js/                # JavaScript tokens
│   ├── style-dictionary/          # style-dictionary format outputs
│   ├── design-tokens-css-variables/          # design-tokens-css-variables format outputs
│   ├── design-tokens-tailwind-theme/          # design-tokens-tailwind-theme format outputs
│   └── ...
├── .storybook/            # Storybook configuration
├── stories/               # Component stories
├── scripts/               # Build and setup scripts
├── components.json        # ShadCN UI configuration
├── style-dictionary.config.js # Token build configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Setup Details

### Component Installation

Automatically installs all 45+ ShadCN UI components


**What gets installed:**
- All 45+ ShadCN UI components
- Complete TypeScript definitions
- Radix UI primitives for accessibility
- Full source code in `components/ui/`

**How it works:**
The setup script runs `npx shadcn@latest add --all --yes` automatically, installing every component in the ShadCN registry. This gives you the complete toolkit immediately.



### Design Tokens

Design tokens are built using Style Dictionary and output to 3 format(s):
- style-dictionary
- design-tokens-css-variables
- design-tokens-tailwind-theme

Run `pnpm run build:tokens` to regenerate tokens after changes.



### Storybook

Storybook is configured with the following addons:
- shadcn-stories
- visual-tests
- accessibility

Start Storybook with `pnpm run storybook`.


## 🔄 Development Workflow

### First Time Setup
1. **Clone the repository:** `git clone https://github.com/davecalleja-merkle/fri1100.git`
2. **Install dependencies:** `cd fri1100 && pnpm install`
3. **Setup project:** `pnpm run setup`

### Daily Development
1. **Start dev server:** `pnpm run dev`
2. **Make changes** to components in `components/`
3. **View changes** at [http://localhost:3000](http://localhost:3000)
4. **View stories** at [http://localhost:6006](http://localhost:6006)

### Before Committing
1. **Run linting:** `pnpm run lint`
2. **Build project:** `pnpm run build`
3. **Rebuild tokens:** `pnpm run build:tokens` (if token changes)

## 🆘 Troubleshooting

### Common Issues

**Components not showing correctly?**
```bash
# Re-run setup to ensure components are properly installed and tokens are built
pnpm run setup
```

**Design tokens not updating?**
```bash
# Rebuild tokens after making changes
pnpm run build:tokens
```

**TypeScript errors?**
```bash
# Ensure all dependencies are installed
pnpm install
# Check TypeScript configuration
pnpm run lint
```

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
pnpm run dev -- -p 3001
```

### Getting Help
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Browse [Storybook documentation](https://storybook.js.org/docs)
- Learn about [Style Dictionary](https://amzn.github.io/style-dictionary/)

