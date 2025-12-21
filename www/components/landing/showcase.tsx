"use client";

import { Grid3x3, ShoppingCart, Sparkles, Route, Calendar, ToggleLeft } from "lucide-react";
import { CodeBlock } from "../shared/code-block";
import { cn } from "@/lib/utils";
import DecoratorsGrid from "@/components/shared/decorators-grid";

const showcaseItems = [
  {
    icon: Grid3x3,
    title: "Nested Maps",
    subtitle: "Matrix Generation",
    badge: "25 numbers / 1 line",
    code: `// Multiplication table 5x5
rows := 5
cols := 5

table = (1..rows map (row) = (
  1..cols map (col) = row * col
))`,
    visual: (
      <div className="grid grid-cols-5 gap-1 p-8">
        {Array.from({ length: 25 }, (_, i) => {
          const row = Math.floor(i / 5) + 1;
          const col = (i % 5) + 1;
          return (
            <div
              key={i}
              className="aspect-square flex items-center justify-center bg-muted rounded text-[10px] font-mono font-bold"
            >
              {row * col}
            </div>
          );
        })}
      </div>
    ),
  },
  {
    icon: ShoppingCart,
    title: "Product Variants",
    subtitle: "E-commerce Power",
    badge: "6 variants auto",
    code: `products = (["S", "M", "L"] map (size) = (
  ["Red", "Blue"] map (color) = {
    sku = size + "-" + color
    price = 29.99
  }
))`,
    visual: (
      <div className="grid grid-cols-2 gap-2 p-8">
        {["S", "L"].map((size) =>
          ["Red", "Blue"].map((color) => {
            return (
              <div
                key={`${size}-${color}`}
                className="p-3 rounded border border-border bg-background"
              >
                <div className="text-[10px] font-bold uppercase tracking-tighter mb-1">
                  {size}-{color}
                </div>
                <div className="text-[10px] text-muted-foreground">$29.99</div>
              </div>
            );
          })
        )}
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: "Massive Generation",
    subtitle: "Large Datasets",
    badge: "1,000 records",
    code: `totalUsers := 1000
users = (0..(totalUsers - 1) map (id) = {
  id = id
  username = "user_" + id
  tier = id < 100 ? "bronze" : "silver"
})`,
    visual: (
      <div className="flex flex-col items-center justify-center p-8 space-y-2">
        <div className="text-6xl font-black tracking-tighter uppercase">
          1k
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          Records Generated
        </div>
      </div>
    ),
  },
  {
    icon: Route,
    title: "API Endpoints",
    subtitle: "Route Generation",
    badge: "Full CRUD",
    code: `resources := ["users", "posts", "comments"]
methods := ["GET", "POST", "PUT", "DELETE"]

routes = (resources map (r) = (
  methods map (m) = {
    path = "/api/" + r
    method = m
  }
))`,
    visual: (
      <div className="flex flex-col gap-1 p-8">
        {["GET", "POST", "PUT", "DEL"].map((method) => (
          <div key={method} className="flex items-center gap-2 text-[10px] font-mono">
            <span className={cn(
              "px-1.5 py-0.5 rounded font-bold text-background",
              method === "GET" ? "bg-emerald-500" :
              method === "POST" ? "bg-blue-500" :
              method === "PUT" ? "bg-amber-500" : "bg-red-500"
            )}>{method}</span>
            <span className="text-muted-foreground">/api/users</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Calendar,
    title: "Schedule Slots",
    subtitle: "Time Generation",
    badge: "24 slots / 3 lines",
    code: `startHour := 9
endHour := 17
slotMinutes := 30

slots = (startHour..endHour map (h) = (
  [0, slotMinutes] map (m) = h + ":" + m
))`,
    visual: (
      <div className="grid grid-cols-4 gap-1 p-8">
        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"].map((time) => (
          <div key={time} className="text-[9px] font-mono text-center p-1 bg-muted rounded">
            {time}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: ToggleLeft,
    title: "Feature Flags",
    subtitle: "Conditional Config",
    badge: "Env-aware",
    code: `env := "production"

features = {
  darkMode = true
  betaFeatures = env != "production"
  maxUpload = env == "dev" ? 100 : 10
  analytics = env == "production"
}`,
    visual: (
      <div className="flex flex-col gap-2 p-8">
        {[
          { name: "darkMode", on: true },
          { name: "beta", on: false },
          { name: "analytics", on: true },
        ].map((flag) => (
          <div key={flag.name} className="flex items-center justify-between text-[10px]">
            <span className="font-bold uppercase">{flag.name}</span>
            <span className={cn(
              "px-1.5 py-0.5 rounded font-black text-[9px]",
              flag.on ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
            )}>{flag.on ? "ON" : "OFF"}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function Showcase() {
  return (
    <section className="py-32 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">Showcase</h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase max-w-2xl">
            Powerhouse data generation. Zero repetition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border border-border/50 relative">
          <DecoratorsGrid />

          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-border/50 bg-muted/5 overflow-hidden group"
            >
              <div className="p-8 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold uppercase tracking-tight">{item.title}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-foreground text-background rounded">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.subtitle}</p>
              </div>  

              <div className="p-4 bg-muted/10 font-mono text-xs">
                <CodeBlock code={item.code} language="jsson" className="bg-transparent" />
              </div>

              <div className="mt-auto border-t border-border/50 bg-background/50 uppercase">
                {item.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
