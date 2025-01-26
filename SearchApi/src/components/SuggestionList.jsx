
import { List, ListItem, ListItemText, Paper } from "@mui/material"

// eslint-disable-next-line react/prop-types
const SuggestionList = ({ suggestions = [], onSelect }) => {
  if (suggestions.length === 0) return null
  // console.log(suggestions);

  return (
    <Paper style={{ position: "absolute", zIndex: 1, width: "100%" }}>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem key={index} onClick={() => onSelect(suggestion)}>
            <ListItemText primary={suggestion.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default SuggestionList

