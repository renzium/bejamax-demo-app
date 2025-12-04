"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function PerformancePage() {
  const [uiStatus, setUiStatus] = useState<"idle" | "frozen" | "responsive">(
    "idle"
  );
  const [result, setResult] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  // Heavy computation that blocks the main thread
  const runSlowTask = () => {
    setIsRunning(true);
    setUiStatus("frozen");
    setResult("");

    const startTime = performance.now();

    // Heavy computation - blocks main thread
    let sum = 0;
    for (let i = 0; i < 2000000000; i++) {
      sum += i;
    }

    const endTime = performance.now();
    const duration = endTime - startTime;

    setResult(
      `Computation completed in ${duration.toFixed(2)}ms. UI was frozen during this time.`
    );
    setUiStatus("idle");
    setIsRunning(false);
  };

  // Same computation but in a Web Worker (non-blocking)
  const runSlowTaskWithWorker = () => {
    setIsRunning(true);
    setUiStatus("responsive");
    setResult("");

    const startTime = performance.now();

    // Create inline Web Worker for Next.js compatibility
    const workerCode = `
      self.onmessage = function (e) {
        const { iterations } = e.data;
        const startTime = performance.now();
        
        let result = 0;
        for (let i = 0; i < iterations; i++) {
          result += i;
        }
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        self.postMessage({
          result,
          duration,
          message: \`Computation completed in \${duration.toFixed(2)}ms\`,
        });
      };
    `;

    const blob = new Blob([workerCode], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));

    worker.postMessage({ iterations: 2000000000 });

    worker.onmessage = (e) => {
      const { duration } = e.data;
      const totalDuration = performance.now() - startTime;

      setResult(
        `Computation completed in ${duration.toFixed(2)}ms. UI remained responsive! Total time: ${totalDuration.toFixed(2)}ms`
      );
      setUiStatus("idle");
      setIsRunning(false);
      worker.terminate();
      URL.revokeObjectURL(blob);
    };

    worker.onerror = (error) => {
      setResult(`Worker error: ${error.message}`);
      setUiStatus("idle");
      setIsRunning(false);
      worker.terminate();
      URL.revokeObjectURL(blob);
    };
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-brand-primary hover:text-brand-primary-dark font-medium mb-6 inline-flex items-center gap-2 transition-colors">
          ← Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Performance Debugging Demo
          </h1>
          <p className="text-xl text-brand-text-light">
            Compare blocking vs non-blocking heavy computations. Open Chrome
            DevTools Performance tab to see the difference!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card variant="elevated" className="p-6 border-red-200 bg-red-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-brand-text">Blocking Task</h2>
            </div>
            <p className="text-brand-text-light mb-4">
              This runs heavy computation on the main thread, blocking the UI
            </p>
            <Button onClick={runSlowTask} disabled={isRunning} className="w-full">
              Run Slow Task (Blocks UI)
            </Button>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm font-mono">
                {`for (let i = 0; i < 2000000000; i++) {}`}
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-6 border-green-200 bg-green-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-brand-text">Web Worker Task</h2>
            </div>
            <p className="text-brand-text-light mb-4">
              Same computation runs in a Web Worker, keeping UI responsive
            </p>
            <Button
              onClick={runSlowTaskWithWorker}
              disabled={isRunning}
              variant="primary"
              className="w-full"
            >
              Run Slow Task with WebWorker
            </Button>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm font-mono">
                Worker runs computation in separate thread
              </p>
            </div>
          </Card>
        </div>

        <Card variant="elevated" className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">UI Status</h2>
          <div className="flex items-center gap-4">
            <div
              className={`w-4 h-4 rounded-full ${
                uiStatus === "frozen"
                  ? "bg-red-500 animate-pulse"
                  : uiStatus === "responsive"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
            <span className="text-lg font-semibold">
              {uiStatus === "frozen"
                ? "UI Frozen - Try clicking or interacting!"
                : uiStatus === "responsive"
                ? "UI Responsive - You can still interact!"
                : "Idle"}
            </span>
          </div>
        </Card>

        <Card variant="elevated" className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Result</h2>
          <div className="min-h-[100px]">
            {result ? (
              <p className="text-lg">{result}</p>
            ) : (
              <p className="text-gray-400 italic">
                Click a button above to run a computation
              </p>
            )}
          </div>
        </Card>

        <Card variant="elevated" className="p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Debugging Tips</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              • Open Chrome DevTools → Performance tab → Record → Run task →
              Stop
            </li>
            <li>
              • Look for long tasks (red bars) in the main thread timeline
            </li>
            <li>
              • Use Lighthouse to identify performance bottlenecks
            </li>
            <li>
              • Web Workers show up as separate threads in the performance
              profiler
            </li>
            <li>
              • Use React DevTools Profiler for React-specific performance
              analysis
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

