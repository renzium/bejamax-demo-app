# Bejamax Demo App

A Next.js 16 + React 19.2 demonstration application showcasing JavaScript concurrency, performance debugging, CMS integration, and multi-brand theming systems.

## 🚀 Features

- **Event Loop Demo** - Visual demonstration of JavaScript concurrency, call stack, microtask queue, and macrotask queue
- **Performance Debugging** - Compare blocking vs non-blocking heavy computations with Web Workers
- **CMS Integration** - Practical headless CMS integration with mock data
- **Multi-Brand Theming** - White-label theming system using CSS variables, Tailwind, and CVA

## 🛠️ Technology Stack

- **Next.js 16.0.6** (App Router)
- **React 19.2**
- **TypeScript**
- **Tailwind CSS 4+**
- **class-variance-authority (CVA)**
- **clsx**
- **Sanity client** (optional)

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
  app/
    layout.tsx          # Root layout with ThemeProvider
    page.tsx            # Homepage with navigation
    event-loop/         # Event loop demonstration
    performance/        # Performance debugging demo
    cms/                # CMS integration demo
    theming/            # Multi-brand theming demo
  components/
    ui/
      button.tsx        # Button component with CVA
      card.tsx          # Card component with CVA
    theme/
      ThemeProvider.tsx # Theme context provider
      ThemeSwitcher.tsx # Theme switcher component
  data/
    cms-data.ts         # Mock CMS data
  workers/
    slowWorker.ts       # Web Worker for heavy computation
```

## 🎯 Demo Pages

### `/event-loop`
Visual demonstration of JavaScript event loop execution order:
- Call Stack (synchronous code)
- Microtask Queue (Promises)
- Macrotask Queue (setTimeout, setInterval)

### `/performance`
Performance debugging demonstration:
- Blocking task (runs on main thread)
- Non-blocking task (runs in Web Worker)
- UI responsiveness comparison

### `/cms`
Headless CMS integration demo:
- Mock CMS data fetching
- Refresh functionality
- Best practices and integration patterns

### `/theming`
Multi-brand theming system:
- Three brand themes (Blue, Purple, Orange)
- CSS variables + Tailwind mappings
- CVA component variants
- Theme switching

## 🎨 Theming System

The app uses a sophisticated theming system:

1. **CSS Variables** - Defined in `globals.css` for each brand
2. **Tailwind Configuration** - Maps CSS variables to Tailwind colors
3. **CVA Components** - Type-safe component variants
4. **Theme Provider** - React context for theme management

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended config
- **Prettier** - Code formatting
- **Tailwind CSS** - Custom theme variables

## 📚 Learn More

This demo app was created for the Bejamas hiring task to showcase:
- JavaScript concurrency understanding
- Performance debugging skills
- CMS integration experience
- White-label theming expertise
