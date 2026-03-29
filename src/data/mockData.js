export const knowledgeBases = [
  {
    id: 1,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: 2,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: 3,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: 4,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: 5,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: 6,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
];

export const navItems = {
  myProjects: [
    { id: "agents", label: "Agents", icon: "cpu" },
    { id: "ai-models", label: "AI Models", icon: "bot" },
    { id: "library", label: "Library", icon: "layout-panel-left" },
  ],
  orchestrator: [
    { id: "published", label: "Published", icon: "briefcase" },
    { id: "machines", label: "Machines", icon: "monitor" },
    { id: "queues", label: "Queues", icon: "list" },
    { id: "triggers", label: "Triggers", icon: "zap" },
    { id: "jobs", label: "Jobs", icon: "square" },
    { id: "executions", label: "Executions", icon: "square-play" },
    { id: "vault", label: "Vault", icon: "shield" },
    { id: "knowledge-base", label: "Knowledge Base", icon: "book-open" },
    { id: "key-store", label: "Key Store", icon: "bar-chart-2" },
  ],
  admin: [
    { id: "tenant", label: "Tenant", icon: "id-card" },
    { id: "integrations", label: "Integrations", icon: "settings-2" },
  ],
};

export const ROWS_PER_PAGE_OPTIONS = [10, 25, 50];

export const VECTOR_STORE_OPTIONS = ["Qdrant", "Pinecone", "Weaviate", "Chroma"];

export const EMBEDDING_MODEL_OPTIONS = [
  "text-embedding-ada-002",
  "text-embedding-3-small",
  "text-embedding-3-large",
];
