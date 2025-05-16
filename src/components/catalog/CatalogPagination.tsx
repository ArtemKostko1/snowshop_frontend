import React from "react";

interface CatalogPaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const CatalogPagination: React.FC<CatalogPaginationProps> = ({
  page,
  pageSize,
  total,
  onChange,
}) => {
  const pageCount = Math.ceil(total / pageSize);
  if (pageCount <= 1) return null;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
    >
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          style={{
            margin: "0 4px",
            padding: "6px 14px",
            borderRadius: 4,
            border: i + 1 === page ? "2px solid #1976d2" : "1px solid #ccc",
            background: i + 1 === page ? "#e3f2fd" : "#fff",
            cursor: "pointer",
            fontWeight: i + 1 === page ? 700 : 400,
          }}
          onClick={() => onChange(i + 1)}
          disabled={i + 1 === page}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default CatalogPagination;
