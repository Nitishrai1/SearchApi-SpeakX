import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SuggestionList from './SuggestionList';

const SearchBox = ({ onSearch, suggestions, onSelectSuggestion }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, onSearch]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <TextField
        label="Search Questions"
        variant="outlined"
        size="small"
        fullWidth
        onChange={handleInputChange}
        value={inputValue}
      />
      <SuggestionList
        suggestions={suggestions}
        onSelect={(suggestion) => {
          setInputValue(suggestion.title);
          onSelectSuggestion(suggestion);
        }}
      />
    </div>
  );
};

export default SearchBox;