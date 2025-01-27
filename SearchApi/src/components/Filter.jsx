import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from "@mui/material"

// eslint-disable-next-line react/prop-types
const Filter = ({ questionType, onFilterChange }) => {
  const theme = useTheme()

  return (
    <FormControl component="fieldset" sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Filter by Question Type:
      </Typography>
      <RadioGroup row value={questionType} onChange={(e) => onFilterChange(e.target.value)}>
        <FormControlLabel
          value=""
          control={<Radio sx={{ color: theme.palette.text.secondary }} />}
          label="All"
          sx={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          value="MCQ"
          control={<Radio sx={{ color: theme.palette.text.secondary }} />}
          label="MCQ"
          sx={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          value="ANAGRAM"
          control={<Radio sx={{ color: theme.palette.text.secondary }} />}
          label="Anagram"
          sx={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          value="READ_ALONG"
          control={<Radio sx={{ color: theme.palette.text.secondary }} />}
          label="Read Along"
          sx={{ color: theme.palette.text.primary }}
        />
      </RadioGroup>
    </FormControl>
  )
}

export default Filter

