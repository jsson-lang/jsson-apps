'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Declare specific types for WASM/Go interaction
interface GoRunner {
  importObject: WebAssembly.Imports;
  run: (instance: WebAssembly.Instance) => Promise<void>;
}

declare global {
  interface Window {
    Go: {
      new (): GoRunner;
    };
    transpileJSSON: (input: string, format?: string) => { output?: string; error?: string };
  }
}

export function useTranspiler(initialCode: string = '') {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isTranspiling, setIsTranspiling] = useState(false);
  const [isWasmLoaded, setIsWasmLoaded] = useState(false);
  const [compilationTime, setCompilationTime] = useState<number | null>(null);
  const goRef = useRef<GoRunner | null>(null);

  // Load WASM
  useEffect(() => {
    const loadWasm = async () => {
      try {
        if (!window.Go) {
          // Load wasm_exec.js dynamically if not present
          const script = document.createElement('script');
          script.src = '/wasm_exec.js';
          script.async = true;
          script.onload = async () => {
            await initGo();
          };
          document.body.appendChild(script);
        } else {
          await initGo();
        }
      } catch (err) {
        console.error('Failed to load WASM:', err);
        setError('Failed to load JSSON compiler');
      }
    };

    const initGo = async () => {
      if (goRef.current) return;

      const go = new window.Go();
      goRef.current = go;

      const result = await WebAssembly.instantiateStreaming(fetch('/jsson.wasm'), go.importObject);

      go.run(result.instance);
      setIsWasmLoaded(true);
    };

    loadWasm();
  }, []);

  const transpile = useCallback(
    (sourceCode: string, format: string = 'json') => {
      if (!isWasmLoaded) return;

      setIsTranspiling(true);
      setError(null);

      try {
        setTimeout(() => {
          if (window.transpileJSSON) {
            const startTime = performance.now();
            const result = window.transpileJSSON(sourceCode, format);
            const endTime = performance.now();
            const elapsed = endTime - startTime;

            setCompilationTime(elapsed);

            if (result.error) {
              setError(result.error);
            } else {
              setOutput(result.output || '');
            }
          }
          setIsTranspiling(false);
        }, 10);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Transpilation failed';
        setError(message);
        setIsTranspiling(false);
      }
    },
    [isWasmLoaded],
  );

  const runCode = useCallback(
    (format: string = 'json') => {
      transpile(code, format);
    },
    [transpile, code],
  );

  const metrics = {
    lines: code.split('\n').length,
    chars: code.length,
    tokens: Math.ceil(code.length / 3.5),
  };

  return {
    code,
    setCode,
    output,
    error,
    isTranspiling,
    isWasmLoaded,
    compilationTime,
    runCode,
    metrics,
  };
}
