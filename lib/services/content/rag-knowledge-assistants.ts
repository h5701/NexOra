import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const ragKnowledgeAssistants: ServiceContent = {
  slug: "rag-knowledge-assistants",
  category: "ai",
  tag: "Your data, grounded",
  title: "RAG & Knowledge Assistants",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "RAG & Knowledge Assistants — NexOra Digital Studio",
  seoDescription:
    "Retrieval-augmented assistants over your own docs and data — internal knowledge bots, support assistants, and document Q&A grounded in your content.",
  hero: {
    outcomeLine:
      "Assistants that answer from your documents and data — with citations, access control, and retrieval you can audit.",
    image: heroImage(
      "1481627834876-b7833e8f5570",
      "Library archive shelves representing structured knowledge storage",
      "Siora Photography",
      "https://unsplash.com/@siora18",
    ),
  },
  hub: {
    oneLiner:
      "Internal knowledge bots and document Q&A grounded in your own content.",
    cardImage: cardImage(
      "1481627834876-b7833e8f5570",
      "Library shelves with books and archives",
      "Siora Photography",
      "https://unsplash.com/@siora18",
    ),
  },
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
    points: [
      "Chunk sizes tuned per document type — manuals, tickets, and policies each get their own strategy",
      "Embedding model selection validated against your domain vocabulary",
      "Retrieval evaluation with held-out query sets before launch",
      "Hallucination control via citation requirements and confidence thresholds",
      "Source attribution on every answer so users can verify claims",
      "Role-based access control enforced when documents are retrieved",
    ],
  },
  supportingImage: bodyImage(
    "1454165804606-c3d57bc86b40",
    "Documents and laptop on a desk for knowledge work",
    "Scott Graham",
    "https://unsplash.com/@homajob",
  ),
  techToolGroups: [
    {
      label: "AI / Data",
      tools: [
        "pgvector",
        "Pinecone",
        "OpenAI embeddings",
        "Cohere reranking",
        "LangChain / custom pipelines",
      ],
    },
    {
      label: "Backend",
      tools: ["PostgreSQL"],
    },
    {
      label: "Infra",
      tools: ["S3 / GCS"],
    },
  ],
  cta: {
    label: "Start a project →",
    projectType: "RAG & Knowledge Assistants",
  },
};
