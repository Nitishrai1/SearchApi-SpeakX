import { List, ListItem, ListItemText, Paper, useTheme } from "@mui/material"

// eslint-disable-next-line react/prop-types
const SuggestionList = ({ suggestions = [], onSelect }) => {
  const theme = useTheme()

  if (suggestions.length === 0) return null

  return (
    <Paper
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem
            key={index}
            onClick={() => onSelect(suggestion)}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemText primary={suggestion.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default SuggestionList

