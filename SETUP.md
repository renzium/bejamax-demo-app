# Quick Setup Guide

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
bejamax-demo-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── event-loop/         # Event loop demo
│   │   ├── performance/        # Performance demo
│   │   ├── cms/                # CMS demo
│   │   └── theming/            # Theming demo
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   └── theme/              # Theme system components
│   ├── data/                   # Mock data
│   └── workers/                # Web Workers
├── public/                     # Static assets
└── package.json
```

## Demo Pages

- **/** - Homepage with navigation
- **/event-loop** - JavaScript concurrency demonstration
- **/performance** - Performance debugging with Web Workers
- **/cms** - Headless CMS integration demo
- **/theming** - Multi-brand theming system

## Key Features Demonstrated

✅ JavaScript Event Loop (Call Stack, Microtask, Macrotask)  
✅ Performance Debugging (Blocking vs Non-blocking)  
✅ Web Workers for Heavy Computation  
✅ CMS Integration Patterns  
✅ Multi-Brand Theming with CVA  
✅ Next.js 16 App Router  
✅ React 19.2 Server Components  
✅ TypeScript  
✅ Tailwind CSS 4  

## For Your Loom Video

Each demo page is designed to showcase:
1. **Event Loop** - Visual execution order demonstration
2. **Performance** - Open Chrome DevTools Performance tab to show the difference
3. **CMS** - Discuss headless CMS experience and integration patterns
4. **Theming** - Show white-label system architecture and implementation

Good luck with your video! 🎥

