'use client';

import Editor from '@monaco-editor/react';
import { Copy, Download } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { toastManager } from '@/components/ui/toast';
import { usePlaygroundContext } from '@/contexts/playground-context';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface OutputViewerProps {
  output: string;
  error?: string | null;
  compilationTime?: number | null;
}

const structuredFormats = [
  {
    value: 'json',
    label: 'JSON',
  },
  {
    value: 'yaml',
    label: 'YAML',
  },
  {
    value: 'toml',
    label: 'TOML',
  },
];
const typedFormats = [
  {
    value: 'ts',
    label: 'TypeScript',
  },
];

export function OutputViewer({ output, error, compilationTime }: OutputViewerProps) {
  const { format, setFormat, setOutput: setContextOutput } = usePlaygroundContext();

  function approxTokens(text: string) {
    if (!text) return 0;

    return Math.ceil(text.length / 3.5);
  }

  // Map format to Monaco language
  function getMonacoLanguage(format: string): string {
    const languageMap: Record<string, string> = {
      json: 'json',
      yaml: 'yaml',
      toml: 'ini',
      ts: 'typescript',
    };
    return languageMap[format] || 'json';
  }

  useEffect(() => {
    setContextOutput(output);
  }, [output, setContextOutput]);

  const displayError = error;

  const metrics = useMemo(() => {
    if (!output) {
      return {
        lines: 0,
        chars: 0,
        tokens: 0,
      };
    }

    return {
      lines: output.split('\n').length,
      chars: output.length,
      tokens: approxTokens(output),
    };
  }, [output]);

  useEffect(() => {}, [format]);

  function generateDownload() {
    try {
      const blob = new Blob([output], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `output.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toastManager.add({
        title: 'Downloaded!',
        description: 'Output downloaded.',
        type: 'success',
      });
    } catch (error) {
      toastManager.add({
        title: 'Error',
        description: 'Failed to download output.',
        type: 'error',
      });
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(output);
    toastManager.add({
      title: 'Copied!',
      description: 'Output copied to clipboard.',
    });
  }

  function formatTime(ms: number): string {
    if (ms < 1) return `${(ms * 1000).toFixed(0)}µs`;
    if (ms < 1000) return `${ms.toFixed(2)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  }

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-background relative">
      <div className="flex items-center justify-between px-4 sm:px-6 h-12 border-b dashed-separator relative z-10">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            output.{format}
          </span>
          <Select
            aria-label="Select Output Format"
            value={format}
            items={[...structuredFormats, ...typedFormats]}
            onValueChange={(value) => value !== null && setFormat(value)}
          >
            <SelectTrigger className="h-7 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider border-border bg-background hover:bg-foreground hover:text-background transition-colors px-2 sm:px-3 min-w-[80px] sm:min-w-[100px] border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectGroupLabel className="text-[9px] font-bold uppercase tracking-wider">
                  Structured
                </SelectGroupLabel>
                {structuredFormats.map((fmt) => (
                  <SelectItem
                    key={fmt.value}
                    value={fmt.value}
                    className="text-[10px] uppercase font-bold"
                  >
                    {fmt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectGroupLabel className="text-[9px] font-bold uppercase tracking-wider">
                  Typed
                </SelectGroupLabel>
                {typedFormats.map((fmt) => (
                  <SelectItem
                    key={fmt.value}
                    value={fmt.value}
                    className="text-[10px] uppercase font-bold"
                  >
                    {fmt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            disabled={!output}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider hover:bg-foreground hover:text-background px-2 sm:px-3 h-7 sm:h-8"
          >
            <Copy className="h-3 w-3 sm:mr-2" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
          <Button
            size="sm"
            disabled={!output}
            onClick={generateDownload}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary px-3 sm:px-4 border border-foreground transition-all h-7 sm:h-8"
          >
            <Download className="h-3 w-3 sm:mr-2" />
            <span className="hidden sm:inline">Export</span>
            <span className="sm:hidden">Save</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative bg-grid">
        {displayError ? (
          <div className="p-8 text-red-500 font-mono text-sm uppercase leading-relaxed max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-black tracking-widest text-xs">Compilation Error</span>
            </div>
            {displayError}
          </div>
        ) : (
          <Editor
            height="100%"
            language={getMonacoLanguage(format)}
            theme="jsson-dark"
            value={output}
            options={{
              readOnly: true,
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'var(--font-google-sans-code), monospace',
              padding: { top: 24 },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              lineNumbers: 'on',
              renderLineHighlight: 'none',
              scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
            }}
          />
        )}
      </div>

      <div className="flex items-center justify-between px-6 py-2 border-t dashed-separator relative z-10 bg-muted/5 select-none">
        <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70">
          <div className="flex items-center gap-2">
            <span>LN</span>
            <span className="font-mono text-muted-foreground">{metrics.lines}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>CH</span>
            <span className="font-mono text-muted-foreground">{metrics.chars}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>TK</span>
            <span className="font-mono text-muted-foreground">~{approxTokens(output)}</span>
          </div>
        </div>
        {compilationTime !== null && (
          <div className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider flex items-center gap-2">
            <div className="h-1 w-1 rounded-none bg-emerald-500" />
            Compiled in {formatTime(compilationTime!)}
          </div>
        )}
      </div>
    </div>
  );
}
