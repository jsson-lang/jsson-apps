# JUST FUCKING USE JSSON

## The Problem
JSON is verbose. YAML is confusing. TOML is boring. Writing configurations sucks:

```json
{
  "users": [
    { "name": "João", "age": 19 },
    { "name": "Maria", "age": 25 }
  ],
  "ports": [8080, 8081, 8082]
}
```

## The Solution (JSSON)
```jsson
users [
  template { name, age }
  
  João, 19
  Maria, 25
]

ports = 8080..8082
```

**Same output. Much less bullshit.**

---

## Why JSSON?

| Problem | Solution |
|----------|---------|
| Quotes everywhere | No quotes in keys |
| Missing commas | Optional commas |
| Repeated data | Templates + Variables |
| Manual ranges | Auto-ranges (1..100) |
| Scattered configs | Clean include system |
| Crap copy-paste | Map transformations |

---

## What You Can Do

### Templates & Ranges
```jsson
// 1000 users in 3 lines
users [
  template { id, email, active }
  0..999, "user{id}@test.com", true
]
```

### Transformations
```jsson
products = (["S", "M", "L"] map (size) = (
  ["Red", "Blue"] map (color) = {
    sku = size + "-" + color
    price = 29.99
  }
))
// 6 automatic combinations
```

### Multiple Formats
```bash
jsson -i config.jsson              # → JSON
jsson -i config.jsson -f yaml      # → YAML
jsson -i config.jsson -f toml      # → TOML
jsson -i config.jsson -f ts        # → TypeScript
```

### Schema Validation (v0.0.6 coming soon)
- Support for JSON Schema, YAML Schema, and TOML Schema.
- Native validators: `identifier`, `kebab-case`, `snake_case`, `camelCase`, `PascalCase`, `semver`, `duration`, `hex-color`, `port`, `env-var`.

```bash
jsson -i config.jsson -schema schema.json -validate-only
```

### Presets & Inheritance (v0.0.6 coming soon)
The `@preset` and `@use` system allows creating reusable config blocks with override support — a game changer for infrastructure and DevOps.

```jsson
@preset "api-defaults" {
  timeout = 30
  retries = 3
  cache = true
}

// Elegant reuse with override
prod_api = @use "api-defaults" { 
  timeout = 60 
}
```

---

## Use Cases

- **Database Seeding** - Generating 100k records without copy-pasting
- **Kubernetes Configs** - Deploy specs for 50 microservices in one line
- **E-commerce** - 500 product variants automatically
- **Geo Data** - Millions of coordinates efficiently
- **i18n** - Structured and organized translations
- **CI/CD** - YAML pipelines that don't give you a headache

---

## Quick Start

### Install
```bash
go install github.com/jsson-lang/jsson/cmd/jsson@latest
# or download from releases
```

### Use
```bash
echo 'app { name = "MyApp", version = "1.0.0", ports = 3000..3005 }' | jsson
```

### Output
```json
{
  "app": {
    "name": "MyApp",
    "version": "1.0.0",
    "ports": [3000, 3001, 3002, 3003, 3004, 3005]
  }
}
```

---

## More Features

✨ **Syntax Highlighting** - VS Code Extension  
🚀 **Streaming** - Transpile 100k+ items without memory overhead  
➗ **Full Arithmetic** - Complete support for `+`, `-`, `*`, `/`, `%`  
❓ **Ternary** - Conditional logic `condition ? true : false`  
💾 **Variable System** - Declare once, use everywhere  

### And the v0.0.6 Ecosystem:
🔗 **HTTP Server** - Use as a microservice (`jsson serve`) with transpile/validation endpoints  
📖 **LSP Support** - Full IDE integration (Autocomplete, Hover, Go to Definition)  
🛠️ **Public API** - Use JSSON's core directly in your Go code via `pkg/`

---

## The Bottom Line

**Write 80% less config. Get the same result. Sleep better at night.**

### Links
- 📚 [Docs](https://docs.jssonlang.tech/)
- 💻 [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=carlosedujs.jsson)
- 🐙 [GitHub](https://github.com/jsson-lang/jsson)

---

**Made with ❤️ by [Carlos Eduardo](https://github.com/carlosedujs)**