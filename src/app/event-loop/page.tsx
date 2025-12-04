"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface LogEntry {
  message: string;
  source: "call-stack" | "microtask" | "macrotask";
  timestamp: number;
}

export default function EventLoopPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const clearLogs = () => {
    setLogs([]);
  };

  const runDemo = () => {
    setIsRunning(true);
    setLogs([]);

    // This demonstrates the event loop execution order
    const newLogs: LogEntry[] = [];
    const addLog = (message: string, source: LogEntry["source"]) => {
      newLogs.push({
        message,
        source,
        timestamp: Date.now(),
      });
      setLogs([...newLogs]);
    };

    // Synchronous - goes to call stack immediately
    console.log("A");
    addLog("A", "call-stack");

    // Promise.resolve() creates a microtask
    Promise.resolve().then(() => {
      console.log("B");
      addLog("B", "microtask");
    });

    // setTimeout creates a macrotask
    setTimeout(() => {
      console.log("C");
      addLog("C", "macrotask");
      setIsRunning(false);
    }, 0);

    // Synchronous - goes to call stack immediately
    console.log("D");
    addLog("D", "call-stack");

    // After synchronous code completes, microtasks run, then macrotasks
  };

  const getSourceColor = (source: LogEntry["source"]) => {
    switch (source) {
      case "call-stack":
        return "bg-blue-50 text-blue-900 border-blue-200 shadow-sm";
      case "microtask":
        return "bg-green-50 text-green-900 border-green-200 shadow-sm";
      case "macrotask":
        return "bg-purple-50 text-purple-900 border-purple-200 shadow-sm";
    }
  };

  const getSourceLabel = (source: LogEntry["source"]) => {
    switch (source) {
      case "call-stack":
        return "Call Stack";
      case "microtask":
        return "Microtask Queue";
      case "macrotask":
        return "Macrotask Queue";
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-brand-primary hover:text-brand-primary-dark font-medium mb-6 inline-flex items-center gap-2 transition-colors">
          ← Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            JavaScript Event Loop Demo
          </h1>
          <p className="text-xl text-brand-text-light">
            Visual demonstration of JavaScript concurrency, call stack, microtask
            queue, and macrotask queue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card variant="elevated" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Demo Code</h2>
            <pre className="bg-gradient-to-br from-gray-900 to-gray-800 text-green-400 p-6 rounded-xl overflow-x-auto text-sm shadow-xl border border-gray-700">
              <code>{`console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");`}</code>
            </pre>
            <p className="mt-4 text-sm text-brand-text-light">
              <strong className="text-brand-text">Expected Output:</strong> A, D, B, C
            </p>
            <div className="mt-4 flex gap-2">
              <Button onClick={runDemo} disabled={isRunning}>
                Run Demo
              </Button>
              <Button variant="outline" onClick={clearLogs}>
                Clear Logs
              </Button>
            </div>
          </Card>

          <Card variant="elevated" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-800">Call Stack</h3>
                <p className="text-sm text-gray-600">
                  Synchronous code executes immediately in the call stack
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Microtask Queue</h3>
                <p className="text-sm text-gray-600">
                  Promises, queueMicrotask() - executed after call stack is empty,
                  before macrotasks
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">
                  Macrotask Queue
                </h3>
                <p className="text-sm text-gray-600">
                  setTimeout, setInterval, I/O - executed after microtasks
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card variant="elevated" className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Execution Log</h2>
          <div className="space-y-2 min-h-[200px]">
            {logs.length === 0 ? (
              <p className="text-brand-text-light italic text-center py-8">No logs yet. Click "Run Demo" to start.</p>
            ) : (
              logs.map((log, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] ${getSourceColor(log.source)}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold">{log.message}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/50">
                      {getSourceLabel(log.source)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

