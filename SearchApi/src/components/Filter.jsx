
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
const Filter = ({ questionType, onFilterChange }) => {
  return (
    <FormControl component="fieldset" sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Filter by Question Type:
      </Typography>
      <RadioGroup row value={questionType} onChange={(e) => onFilterChange(e.target.value)}>
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="MCQ" control={<Radio />} label="MCQ" />
        <FormControlLabel value="ANAGRAM" control={<Radio />} label="Anagram" />
        <FormControlLabel value="READ_ALONG" control={<Radio />} label="Read Along" />
      </RadioGroup>
    </FormControl>
  )
}

export default Filter

