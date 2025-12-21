# JSSON

[![JSSON Banner](https://i.postimg.cc/yx4C3YqC/og.png)](https://postimg.cc/WFnHQVb5)

**JavaScript Simplified Object Notation** – A human-friendly syntax that transpiles to JSON, YAML, TOML, and TypeScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue)](https://marketplace.visualstudio.com/items?itemName=carlosedujs.jsson)

---

## Overview

This repository contains the official applications that power the JSSON ecosystem.  
It includes the website, documentation platform, and the online playground used for experimenting with the language.

These applications are separated from the core compiler to keep the language implementation isolated, stable, and maintainable.

---

## Contents

The repository is structured as follows:

- `www/`  
  Public-facing website for JSSON, including landing pages and product information.

- `docs/`  
  Documentation built with Next.js (Fumadocs), including guides, references, and LLM-optimized text exports.

- `playground/`  
  A web-based environment that allows users to write and transpile JSSON directly in the browser.

Additional applications may be added over time as the ecosystem evolves.

---

## Development

All applications inside this repository use modern web technologies such as:

- Next.js (App Router)
- Fumadocs
- TypeScript
- Tailwind CSS
- Vercel for deployments

Each application has its own configuration, environment variables (if needed), and build instructions.  
Refer to the respective folder's README for specific setup details.

---

## Contributing

Contributions to the apps are welcome.  
If you want to work on the compiler or the JSSON language itself, refer to the main repository instead:

https://github.com/jsson-lang/jsson

---

## License

This repository is licensed under the MIT License.
