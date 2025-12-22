'use client';

import { useEffect } from 'react';
import { JSSONEditor } from '@/components/playground/editor';
import { OutputViewer } from '@/components/playground/output-viewer';
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
    <main className="flex-1 flex min-h-0 relative bg-grid">
      <div className="flex-1 min-w-0">
        <JSSONEditor
          value={code}
          onChange={(val) => setCode(val || '')}
          runCode={() => runCode(format)}
          metrics={metrics}
        />
      </div>

      {/* Vertical Dashed Separator */}
      <div className="w-px h-full border-r dashed-separator" />

      <div className="flex-1 min-w-0">
        <OutputViewer output={output} error={error} compilationTime={compilationTime} />
      </div>
    </main>
  );
}
