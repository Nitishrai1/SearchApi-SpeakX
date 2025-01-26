import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Container, Box, Typography, Paper, CircularProgress } from "@mui/material"
import {
  setQuery,
  setQuestionType,
  setPage,
  fetchQuestions,
  fetchSuggestions,
  clearQuestions,
} from "./redux/searchSlice"
import SearchBox from "./components/SearchBox"
import QuestionList from "./components/QuestionList"
import Filter from "./components/Filter"
import PaginationComponent from "./components/Pagination"
import ErrorBoundary from "./components/ErrorBoundary"

const App = () => {
  const dispatch = useDispatch()
  const { query, questions, suggestions, questionType, page, totalPages, status } = useSelector((state) => state.search)

  React.useEffect(() => {
    if (query) {
      dispatch(fetchQuestions({ query, page, questionType }))
      dispatch(fetchSuggestions(query))
    } else {
      dispatch(clearQuestions())
    }
  }, [query, page, questionType, dispatch])

  const handleSelectSuggestion = (suggestion) => {
    dispatch(setQuery(suggestion.title))
  }

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage))
  }

  const handleSearch = (q) => {
    dispatch(setQuery(q))
    if (!q) {
      dispatch(clearQuestions())
    }
  }

  const handleFilterChange = (type) => {
    dispatch(setQuestionType(type))
    dispatch(setPage(1))
    if (query) {
      dispatch(fetchQuestions({ query, page: 1, questionType: type }))
    }
  }

  return (
    <ErrorBoundary>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            ANS Search API
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <SearchBox onSearch={handleSearch} suggestions={suggestions} onSelectSuggestion={handleSelectSuggestion} />
            <Filter questionType={questionType} onFilterChange={handleFilterChange} />
          </Paper>
          {status === "loading" && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <CircularProgress />
            </Box>
          )}
          <QuestionList questions={questions} isLoading={status === "loading"} />
          {questions.length > 0 && (
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <PaginationComponent page={page} totalPages={totalPages} onPageChange={handlePageChange} />
            </Box>
          )}
        </Box>
      </Container>
    </ErrorBoundary>
  )
}

export default App

