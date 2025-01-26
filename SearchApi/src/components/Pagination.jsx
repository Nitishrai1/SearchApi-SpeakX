
import { Pagination } from "@mui/material"

// eslint-disable-next-line react/prop-types
const PaginationComponent = ({ page, totalPages, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(event, value) => onPageChange(value)}
      color="primary"
      size="large"
      showFirstButton
      showLastButton
    />
  )
}

export default PaginationComponent

