import React from 'react';
import { Pagination } from '@mui/material';

const PaginationComponent = ({ page, totalPages, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, value) => onPageChange(value)}
      color="primary"
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationComponent;