import {
  AtSign,
  Calculator,
  Copy,
  Database,
  FileJson,
  Flag,
  GitBranch,
  Globe,
  Grid3x3,
  Layers,
  LayoutTemplate,
  Map as MapIcon,
  Network,
  Server,
  Settings,
  ShoppingCart,
  Sparkles,
  Table,
  ToggleLeft,
  Users,
  Zap,
} from 'lucide-react';

interface Example {
  id: string;
  title: string;
  description: string;
  category: 'Basics' | 'Advanced' | 'Infrastructure' | 'Data' | 'Config';
  icon: React.ElementType;
  code: string;
}

export const EXAMPLES: Example[] = [
  {
    id: 'demo',
    title: 'Basic Structure',
    description: 'A minimal example showing core JSSON syntax.',
    category: 'Basics',
    icon: Zap,
    code: `profile {
  name = "Lucas"
  age = 27
  verified = false
  interests = [ "tech", "gaming", "fitness" ]

  preferences {
    theme = "light"
    notifications = true
  }
}`,
  },
  {
    id: 'template',
    title: 'Reusable Templates',
    description: 'Define structures once and reuse them across datasets.',
    category: 'Basics',
    icon: LayoutTemplate,
    code: `employees [
  template { name, age, department, salary }
  
  "Clara", 32, "HR", 4800
  "Renato", 28, "IT", 5200
  "Bianca", 35, "Finance", 6100
  "Diego", 24, "Marketing", 3900
]`,
  },

  {
    id: 'map-advanced',
    title: 'Mapping Logic',
    description: 'Apply inline transformations and computed fields.',
    category: 'Basics',
    icon: FileJson,
    code: `inventory [
  template { id, name, qty, category }

  map (item) = {
    id = "item-" + item.id
    name = item.name
    category = item.category
    qty = item.qty
    status = item.qty > 10 ? "in-stock" : "low-stock"
    isEssential = item.category == "food"
  }

  1, "Rice Pack", 25, "food"
  2, "Dish Soap", 8, "cleaning"
  3, "LED Lamp", 12, "electronics"
  4, "Coffee Beans", 6, "food"
]`,
  },

  {
    id: 'database',
    title: 'Database Settings',
    description: 'Readable and structured DB configuration.',
    category: 'Config',
    icon: Database,
    code: `db {
  engine = "postgres"
  host = "db.internal"
  port = 5432
  ssl = true
}`,
  },

  {
    id: 'user-gen',
    title: 'User Seeder',
    description: 'Automatically generate users based on ranges.',
    category: 'Data',
    icon: Users,
    code: `accounts [
  template { id, team }

  map (a) = {
    id = a.id
    username = "member_" + a.id
    email = a.id + "@example.org"
    team = a.team
    active = true
  }

  // Engineering team
  300..304, "engineering"

  // Design team
  400..402, "design"
]`,
  },

  {
    id: 'feature-flags',
    title: 'Environment Toggles',
    description: 'Simple and scalable feature toggle management.',
    category: 'Config',
    icon: Flag,
    code: `featureToggles [
  template { flag, env, value }

  map (f) = {
    key = f.flag + ":" + f.env
    enabled = f.value
    rollout = f.value == true ? 100 : 0
  }

  "beta-search", "prod", false
  "beta-search", "qa", true
  "beta-search", "dev", true

  "realtime-notify", "prod", true
  "realtime-notify", "qa", true
]`,
  },

  {
    id: 'k8s',
    title: 'Kubernetes Pods',
    description: 'Generate multiple environment deployment configs.',
    category: 'Infrastructure',
    icon: Server,
    code: `services [
  template { name, env, scale }

  map (svc) = {
    apiVersion = "apps/v1"
    kind = "Deployment"
    name = svc.name + "-" + svc.env
    replicas = svc.scale

    container = {
      image = "registry/" + svc.name + ":" + svc.env
      restartPolicy = "Always"
    }
  }

  "web", "prod", 4
  "web", "staging", 2
  "web", "dev", 1

  "jobs", "prod", 3
  "jobs", "staging", 1
]`,
  },

  {
    id: 'i18n',
    title: 'i18n Packs',
    description: 'Manage interface translations in multiple languages.',
    category: 'Config',
    icon: Globe,
    code: `translations [
  template { key, locale, text }

  map (t) = {
    key = t.key
    locale = t.locale
    value = t.text
  }

  "login.header", "en", "Welcome Back"
  "login.header", "pt", "Bem-vindo"
  "login.header", "fr", "Bienvenue"

  "btn.submit", "en", "Submit"
  "btn.submit", "pt", "Enviar"
  "btn.submit", "es", "Enviar"
]`,
  },

  {
    id: 'api-gateway',
    title: 'Gateway Routes',
    description: 'Conditional routing and dynamic API generation.',
    category: 'Infrastructure',
    icon: Settings,
    code: `apiRoutes [
  template { name, version, path }

  map (r) = {
    id = r.name + "-" + r.version
    fullPath = "/api/v" + r.version + "/" + r.path
    internalService = r.name + ".svc.local"
    secure = r.name != "status"
  }

  "auth", 1, "login"
  "auth", 2, "session"
  "payment", 1, "checkout"
  "status", 1, "ping"
]`,
  },

  {
    id: 'load-balancer',
    title: 'Load Balancer Config',
    description: 'Configure load balancers with health checks and routing.',
    category: 'Infrastructure',
    icon: Network,
    code: `backends [\n  template { name, port, weight }\n\n  map (b) = {\n    name = b.name\n    host = b.name + ".internal"\n    port = b.port\n    weight = b.weight\n    health_check = {\n      path = "/health"\n      interval = 30\n      timeout = 5\n      healthy_threshold = 2\n      unhealthy_threshold = 3\n    }\n    ssl = b.port == 443\n  }\n\n  "api-server-1", 8080, 100\n  "api-server-2", 8080, 100\n  "api-server-3", 8080, 50\n]

loadbalancer {
  algorithm = "round-robin"
  sticky_sessions = true
  timeout = 60
}`,
  },

  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline',
    description: 'Define deployment pipelines for multiple environments.',
    category: 'Infrastructure',
    icon: GitBranch,
    code: `pipeline [\n  template { stage, env, auto_deploy }\n\n  map (s) = {\n    name = s.stage + "-" + s.env\n    stage = s.stage\n    environment = s.env\n    auto_deploy = s.auto_deploy\n    \n    steps = s.stage == "build" ? [\n      "npm install",\n      "npm run build",\n      "npm test"\n    ] : s.stage == "deploy" ? [\n      "docker build",\n      "docker push",\n      "kubectl apply"\n    ] : ["echo done"]\n    \n    timeout = s.stage == "build" ? 600 : 300\n    retry = s.auto_deploy ? 3 : 1\n  }\n\n  "build", "dev", true\n  "deploy", "dev", true\n  "build", "staging", true\n  "deploy", "staging", false\n  "build", "prod", false\n  "deploy", "prod", false\n]`,
  },

  {
    id: 'monitoring-rules',
    title: 'Monitoring & Alerts',
    description: 'Configure monitoring rules and alert thresholds.',
    category: 'Infrastructure',
    icon: Settings,
    code: `alerts [\n  template { metric, threshold, severity }\n\n  map (a) = {\n    name = a.metric + "-alert"\n    metric = a.metric\n    threshold = a.threshold\n    severity = a.severity\n    \n    // Conditional notification channels\n    notify = a.severity == "critical" ? [\n      "pagerduty",\n      "slack",\n      "email"\n    ] : a.severity == "warning" ? [\n      "slack",\n      "email"\n    ] : ["email"]\n    \n    // Auto-scaling trigger\n    auto_scale = a.metric == "cpu" ? true : false\n    cooldown = 300\n  }\n\n  "cpu", 80, "warning"\n  "cpu", 95, "critical"\n  "memory", 85, "warning"\n  "disk", 90, "critical"\n  "latency", 1000, "warning"\n]`,
  },

  {
    id: 'geo',
    title: 'Geo Grid',
    description: 'Math-heavy dataset generation for geospatial apps.',
    category: 'Data',
    icon: MapIcon,
    code: `geoPoints [
  template { id, tag }

  map (g) = {
    id = "pt-" + g.id
    lat = -12.9000 + (g.id / 50) * 0.02
    lon = -38.3300 + (g.id % 50) * 0.02
    tag = g.tag
    type = "geo_point"
  }

  // Generate 120 points
  0..119, "zone-a"
]`,
  },
  {
    id: 'nested-maps-matrix',
    title: 'Matrix Generation',
    description: 'Generate 2D matrices using nested map transformations (> v0.0.5).',
    category: 'Data',
    icon: Grid3x3,
    code: `// Multiplication table using nested maps
table = (1..5 map (row) = (1..5 map (col) = row * col))

// Coordinate grid
grid = (0..2 map (y) = (0..2 map (x) = {
  x = x
  y = y
  id = y * 3 + x
}))`,
  },

  {
    id: 'product-variants',
    title: 'Product Variants',
    description: 'Generate all size/color combinations for e-commerce (> v0.0.5).',
    category: 'Data',
    icon: ShoppingCart,
    code: `// All product variants
products = (["S", "M", "L", "XL"] map (size) = (
  ["Black", "White", "Navy", "Gray"] map (color) = {
    sku = size + "-" + color
    size = size
    color = color
    price = 29.99
    inStock = true
  }
))`,
  },

  {
    id: 'nested-arrays',
    title: 'Nested Arrays',
    description: 'Multi-dimensional arrays and matrices (> v0.0.5).',
    category: 'Data',
    icon: Layers,
    code: `// 2D Matrix
matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]

// Permissions matrix
permissions = {
  admin = [
    [ "read", "write", "delete" ],
    [ "create", "update", "admin" ]
  ]
  user = [
    [ "read" ],
    [ "create", "update" ]
  ]
}`,
  },

  {
    id: 'large-scale-gen',
    title: 'Large-Scale Generation',
    description: 'Generate thousands of records effortlessly (> v0.0.5).',
    category: 'Data',
    icon: Sparkles,
    code: `// Generate 1000 test users
testUsers = (0..999 map (id) = {
  id = id
  username = "user_" + id
  email = "user" + id + "@test.com"
  active = (id % 2) == 0
  score = id * 10
  tier = id < 100 ? "bronze" : id < 500 ? "silver" : "gold"
})`,
  },
  {
    id: 'schedule-matrix',
    title: 'Schedule Matrix',
    description: 'Generate time slots for scheduling apps (> v0.0.5).',
    category: 'Data',
    icon: Table,
    code: `// Weekly schedule (7 days × 8 hours)
schedule = (["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] map (day) = (
  9..16 map (hour) = {
    day = day
    hour = hour
    slot = day + "-" + hour + "h"
    available = day != "Sat" && day != "Sun"
    price = day == "Sat" || day == "Sun" ? 150 : 100
  }
))`,
  },

  // ADVANCED EXAMPLES (v0.0.6)

  {
    id: 'ternary-chains',
    title: 'Ternary Chains',
    description: 'Complex nested ternary operators for conditional logic (v0.0.6).',
    category: 'Advanced',
    icon: Zap,
    code: `// Age-based categorization
age := 25

profile {
  age = age
  category = age < 13 ? "child" : age < 20 ? "teen" : age < 60 ? "adult" : "senior"
  discount = age > 60 ? 0.20 : age < 18 ? 0.15 : 0.05
  can_vote = age >= 18 ? "yes" : "no"
}

// Score-based grading
score := 85

result {
  score = score
  grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"
  passed = score >= 60 ? true : false
  message = score >= 90 ? "Excellent!" : score >= 70 ? "Good job!" : "Keep trying!"
}`,
  },

  {
    id: 'math-operations',
    title: 'Math Operations',
    description: 'Advanced arithmetic expressions and calculations (v0.0.6).',
    category: 'Advanced',
    icon: Calculator,
    code: `// Price calculations
base_price := 100
tax_rate := 0.21
discount := 0.10

pricing {
  base = base_price
  discount_amount = base_price * discount
  subtotal = base_price - (base_price * discount)
  tax = (base_price - (base_price * discount)) * tax_rate
  total = (base_price - (base_price * discount)) * (1 + tax_rate)
}

// Geometry calculations
radius := 5

circle {
  radius = radius
  diameter = radius * 2
  circumference = 2 * 3.14159 * radius
  area = 3.14159 * radius * radius
}

// Complex formula
a := 10
b := 20
c := 5

result = ((a + b) * c - 50) / 2 + (a * b) / (c + 1)`,
  },

  {
    id: 'string-interpolation',
    title: 'String Building',
    description: 'Complex string concatenation and formatting (v0.0.6).',
    category: 'Advanced',
    icon: FileJson,
    code: `// User profile generation
user_id := 1001
first_name := "John"
last_name := "Doe"
age := 28
department := "Engineering"

profile {
  id = user_id
  full_name = first_name + " " + last_name
  email = first_name + "." + last_name + "@company.com"
  username = first_name + last_name + user_id
  display = first_name + " " + last_name + " (" + age + ")"
  badge = "[" + department + "] " + first_name + " " + last_name
}

// URL building
api_version := "v2"
resource := "users"
action := "list"

endpoints {
  base = "https://api.example.com"
  full_path = "https://api.example.com/api/" + api_version + "/" + resource + "/" + action
  query = "/api/" + api_version + "/" + resource + "?action=" + action
}`,
  },

  {
    id: 'conditional-maps',
    title: 'Conditional Maps',
    description: 'Maps with complex conditional transformations (v0.0.6).',
    category: 'Advanced',
    icon: MapIcon,
    code: `// Tiered pricing with conditions
products [
  template { id, name, price, category }
  
  map (p) = {
    id = p.id
    name = p.name
    base_price = p.price
    category = p.category
    
    // Conditional discounts
    discount = p.price > 100 ? 0.15 : p.price > 50 ? 0.10 : 0.05
    final_price = p.price * (1 - (p.price > 100 ? 0.15 : p.price > 50 ? 0.10 : 0.05))
    
    // Category-based features
    free_shipping = p.category == "electronics" ? true : false
    warranty_years = p.category == "electronics" ? 2 : 1
    
    // Stock status
    status = p.price > 100 ? "premium" : "standard"
    badge = p.price > 100 ? "🌟 Premium" : p.price > 50 ? "✨ Popular" : "💰 Budget"
  }
  
  1, "Laptop", 999, "electronics"
  2, "Mouse", 29, "accessories"
  3, "Monitor", 299, "electronics"
  4, "Cable", 12, "accessories"
]`,
  },

  // ===== NEW v0.0.6 EXAMPLES =====

  {
    id: 'validators',
    title: 'Auto-Generate Data',
    description: 'Use validators to generate realistic test data (v0.0.6).',
    category: 'Data',
    icon: AtSign,
    code: `// Validators auto-generate valid data
user {
  id = @uuid
  email = @email
  website = @url
  created_at = @datetime
  birth_date = @date
}

server {
  ipv4 = @ipv4
  ipv6 = @ipv6
  config_file = @filepath
}

// Random numbers with ranges
player {
  id = @uuid
  age = @int(18, 65)
  score = @float(0.0, 100.0)
  premium = @bool
}`,
  },

  {
    id: 'presets',
    title: 'Reusable Presets',
    description: 'Define and reuse object templates with @preset (v0.0.6).',
    category: 'Config',
    icon: Copy,
    code: `// Define reusable presets
@preset "user_defaults" {
  role = "user"
  active = true
  permissions = ["read"]
}

@preset "admin_defaults" {
  role = "admin"
  active = true
  permissions = ["read", "write", "delete"]
}

// Use presets with overrides
users {
  john = @use "user_defaults" {
    name = "John Doe"
    email = "john@example.com"
  }
  
  admin = @use "admin_defaults" {
    name = "Admin"
    email = "admin@example.com"
    super_admin = true
  }
}`,
  },

  {
    id: 'boolean-literals',
    title: 'Boolean Literals',
    description: 'Multiple ways to express true/false (v0.0.6).',
    category: 'Config',
    icon: ToggleLeft,
    code: `// Standard booleans
settings {
  enabled = true
  disabled = false
}

// Yes/No style (great for configs)
features {
  dark_mode = yes
  analytics = no
}

// On/Off style (great for flags)
toggles {
  maintenance = off
  debug = on
  cache = yes
  logging = no
}

// Mix everything
app {
  production = yes
  ssl_enabled = on
  debug_mode = off
  beta_features = no
}`,
  },
];
