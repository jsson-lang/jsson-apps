interface Release {
    version: string;
    title: string;
    description: string;
    date: string;
    tag?: string;
    branch?: string;
}


export const releases: Release[] = [
    {
    version: "v0.0.6",
    title: "Unified Infrastructure & Server",
    description: "Introducing a built-in HTTP server for config serving, reusable Presets, and advanced custom format validation.",
    date: "In development",
    tag: "Coming soon",
    branch: "feat/jsson-v0.0.6",
  },
  {
    version: "v0.0.5.2",
    title: "Variable Arithmetic Fix",
    description: "Improved stability in mathematical operations and variable resolution.",
    date: "Dec 02, 2025",
    tag: "Latest",
  },
  {
    version: "v0.0.5.1",
    title: "Parser Bug Fixes",
    description: "Fixed chained ternary expressions, negative ranges, and error reporting.",
    date: "Nov 29, 2025",
  },
  {
    version: "v0.0.5",
    title: "Nested Logic Power-Up",
    description: "Massive updates to Maps, Ranges, and complex Logic generation.",
    date: "Nov 28, 2025",
  },
  {
    version: "v0.0.4",
    title: "Universal Meta-Format",
    description: "Multi-output support: JSON, YAML, TOML, and TypeScript exports.",
    date: "Nov 26, 2025",
  },
  {
    version: "v0.0.3",
    title: "Arrays in Objects",
    description: "Support for nested arrays within object properties and real-world templates.",
    date: "Nov 25, 2025",
  },
  {
    version: "v0.0.2",
    title: "Arithmetic & Logic",
    description: "Introduction of Variables, Comments, and simplified syntax.",
    date: "Nov 24, 2025",
  },
  {
    version: "v0.0.1",
    title: "Initial Release",
    description: "The birth of JSSON. Core parser and basic configuration logic.",
    date: "Nov 23, 2025",
  },
];