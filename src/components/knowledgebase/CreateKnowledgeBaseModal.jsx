import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { VECTOR_STORE_OPTIONS, EMBEDDING_MODEL_OPTIONS } from "../../data/mockData";

export default function CreateKnowledgeBaseModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    vectorStore: VECTOR_STORE_OPTIONS[0],
    embeddingModel: EMBEDDING_MODEL_OPTIONS[0],
  });
  const [errors, setErrors] = useState({});

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setForm({ name: "", description: "", vectorStore: VECTOR_STORE_OPTIONS[0], embeddingModel: EMBEDDING_MODEL_OPTIONS[0] });
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onCreate(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40 fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col slide-in">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-gray-900">
                Create New Knowledge Base
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name (Cannot be edited later)
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange("name")}
              className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description
            </label>
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={handleChange("description")}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Vector Store<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.vectorStore}
                onChange={handleChange("vectorStore")}
                className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              >
                {VECTOR_STORE_OPTIONS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Embedding Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              LLM Embedding Model<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.embeddingModel}
                onChange={handleChange("embeddingModel")}
                className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              >
                {EMBEDDING_MODEL_OPTIONS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary-hover text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
