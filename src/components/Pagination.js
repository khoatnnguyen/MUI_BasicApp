// src/components/Pagination.js
import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

function Pagination({ page, totalPages, handlePageChange }) {
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={(_, value) => handlePageChange(value)}
      color="primary"
      sx={{ mt: 2, mb: 2, justifyContent: "center", display: "flex" }}
    />
  );
}

export default Pagination;
