
import { Pagination } from "@mui/material"

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

