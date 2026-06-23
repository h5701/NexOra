import type { ServicePageContent } from "./types";
import { unsplashUrl } from "./images";

const hero = (photoId: string, alt: string, credit: string, creditUrl: string) => ({
  src: unsplashUrl(photoId, 1400, 800),
  alt,
  width: 1400,
  height: 800,
  credit,
  creditUrl,
});

const body = (photoId: string, alt: string, credit: string, creditUrl: string) => ({
  src: unsplashUrl(photoId, 960, 640),
  alt,
  width: 960,
  height: 640,
  credit,
  creditUrl,
});

const card = (photoId: string, alt: string, credit: string, creditUrl: string) => ({
  src: unsplashUrl(photoId, 640, 400),
  alt,
  width: 640,
  height: 400,
  credit,
  creditUrl,
});

export const servicePages: ServicePageContent[] = [
  {
    slug: "ai-integration",
    category: "ai",
    tag: "Systems & APIs",
    title: "AI Integration",
    outcome:
      "Ship LLM features, semantic search, and real-time AI pipelines inside the products you already run.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "AI Integration",
    meta: {
      title: "AI Integration — NexOra Digital Studio",
      description:
        "Embed LLM features, semantic search, real-time data pipelines, and API integration into existing products — built with eval-driven development and production guardrails.",
    },
    hub: {
      oneLiner:
        "LLM features, semantic search, and real-time pipelines wired into your existing stack.",
      cardImage: card(
        "1639322537228-f710d846310a",
        "Abstract network nodes on a dark background",
        "Shubham Dhage",
        "https://unsplash.com/@theshubhamdhage"
      ),
    },
    heroImage: hero(
      "1639322537228-f710d846310a",
      "Abstract interconnected network nodes representing AI system integration",
      "Shubham Dhage",
      "https://unsplash.com/@theshubhamdhage"
    ),
    bodyImage: body(
      "1551288049-bebda4e38f71",
      "Analytics dashboard showing real-time data metrics",
      "Luke Chesser",
      "https://unsplash.com/@lukechesser"
    ),
    whatThisIs: [
      "AI integration is not a chatbot bolted onto a landing page. It is the work of connecting language models, embeddings, and inference pipelines to the systems your business already depends on — CRMs, internal databases, product UIs, and operational workflows.",
      "We build features that belong in production: semantic search across your content, summarisation and classification endpoints, streaming responses in your app, and event-driven pipelines that keep AI outputs in sync with live data.",
      "Every integration is scoped around your constraints — latency budgets, data residency, existing auth, and what your team can maintain after handover.",
    ],
    deliverables: [
      "LLM feature design and API contracts aligned to your product",
      "Embedding pipelines and vector search wired to your data stores",
      "Streaming inference endpoints with timeout and fallback handling",
      "Integration adapters for third-party APIs and internal services",
      "Evaluation harnesses and regression checks before production rollout",
      "Observability setup — logging, tracing, and cost monitoring dashboards",
    ],
    approach: {
      intro:
        "We treat AI features like any other production system: measurable, observable, and safe to ship incrementally.",
      practices: [
        "Eval-driven development — define success criteria before writing integration code",
        "Input/output guardrails and content filtering at the API boundary",
        "Cost and latency budgets enforced per endpoint before go-live",
        "Graceful fallbacks when models time out, rate-limit, or return low-confidence output",
        "Structured logging and tracing with enough context to debug production issues",
      ],
    },
    tools: [
      "OpenAI API",
      "Anthropic API",
      "pgvector",
      "Pinecone",
      "Redis / queues",
      "Server-sent events",
      "TypeScript / Python",
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    category: "ai",
    tag: "Your data, grounded",
    title: "RAG & Knowledge Assistants",
    outcome:
      "Assistants that answer from your documents and data — with citations, access control, and retrieval you can audit.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "RAG & Knowledge Assistants",
    meta: {
      title: "RAG & Knowledge Assistants — NexOra Digital Studio",
      description:
        "Retrieval-augmented assistants over your own docs and data — internal knowledge bots, support assistants, and document Q&A grounded in your content.",
    },
    hub: {
      oneLiner:
        "Internal knowledge bots and document Q&A grounded in your own content.",
      cardImage: card(
        "1481627834876-b7833e8f5570",
        "Library shelves with books and archives",
        "Siora Photography",
        "https://unsplash.com/@siora18"
      ),
    },
    heroImage: hero(
      "1481627834876-b7833e8f5570",
      "Library archive shelves representing structured knowledge storage",
      "Siora Photography",
      "https://unsplash.com/@siora18"
    ),
    bodyImage: body(
      "1454165804606-c3d57bc86b40",
      "Documents and laptop on a desk for knowledge work",
      "Scott Graham",
      "https://unsplash.com/@homajob"
    ),
    whatThisIs: [
      "RAG — retrieval-augmented generation — lets an assistant answer questions using your documents, wikis, support tickets, and internal data instead of the model's training set. The result is grounded, citeable, and scoped to what your organisation actually knows.",
      "We build knowledge assistants for internal teams, customer support, and compliance-heavy environments where 'probably right' is not good enough. Each answer traces back to source material your team can verify.",
      "Access control is built in from the start. Users only retrieve documents they are permitted to see — permissions apply at retrieval time, not just in the UI.",
    ],
    deliverables: [
      "Document ingestion pipeline with format parsing (PDF, DOCX, HTML, markdown)",
      "Chunking strategy tuned to your content types and query patterns",
      "Vector index with metadata filters for team, project, or sensitivity level",
      "Assistant UI or API with inline source citations on every response",
      "Retrieval evaluation suite — precision/recall benchmarks on real queries",
      "Admin tooling for re-indexing, access policy updates, and audit logs",
    ],
    approach: {
      intro:
        "Good RAG is mostly retrieval engineering. We optimise the pipeline that finds the right context before the model ever generates a word.",
      practices: [
        "Chunk sizes tuned per document type — manuals, tickets, and policies each get their own strategy",
        "Embedding model selection validated against your domain vocabulary",
        "Retrieval evaluation with held-out query sets before launch",
        "Hallucination control via citation requirements and confidence thresholds",
        "Source attribution on every answer so users can verify claims",
        "Role-based access control enforced when documents are retrieved",
      ],
    },
    tools: [
      "pgvector",
      "Pinecone",
      "OpenAI embeddings",
      "Cohere reranking",
      "LangChain / custom pipelines",
      "S3 / GCS",
      "PostgreSQL",
    ],
  },
  {
    slug: "ai-agents-automation",
    category: "ai",
    tag: "Practical automation",
    title: "AI Agents & Automation",
    outcome:
      "Workflow automation and internal tools that remove real friction — scoped, monitored, and human-supervised.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "AI Agents & Automation",
    meta: {
      title: "AI Agents & Automation — NexOra Digital Studio",
      description:
        "Practical workflow automation and internal tools powered by AI — human-in-the-loop, deterministic guardrails, and scoped tool access. No autonomous-agent theatre.",
    },
    hub: {
      oneLiner:
        "Workflow agents and internal tools for real ops work — scoped, supervised, production-grade.",
      cardImage: card(
        "1620712943543-bcc4688e7485",
        "Minimal robotic arm in an industrial setting",
        "Possessed Photography",
        "https://unsplash.com/@possessedphotography"
      ),
    },
    heroImage: hero(
      "1620712943543-bcc4688e7485",
      "Robotic arm representing precise automated workflow execution",
      "Possessed Photography",
      "https://unsplash.com/@possessedphotography"
    ),
    bodyImage: body(
      "1555949963-aa79dcee981c",
      "Code on a screen representing automation logic",
      "AltumCode",
      "https://unsplash.com/@altumcode"
    ),
    whatThisIs: [
      "We build automation that replaces repetitive operational work — triaging inbound requests, drafting responses from templates, routing tasks between systems, and generating reports from structured data. The goal is fewer manual steps, not a fully autonomous agent making unsupervised decisions.",
      "Every automation we ship has a defined scope: which tools it can call, which data it can read, what actions require human approval, and what happens when something goes wrong. We document what the system cannot do.",
      "Pipelines are versioned, testable, and observable — the same standards we apply to any backend service.",
    ],
    deliverables: [
      "Workflow automation design mapped to your existing tools and APIs",
      "Agent orchestration with scoped tool access and permission boundaries",
      "Human-in-the-loop approval steps for high-impact actions",
      "Deterministic guardrails — regex, schema validation, and output constraints",
      "Failure handling with dead-letter queues and operator notifications",
      "Monitoring dashboards for run success rates, latency, and error patterns",
    ],
    approach: {
      intro:
        "Automation should be boring in production — predictable, auditable, and easy to roll back.",
      practices: [
        "Human-in-the-loop for any action that changes external state or sends communications",
        "Guardrails enforced in code and schema validation, alongside prompt design",
        "Scoped tool access — agents only reach the APIs and data they need",
        "Idempotent steps so retries do not cause duplicate side effects",
        "Run-level logging with full input/output traces for debugging",
        "Circuit breakers when downstream services degrade",
      ],
    },
    tools: [
      "OpenAI / Anthropic tool use",
      "Temporal / BullMQ",
      "Webhooks",
      "REST / GraphQL APIs",
      "Slack / email integrations",
      "TypeScript / Python",
    ],
  },
  {
    slug: "cloud-solutions",
    category: "cloud-infrastructure",
    tag: "Scale-ready architecture",
    title: "Cloud Solutions",
    outcome:
      "Cloud architecture, deployment, and scaling — designed for reliability, cost control, and teams that need to operate it.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "Cloud Solutions",
    meta: {
      title: "Cloud Solutions — NexOra Digital Studio",
      description:
        "Cloud architecture, deployment, and scaling on AWS — well-architected principles, infrastructure as code, autoscaling, and production observability.",
    },
    hub: {
      oneLiner:
        "Architecture, deployment, and scaling built on well-architected principles.",
      cardImage: card(
        "1558494949-ef010cbdcc31",
        "Server room with network infrastructure",
        "Alexandre Debiève",
        "https://unsplash.com/@freezydreamin"
      ),
    },
    heroImage: hero(
      "1558494949-ef010cbdcc31",
      "Server room with network cables and infrastructure hardware",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin"
    ),
    bodyImage: body(
      "1544197150-b99a580bb7a8",
      "Abstract cloud infrastructure visualization",
      "Adrien Converse",
      "https://unsplash.com/@adrienconverse"
    ),
    whatThisIs: [
      "Cloud work at NexOra means designing systems that survive real traffic, real failures, and real budget constraints. We architect on AWS (and compatible stacks) with a bias toward simplicity — the fewest moving parts that meet your reliability and scale requirements.",
      "Whether you are migrating from a monolith, standing up a new platform, or fixing an architecture that cannot handle growth, we start with your actual constraints: team size, traffic patterns, compliance needs, and monthly spend targets.",
      "Deployment is not a one-off event. We set up infrastructure as code, CI/CD pipelines, and observability so your team can ship and operate confidently after handover.",
    ],
    deliverables: [
      "Architecture diagrams and decision records for key design choices",
      "Infrastructure as code (Terraform / CDK) with version-controlled environments",
      "Containerised services with orchestration on ECS or Kubernetes",
      "Autoscaling policies tuned to your traffic patterns and cost targets",
      "CI/CD pipelines for staging and production deployments",
      "Monitoring, alerting, and runbooks for on-call operations",
    ],
    approach: {
      intro:
        "We follow well-architected principles as practical constraints — design choices that keep systems maintainable under real load.",
      practices: [
        "Design for failure — multi-AZ deployments, health checks, and graceful degradation",
        "Cost optimisation from day one — right-sized instances, reserved capacity where it makes sense",
        "Autoscaling driven by measured load patterns",
        "Infrastructure as code so environments are reproducible and auditable",
        "Least-privilege IAM — every service gets only the permissions it needs",
        "High availability patterns with tested failover procedures",
      ],
    },
    tools: [
      "AWS",
      "Docker",
      "Kubernetes / ECS",
      "Terraform",
      "GitHub Actions",
      "CloudWatch",
      "RDS / Aurora",
    ],
  },
  {
    slug: "iot-systems",
    category: "cloud-infrastructure",
    tag: "Hardware to cloud",
    title: "IoT Systems",
    outcome:
      "Device integration, telemetry pipelines, and real-time dashboards — from sensor to cloud with reliability under real-world connectivity.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "IoT Systems",
    meta: {
      title: "IoT Systems — NexOra Digital Studio",
      description:
        "Hardware-to-cloud IoT systems — device integration, MQTT telemetry, real-time dashboards, and ingestion pipelines built for intermittent connectivity.",
    },
    hub: {
      oneLiner:
        "Device integration, telemetry, and real-time dashboards from hardware to cloud.",
      cardImage: card(
        "1518770660439-4636190af475",
        "Macro photograph of a circuit board",
        "Alexandre Debiève",
        "https://unsplash.com/@freezydreamin"
      ),
    },
    heroImage: hero(
      "1518770660439-4636190af475",
      "Close-up macro of a circuit board with electronic components",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin"
    ),
    bodyImage: body(
      "1581091226825-a6a2a5aee158",
      "Electronics and sensor components on a workbench",
      "ThisisEngineering",
      "https://unsplash.com/@thisisengineering"
    ),
    whatThisIs: [
      "IoT systems connect physical devices to cloud infrastructure — collecting telemetry, triggering actions, and surfacing real-time data to operators and end users. Our CTO specialises in this stack: MQTT brokers, message queues, time-series storage, and the edge/cloud split that keeps systems responsive when connectivity is unreliable.",
      "We work across the full pipeline: device firmware integration, protocol design, ingestion at scale, custom thing-types and reporting schemas, and the dashboards your team uses to monitor fleet health.",
      "Intermittent connectivity is expected. We design for message buffering, offline sync, and data integrity when devices drop off the network and come back.",
    ],
    deliverables: [
      "Device integration layer with protocol adapters (MQTT, HTTP, CoAP)",
      "Message broker setup with topic design and QoS policies",
      "Telemetry ingestion pipeline with validation and deduplication",
      "Time-series data store configured for your query patterns",
      "Real-time dashboards with live device status and alerting",
      "Custom thing-types, reporting schemas, and fleet management APIs",
    ],
    approach: {
      intro:
        "IoT at scale is a messaging problem first. We design the data flow before picking hardware or cloud services.",
      practices: [
        "MQTT topic hierarchy designed for scalability and access control",
        "Message brokering with back-pressure handling and dead-letter routing",
        "Ingestion pipelines that validate, enrich, and route telemetry at scale",
        "Edge/cloud split — process locally what you can, sync what you must",
        "Reliability under intermittent connectivity with store-and-forward buffering",
        "Device provisioning and certificate rotation for production fleets",
      ],
    },
    tools: [
      "MQTT (Mosquitto / EMQX)",
      "Kafka / RabbitMQ",
      "InfluxDB / TimescaleDB",
      "AWS IoT Core",
      "WebSockets / SSE",
      "Grafana",
      "Docker",
    ],
  },
  {
    slug: "devops",
    category: "cloud-infrastructure",
    tag: "Ship with confidence",
    title: "DevOps",
    outcome:
      "CI/CD, containerisation, and infrastructure automation — so your team ships reliably without heroics.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "DevOps",
    meta: {
      title: "DevOps — NexOra Digital Studio",
      description:
        "CI/CD pipelines, containerisation, infrastructure automation, and production reliability — zero-downtime deploys, monitoring, and rollback procedures.",
    },
    hub: {
      oneLiner:
        "CI/CD, containerisation, and infra automation for reliable releases.",
      cardImage: card(
        "1555066931-4365d14bab8c",
        "Code editor on a dark screen",
        "Danial Igdery",
        "https://unsplash.com/@daniellifex"
      ),
    },
    heroImage: hero(
      "1555066931-4365d14bab8c",
      "Code on a dark screen in a development environment",
      "Danial Igdery",
      "https://unsplash.com/@daniellifex"
    ),
    bodyImage: body(
      "1517694712202-14dd9538aa97",
      "Developer laptop showing code and terminal output",
      "Christina Morillo",
      "https://unsplash.com/@christina1"
    ),
    whatThisIs: [
      "DevOps is the practice of making software delivery repeatable, fast, and safe. We set up the pipelines, containers, and infrastructure automation that let your team deploy multiple times a day without crossing their fingers.",
      "Our work covers the full delivery lifecycle: source control workflows, automated testing in CI, container images, orchestration, environment management, monitoring, and the rollback procedures you need when something goes wrong at 2am.",
      "We do not build DevOps for its own sake. Every pipeline and automation is tied to a concrete reliability or velocity goal your team can measure.",
    ],
    deliverables: [
      "CI/CD pipeline design with automated test, build, and deploy stages",
      "Dockerfile and container image optimisation for your services",
      "Kubernetes or ECS orchestration with resource limits and health probes",
      "Infrastructure as code for staging and production environments",
      "Monitoring and alerting setup with actionable runbooks",
      "Zero-downtime deployment strategy with tested rollback procedures",
    ],
    approach: {
      intro:
        "Reliable delivery is a system. We design the workflow end to end.",
      practices: [
        "Pipeline design with fast feedback — lint, test, and build in minutes, not hours",
        "Automated testing gates that block broken code from reaching production",
        "Container orchestration with resource limits, probes, and graceful shutdown",
        "Monitoring and alerting on the metrics that predict user-facing failures",
        "Zero-downtime deploys with rolling updates or blue-green strategies",
        "Documented rollback procedures tested before you need them",
      ],
    },
    tools: [
      "Docker",
      "Kubernetes / ECS",
      "GitHub Actions",
      "Terraform",
      "Prometheus / Grafana",
      "ArgoCD",
      "AWS / GCP",
    ],
  },
  {
    slug: "product-development",
    category: "product-web",
    tag: "Idea to deployment",
    title: "Product Development",
    outcome:
      "MVPs, SaaS platforms, and internal tools — scoped, architected, and shipped by engineers who own the full stack.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "Product Development",
    meta: {
      title: "Product Development — NexOra Digital Studio",
      description:
        "End-to-end product development — MVPs, SaaS platforms, and internal tools from architecture through deployment, scoped for founders who need it shipped.",
    },
    hub: {
      oneLiner:
        "MVPs and SaaS platforms from architecture through deployment.",
      cardImage: card(
        "1504384308090-c894fdcc538d",
        "Minimal workspace with design tools",
        "Avel Chuklanov",
        "https://unsplash.com/@chuklanov"
      ),
    },
    heroImage: hero(
      "1504384308090-c894fdcc538d",
      "Minimal workspace setup for product design and development",
      "Avel Chuklanov",
      "https://unsplash.com/@chuklanov"
    ),
    bodyImage: body(
      "1587620962725-abab7fe55159",
      "Wireframe and code on screen showing product design process",
      "Icons8 Team",
      "https://unsplash.com/@icons8"
    ),
    whatThisIs: [
      "Product development at NexOra means taking an idea from scoped requirements to a deployed, usable system. We work with founders and teams who need an MVP validated in market, a SaaS platform built properly from the start, or an internal tool that replaces a spreadsheet workflow costing hours every week.",
      "We own the full stack — architecture, backend, frontend, database design, auth, deployment, and the operational basics your product needs on day one. No handoffs between agencies. One team, one codebase, one deployment.",
      "Scoping is honest. We tell you what fits a first release, what should wait, and what the architecture needs so you can grow without a full rewrite.",
    ],
    deliverables: [
      "Product scope document with phased release plan",
      "System architecture and data model design",
      "Backend APIs with authentication and authorisation",
      "Frontend application (web or cross-platform mobile)",
      "Database schema with migration strategy",
      "Deployment to production with monitoring and error tracking",
    ],
    approach: {
      intro:
        "We build products the way we would build our own — clear boundaries, tested code, architecture with room to scale.",
      practices: [
        "Scope ruthlessly for v1 — ship the core loop, defer the rest",
        "Architecture decisions documented so future developers understand the why",
        "Typed APIs and validated inputs at every boundary",
        "Automated tests on critical paths — auth, payments, data integrity",
        "Staging environment that mirrors production configuration",
        "Handover documentation and codebase walkthrough for your team",
      ],
    },
    tools: [
      "Next.js / React",
      "Node.js / TypeScript",
      "PostgreSQL",
      "Prisma / Drizzle",
      "AWS / Vercel",
      "React Native",
      "Stripe",
    ],
  },
  {
    slug: "web-development",
    category: "product-web",
    tag: "Built for performance",
    title: "Web Development",
    outcome:
      "High-performance websites built for speed, clarity, and conversion — scalable code, no template shortcuts.",
    tier: "available",
    tierLabel: "Available now",
    contactProjectType: "Web Development",
    meta: {
      title: "Web Development — NexOra Digital Studio",
      description:
        "High-performance websites built for speed, clarity, and conversion — premium UI, scalable code, and no template shortcuts.",
    },
    hub: {
      oneLiner:
        "Fast, conversion-focused websites with premium UI and clean code.",
      cardImage: card(
        "1498050108023-c5249f4df085",
        "Laptop displaying code in a modern workspace",
        "Christina Morillo",
        "https://unsplash.com/@christina1"
      ),
    },
    heroImage: hero(
      "1498050108023-c5249f4df085",
      "Laptop with code editor open in a clean workspace",
      "Christina Morillo",
      "https://unsplash.com/@christina1"
    ),
    bodyImage: body(
      "1460925895917-afdab827c52f",
      "Modern web interface displayed on a screen",
      "Carlos Muza",
      "https://unsplash.com/@kmuza"
    ),
    whatThisIs: [
      "Your website is a revenue asset, not a brochure. We build sites that load fast, rank well, convert visitors, and scale as your business grows — with code your team can maintain and extend.",
      "Every project starts with performance budgets and accessibility requirements before visual design. We write semantic HTML, optimise assets, implement proper SEO foundations, and design UI that communicates clearly on every screen size.",
      "Marketing sites, product landing pages, and content-driven platforms — all built to production standard.",
    ],
    deliverables: [
      "Responsive, accessible UI built to WCAG AA standards",
      "Performance-optimised build — Core Web Vitals targets defined upfront",
      "SEO foundation — metadata, structured data, sitemap, and semantic markup",
      "CMS integration or static content workflow, depending on your needs",
      "Analytics and conversion tracking setup",
      "Deployment with CDN, SSL, and caching configured",
    ],
    approach: {
      intro:
        "A fast website is a designed outcome, not an afterthought. We optimise at every layer.",
      practices: [
        "Mobile-first responsive design with tested breakpoints",
        "Image optimisation, lazy loading, and font subsetting",
        "Semantic HTML and ARIA attributes for screen reader compatibility",
        "Lighthouse performance budgets enforced in CI",
        "Clean component architecture for maintainability",
        "Visible focus states and keyboard navigation throughout",
      ],
    },
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel / AWS",
      "Sanity / MDX",
      "Google Analytics",
    ],
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
) as Record<string, ServicePageContent>;

export const hubHeroImage = hero(
  "1504639725590-34d0984388bd",
  "Macro photograph of code on a dark screen",
  "Markus Spiske",
  "https://unsplash.com/@markusspiske"
);
