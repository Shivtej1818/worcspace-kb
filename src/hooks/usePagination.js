import { useState, useMemo } from "react";

export function usePagination(items, initialRowsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const totalPages = Math.max(1, Math.ceil(items.length / rowsPerPage));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return items.slice(start, start + rowsPerPage);
  }, [items, currentPage, rowsPerPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const changeRowsPerPage = (value) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    rowsPerPage,
    paginatedItems,
    goToPage,
    changeRowsPerPage,
  };
}
