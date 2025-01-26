// src/App.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setQuery,
  setQuestionType,
  setPage,
  fetchQuestions,
  fetchSuggestions,
} from './redux/searchSlice';
import SearchBox from './components/searchBox';
import QuestionList from './components/QuestionList';
import Filter from './components/Filter';
import PaginationComponent from './components/Pagination';

const App = () => {
  const dispatch = useDispatch();
  const { query, questions, suggestions, questionType, page, totalPages } =
    useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchQuestions({ query, page, questionType }));
      dispatch(fetchSuggestions(query));
    }
  }, [query, page, questionType, dispatch]);

  const handleSelectSuggestion = (suggestion) => {
    dispatch(setQuery(suggestion.title));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div style={{ padding: '20px' }}>
      <SearchBox
        onSearch={(q) => dispatch(setQuery(q))}
        suggestions={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
      />
      <Filter
        questionType={questionType}
        onFilterChange={(type) => dispatch(setQuestionType(type))}
      />
      <QuestionList questions={questions} />
      <PaginationComponent
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;