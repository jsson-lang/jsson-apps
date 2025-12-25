'use client';

import { Code2, Terminal } from 'lucide-react';
import { useEffect } from 'react';
import { JSSONEditor } from '@/components/playground/editor';
import { OutputViewer } from '@/components/playground/output-viewer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePlaygroundContext } from '@/contexts/playground-context';
import { useTranspiler } from '@/hooks/use-transpiler';

const DEFAULT_CODE = `// Welcome to the JSSON Playground!
// Try editing this code to see the magic happen.

server {
  port = 8080
  host = "localhost"
  debug = true
  
  // Database configuration
  database {
    type = "postgres"
    url = "postgres://user:pass@localhost:5432/db"
  }
}

// Generate some users
users [
  template { id, name, role }
  
  map (u) = {
    id = u.id
    name = u.name
    role = u.role
    active = true
  }
  
  1, "Alice", "admin"
  2, "Bob", "user"
  3, "Charlie", "user"
]`;

export default function MainPlayground() {
  const { code, setCode, output, error, compilationTime, runCode, metrics } =
    useTranspiler(DEFAULT_CODE);
  const { setJssonCode, format } = usePlaygroundContext();

  useEffect(() => {
    setJssonCode(code);
  }, [code, setJssonCode]);

  // Auto-transpile when format changes
  useEffect(() => {
    if (code) {
      runCode(format);
    }
  }, [format]);

  return (
    <main className="flex-1 flex flex-col lg:flex-row min-h-0 relative bg-grid">
      {/* Mobile Tabs Wrapper */}
      <div className="flex lg:hidden flex-col flex-1 min-h-0">
        <Tabs defaultValue="editor" className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 overflow-hidden">
            <TabsContent value="editor" className="h-full m-0 p-0 outline-none flex flex-col">
              <JSSONEditor
                value={code}
                onChange={(val) => setCode(val || '')}
                runCode={() => runCode(format)}
                metrics={metrics}
              />
            </TabsContent>
            <TabsContent value="output" className="h-full m-0 p-0 outline-none flex flex-col">
              <OutputViewer output={output} error={error} compilationTime={compilationTime} />
            </TabsContent>
          </div>

          <div className="h-14 border-t border-border bg-background px-4 flex items-center justify-center shrink-0">
            <TabsList className="grid w-full max-w-xs grid-cols-2 h-9 p-1 bg-muted/30">
              <TabsTrigger
                value="editor"
                className="text-[10px] font-black uppercase tracking-widest gap-2"
              >
                <Code2 className="h-3 w-3" />
                Editor
              </TabsTrigger>
              <TabsTrigger
                value="output"
                className="text-[10px] font-black uppercase tracking-widest gap-2"
              >
                <Terminal className="h-3 w-3" />
                Output
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      {/* Desktop Side-by-Side Layout */}
      <div className="hidden lg:flex flex-1 min-w-0">
        <div className="flex-1 min-w-0">
          <JSSONEditor
            value={code}
            onChange={(val) => setCode(val || '')}
            runCode={() => runCode(format)}
            metrics={metrics}
          />
        </div>

        {/* Vertical Dashed Separator */}
        <div className="w-px h-full border-r dashed-separator shrink-0" />

        <div className="flex-1 min-w-0">
          <OutputViewer output={output} error={error} compilationTime={compilationTime} />
        </div>
      </div>
    </main>
  );
}
