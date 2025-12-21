"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "../../shared/code-block";
import { codeExamples } from "./examples";

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [outputFormat, setOutputFormat] = useState<
    "json" | "yaml" | "toml" | "typescript"
  >("json");

  const getOutput = (example: (typeof codeExamples)[0]) => {
    switch (outputFormat) {
      case "yaml":
        return example.yaml || example.json;
      case "toml":
        return example.toml || example.json;
      case "typescript":
        return example.typescript || example.json;
      default:
        return example.json;
    }
  };

  return (
    <section className="py-32 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">Universal Logic</h2>
            <p className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-8">
              Write Logic. <br />
              Get Config.
            </p>
            <p className="text-lg text-muted-foreground font-light mb-12 uppercase tracking-tight">
              JSSON brings power to your configuration. No more manual copying.
            </p>

            <div className="space-y-6">
              {[
                "Native variables & constants",
                "Arithmetic & Conditional Logic",
                "Templates & Maps for complex arrays",
                "Smart Ranges with steps",
                "Modular configuration (include)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-1.5 w-1.5 bg-foreground rotate-45 group-hover:rotate-90 transition-transform" />
                  <span className="text-sm font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border border-border/50 bg-muted/5 overflow-hidden relative group">
            
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">+</div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">+</div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">+</div>

            <div className="flex border-b border-border/50 bg-muted/10 overflow-x-auto">
              {codeExamples.map((example, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-colors border-r border-border/50 whitespace-nowrap",
                    activeTab === i
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted/30"
                  )}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50 divide-dashed">
              <div className="flex flex-col">
                <div className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-muted/20 border-b border-border/50 border-dashed">
                  Input JSSON
                </div>
                <div className="p-4 bg-background relative overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <CodeBlock code={codeExamples[activeTab].jsson} language="jsson" className="text-xs relative z-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="px-4 py-2 flex justify-between items-center bg-muted/20 border-b border-border/50 border-dashed">
                  <span className="text-[10px] font-black uppercase tracking-widest">Output</span>
                  <div className="flex gap-2">
                    {(["json", "yaml", "toml", "ts"] as const).map((format) => (
                      <button
                        key={format}
                        onClick={() => setOutputFormat(format === "ts" ? "typescript" : format)}
                        className={cn(
                          "text-[9px] font-black uppercase px-2 py-0.5 rounded-none transition-colors",
                          (outputFormat === "typescript" ? "ts" : outputFormat) === format
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-muted/50 border border-transparent hover:border-border/50"
                        )}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-muted/5 relative overflow-hidden">
                  <CodeBlock code={getOutput(codeExamples[activeTab])} language="json" className="text-xs opacity-80 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
