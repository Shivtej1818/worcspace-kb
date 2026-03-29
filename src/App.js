import React from "react";
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";

export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 bg-gray-50 overflow-auto">
          <KnowledgeBasePage />
        </main>
      </div>
    </div>
  );
}
