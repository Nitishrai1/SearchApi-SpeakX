import { Pagination, useTheme } from "@mui/material"

// eslint-disable-next-line react/prop-types
const PaginationComponent = ({ page, totalPages, onPageChange }) => {
  const theme = useTheme()

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(event, value) => onPageChange(value)}
      color="primary"
      size="large"
      showFirstButton
      showLastButton
      sx={{
        "& .MuiPaginationItem-root": {
          color: theme.palette.text.primary,
        },
      }}
    />
  )
}

export default PaginationComponent

