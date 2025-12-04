// Web Worker for heavy computation
// This runs in a separate thread and doesn't block the main thread

self.onmessage = function (e) {
  const { iterations } = e.data;

  const startTime = performance.now();

  // Heavy computation
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += i;
  }

  const endTime = performance.now();
  const duration = endTime - startTime;

  // Send result back to main thread
  self.postMessage({
    result,
    duration,
    message: `Computation completed in ${duration.toFixed(2)}ms`,
  });
};

