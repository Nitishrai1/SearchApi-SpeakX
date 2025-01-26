import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const SuggestionList = ({ suggestions = [], onSelect }) => {
  if (suggestions.length === 0) return null;

  return (
    <Paper style={{ position: 'absolute', zIndex: 1, width: '100%' }}>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem button key={index} onClick={() => onSelect(suggestion)}>
            <ListItemText primary={suggestion.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SuggestionList;