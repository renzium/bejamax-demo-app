"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import Link from "next/link";

export default function ThemingPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-brand-primary hover:text-brand-primary-dark font-medium mb-6 inline-flex items-center gap-2 transition-colors">
          ← Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Multi-Brand Theming System
          </h1>
          <p className="text-xl text-brand-text-light">
            White-label theming system using CSS variables, Tailwind, and
            class-variance-authority (CVA)
          </p>
        </div>

        <Card variant="elevated" className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Theme Switcher</h2>
          <p className="text-brand-text-light mb-4">
            Switch between different brand themes to see the theming system in
            action:
          </p>
          <ThemeSwitcher />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card variant="elevated" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
            <div className="space-y-4">
              <div>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div>
                <Button variant="primary" size="sm">
                  Small Button
                </Button>
              </div>
              <div>
                <Button variant="primary" size="lg">
                  Large Button
                </Button>
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Card Variants</h2>
            <div className="space-y-4">
              <Card variant="default" className="p-4">
                Default Card
              </Card>
              <Card variant="primary" className="p-4">
                Primary Card
              </Card>
              <Card variant="elevated" className="p-4">
                Elevated Card
              </Card>
            </div>
          </Card>
        </div>

        <Card variant="elevated" className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. CSS Variables</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`:root {
  --brand-primary: #3b82f6;
  --brand-background: #ffffff;
  --brand-text: #1f2937;
}

[data-theme="brand-b"] {
  --brand-primary: #a855f7;
  /* ... */
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Tailwind Configuration</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        primary: "var(--brand-primary)",
        background: "var(--brand-background)",
        text: "var(--brand-text)",
      },
    },
  },
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. CVA Component Variants</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import { cva } from "class-variance-authority";

const button = cva("px-4 py-2 rounded", {
  variants: {
    variant: {
      primary: "bg-brand-primary text-white",
      outline: "border border-brand-primary",
    },
  },
});

// Usage
<button className={button({ variant: "primary" })}>
  Click me
</button>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Theme Provider</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// ThemeProvider manages theme state
const [theme, setTheme] = useState("brand-a");

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);`}</code>
              </pre>
            </div>
          </div>
        </Card>

        <Card variant="elevated" className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Benefits of This Approach</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              • <strong>Type-safe:</strong> CVA provides TypeScript support for
              variants
            </li>
            <li>
              • <strong>Performant:</strong> CSS variables update instantly
              without re-renders
            </li>
            <li>
              • <strong>Scalable:</strong> Easy to add new brands or themes
            </li>
            <li>
              • <strong>Maintainable:</strong> Centralized theme configuration
            </li>
            <li>
              • <strong>Flexible:</strong> Components can have brand-specific
              overrides
            </li>
            <li>
              • <strong>SSR-friendly:</strong> Works with Next.js Server
              Components
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

