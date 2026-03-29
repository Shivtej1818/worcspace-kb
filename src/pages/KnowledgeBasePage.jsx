import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import KnowledgeBaseCard from "../components/knowledgebase/KnowledgeBaseCard";
import CreateKnowledgeBaseModal from "../components/knowledgebase/CreateKnowledgeBaseModal";
import Pagination from "../components/ui/Pagination";
import { knowledgeBases } from "../data/mockData";
import { usePagination } from "../hooks/usePagination";

export default function KnowledgeBasePage() {
  const [items, setItems] = useState(knowledgeBases);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  const {
    currentPage,
    totalPages,
    rowsPerPage,
    paginatedItems,
    goToPage,
    changeRowsPerPage,
  } = usePagination(filtered, 10);

  const handleCreate = (form) => {
    const newItem = {
      id: Date.now(),
      title: form.name,
      description: form.description || "No description provided.",
      createdOn: new Date().toLocaleDateString("en-GB"),
    };
    setItems((prev) => [newItem, ...prev]);
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-auto">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Knowledge Base</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white w-56">
            <Search size={14} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                goToPage(1);
              }}
              className="text-sm text-gray-700 outline-none bg-transparent w-full placeholder-gray-400"
            />
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={15} />
            Create New
          </button>
        </div>
      </div>

      {/* Grid or empty state */}
      {paginatedItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedItems.map((item) => (
            <KnowledgeBaseCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-24">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="w-10 h-10 text-gray-300"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M40 8H16a4 4 0 00-4 4v40a4 4 0 004 4h32a4 4 0 004-4V20L40 8z" />
              <path d="M40 8v12h12" />
            </svg>
          </div>
          <p className="text-gray-400 text-sm font-medium">No Knowledge Bases Found</p>
          <p className="text-gray-300 text-xs mt-1">
            {search ? "Try a different search term." : 'Click "Create New" to get started.'}
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        total={filtered.length}
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onPageChange={goToPage}
        onRowsPerPageChange={changeRowsPerPage}
      />

      {/* Create modal */}
      <CreateKnowledgeBaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}
