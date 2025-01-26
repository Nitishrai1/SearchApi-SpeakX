import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const Filter = ({ questionType, onFilterChange }) => {
  return (
    <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
      <RadioGroup
        row
        value={questionType}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="MCQ" control={<Radio />} label="MCQ" />
        <FormControlLabel value="Anagram" control={<Radio />} label="Anagram" />
      </RadioGroup>
    </FormControl>
  );
};

export default Filter;