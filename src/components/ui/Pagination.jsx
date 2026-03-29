import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { ROWS_PER_PAGE_OPTIONS } from "../../data/mockData";

export default function Pagination({ total, currentPage, totalPages, rowsPerPage, onPageChange, onRowsPerPageChange }) {
  return (
    <div className="flex items-center justify-between px-1 py-3 border-t border-gray-200 mt-4">
      <p className="text-sm text-gray-500 font-medium">
        {total} rows
      </p>

      <div className="flex items-center gap-4">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Rows per page</span>
          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(e.target.value)}
              className="appearance-none border border-gray-300 rounded-md pl-3 pr-7 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              {ROWS_PER_PAGE_OPTIONS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <ChevronRight size={12} className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Page info */}
        <span className="text-sm text-gray-500">
          page {currentPage} of {totalPages}
        </span>

        {/* Nav buttons */}
        <div className="flex items-center gap-1">
          {[
            { icon: ChevronsLeft, action: () => onPageChange(1), disabled: currentPage === 1 },
            { icon: ChevronLeft, action: () => onPageChange(currentPage - 1), disabled: currentPage === 1 },
            { icon: ChevronRight, action: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages },
            { icon: ChevronsRight, action: () => onPageChange(totalPages), disabled: currentPage === totalPages },
          ].map(({ icon: Icon, action, disabled }, idx) => (
            <button
              key={idx}
              onClick={action}
              disabled={disabled}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Icon size={13} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
