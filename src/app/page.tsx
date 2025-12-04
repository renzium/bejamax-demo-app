import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent leading-tight">
            Bejamax Demo App
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-light mb-3 font-medium">
            Next.js 16 + React 19.2 demonstration application
          </p>
          <p className="text-lg text-brand-text-light max-w-2xl mx-auto">
            Showcasing JavaScript concurrency, performance, CMS integration, and theming
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <Link href="/event-loop" className="group block h-full">
            <Card variant="elevated" className="p-8 sm:p-10 h-full hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-blue-500 hover:shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300 shadow-sm">
                <span className="text-3xl">⚡</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-brand-text leading-tight">Event Loop</h2>
              <p className="text-brand-text-light mb-8 text-base leading-relaxed">
                Visual demonstration of JavaScript concurrency, call stack,
                microtask queue, and macrotask queue
              </p>
              <Button variant="primary" className="w-full py-3 text-base font-semibold">View Demo →</Button>
            </Card>
          </Link>

          <Link href="/performance" className="group block h-full">
            <Card variant="elevated" className="p-8 sm:p-10 h-full hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-green-500 hover:shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 mb-6 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 shadow-sm">
                <span className="text-3xl">📊</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-brand-text leading-tight">Performance</h2>
              <p className="text-brand-text-light mb-8 text-base leading-relaxed">
                Debug performance issues with slow tasks and Web Workers
              </p>
              <Button variant="primary" className="w-full py-3 text-base font-semibold">View Demo →</Button>
            </Card>
          </Link>

          <Link href="/cms" className="group block h-full">
            <Card variant="elevated" className="p-8 sm:p-10 h-full hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-purple-500 hover:shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 mb-6 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-100 transition-all duration-300 shadow-sm">
                <span className="text-3xl">📝</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-brand-text leading-tight">CMS Integration</h2>
              <p className="text-brand-text-light mb-8 text-base leading-relaxed">
                Practical headless CMS integration with mock data
              </p>
              <Button variant="primary" className="w-full py-3 text-base font-semibold">View Demo →</Button>
            </Card>
          </Link>

          <Link href="/theming" className="group block h-full">
            <Card variant="elevated" className="p-8 sm:p-10 h-full hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-orange-500 hover:shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-300 shadow-sm">
                <span className="text-3xl">🎨</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-brand-text leading-tight">Multi-Brand Theming</h2>
              <p className="text-brand-text-light mb-8 text-base leading-relaxed">
                White-label theming system with CVA and CSS variables
              </p>
              <Button variant="primary" className="w-full py-3 text-base font-semibold">View Demo →</Button>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

