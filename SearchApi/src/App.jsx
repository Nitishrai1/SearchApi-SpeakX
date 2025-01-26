import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Typography, Paper, CircularProgress } from "@mui/material";
import {
  setQuery,
  setQuestionType,
  fetchQuestions,
  clearQuestions,
} from "./redux/searchSlice";
import SearchBox from "./components/SearchBox";
import QuestionList from "./components/QuestionList";
import Filter from "./components/Filter";
import PaginationComponent from "./components/Pagination";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const dispatch = useDispatch();
  const { query, questions, questionType, status } = useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchQuestions({ query, page: 1, questionType: '' })); // Fetch all types initially
    } else {
      dispatch(clearQuestions());
    }
  }, [query, dispatch]);

  const handleSelectSuggestion = (suggestion) => {
    dispatch(setQuery(suggestion.title));
  };

  const handleSearch = (q) => {
    dispatch(setQuery(q));
    if (!q) {
      dispatch(clearQuestions());
    }
  };

  const handleFilterChange = (type) => {
    dispatch(setQuestionType(type));
  };

  return (
    <ErrorBoundary>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            ANS Search API
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <SearchBox onSearch={handleSearch} onSelectSuggestion={handleSelectSuggestion} />
            <Filter questionType={questionType} onFilterChange={handleFilterChange} />
          </Paper>
          {status === "loading" && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <CircularProgress />
            </Box>
          )}
          <QuestionList questions={questions} filter={questionType} isLoading={status === "loading"} />
        </Box>
      </Container>
    </ErrorBoundary>
  );
};

export default App;