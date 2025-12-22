'use client';

import Editor, { type OnMount, useMonaco } from '@monaco-editor/react';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import ExamplesSheet from './examples';

interface JSSONEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  runCode: () => void;
  metrics: {
    lines: number;
    chars: number;
    tokens: number;
  };
}

export function JSSONEditor({ value, onChange, runCode, metrics }: JSSONEditorProps) {
  const monaco = useMonaco();
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const [cursorPos, setCursorPos] = useState({ ln: 1, col: 1 });

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;

    editor.onDidChangeCursorPosition((e) => {
      setCursorPos({
        ln: e.position.lineNumber,
        col: e.position.column,
      });
    });
  };

  useEffect(() => {
    if (monaco) {
      monaco.languages.register({ id: 'jsson' });

      monaco.languages.setMonarchTokensProvider('jsson', {
        keywords: ['include', 'template', 'map', 'step'],
        constants: ['true', 'false', 'null'],

        tokenizer: {
          root: [
            // Comments
            [/\/\/.*$/, 'comment'],

            // Keywords
            [/\b(include|template|map|step)\b/, 'keyword'],

            // Booleans and null
            [/\b(true|false|null)\b/, 'constant.language'],

            // Strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-terminated string
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

            // Numbers (floats first, then integers)
            [/\d+\.\d+/, 'number.float'],
            [/\d+/, 'number'],

            // Range operator
            [/\.\./, 'keyword.operator.range'],

            // Member access
            [/\./, 'keyword.operator.member'],

            // Arithmetic operators
            [/[+\-*/%]/, 'keyword.operator.arithmetic'],

            // Comparison operators
            [/[<>]=?|[!=]=/, 'keyword.operator.comparison'],

            // Ternary operators
            [/[?:]/, 'keyword.operator.ternary'],

            // Assignment
            [/=/, 'keyword.operator.assignment'],

            // Identifiers (variables and keys)
            [/[a-zA-Z_][a-zA-Z0-9_]*/, 'identifier'],

            // Delimiters
            [/[{}]/, '@brackets'],
            [/[[\]]/, '@brackets'],
            [/[()]/, '@brackets'],
            [/,/, 'delimiter.comma'],
          ],

          string: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
          ],
        },
      });

      monaco.editor.defineTheme('jsson-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
          { token: 'keyword', foreground: 'C586C0', fontStyle: 'bold' },
          { token: 'constant.language', foreground: '569CD6' },
          { token: 'string', foreground: 'CE9178' },
          { token: 'string.escape', foreground: 'D7BA7D' },
          { token: 'number', foreground: 'B5CEA8' },
          { token: 'number.float', foreground: 'B5CEA8' },
          { token: 'keyword.operator', foreground: 'D4D4D4' },
          { token: 'identifier', foreground: '9CDCFE' },
          { token: 'delimiter', foreground: 'D4D4D4' },
        ],
        colors: {
          'editor.background': '#000000',
          'editor.foreground': '#D4D4D4',
          'editorLineNumber.foreground': '#444444',
          'editor.selectionBackground': '#264F78',
          'editor.inactiveSelectionBackground': '#3A3D41',
          'editorIndentGuide.background': '#222222',
          'editorIndentGuide.activeBackground': '#444444',
        },
      });

      // Set theme
      monaco.editor.setTheme('jsson-dark');
    }
  }, [monaco]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'r') {
        runCode();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [runCode]);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-background relative">
      <div className="flex items-center justify-between px-6 h-12 border-b dashed-separator relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          input.jsson
        </span>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange('')}
            className="text-[10px] font-bold uppercase tracking-wider hover:text-destructive transition-colors"
          >
            Clear
          </Button>
          <ExamplesSheet onSelect={(code) => onChange(code)} />
          <Button
            onClick={runCode}
            size="sm"
            className="text-[10px] font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary transition-all flex items-center gap-2 px-4 h-8"
          >
            <Play className="h-3 w-3 fill-current" />
            Run
            <div className="hidden sm:flex items-center gap-1 opacity-40 ml-2">
              <span className="border border-background/20 rounded-none px-1 min-w-[1.2rem] text-center text-[8px]">
                CTRL
              </span>
              <span className="border border-background/20 rounded-none px-1 min-w-[1.2rem] text-center text-[8px]">
                ALT
              </span>
              <span className="border border-background/20 rounded-none px-1 min-w-[1.2rem] text-center text-[8px]">
                R
              </span>
            </div>
          </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative bg-grid">
        <Editor
          height="100%"
          defaultLanguage="jsson"
          theme="jsson-dark"
          value={value}
          onChange={onChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'var(--font-google-sans-code), monospace',
            padding: { top: 24 },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>

      <div className="flex items-center justify-between px-6 py-2 border-t dashed-separator relative z-10 bg-muted/5 select-none">
        <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70">
          <div className="flex items-center gap-2">
            <span>LN</span>
            <span className="font-mono text-muted-foreground">{cursorPos.ln}</span>
            <span className="opacity-30">/</span>
            <span>COL</span>
            <span className="font-mono text-muted-foreground">{cursorPos.col}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>CH</span>
            <span className="font-mono text-muted-foreground">{metrics.chars}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>TK</span>
            <span className="font-mono text-muted-foreground">~{metrics.tokens}</span>
          </div>
        </div>
        <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-500/50 flex items-center gap-2">
          <div className="h-1 w-1 rounded-none bg-emerald-500 animate-pulse" />
          Engine Ready
        </div>
      </div>
    </div>
  );
}
