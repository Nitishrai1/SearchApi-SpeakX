import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  useTheme,
} from "@mui/material"

// eslint-disable-next-line react/prop-types
const QuestionList = ({ questions = [], isLoading }) => {
  const theme = useTheme()

  if (isLoading) {
    return (
      <Typography variant="h6" align="center" sx={{ my: 4, color: theme.palette.text.primary }}>
        Loading...
      </Typography>
    )
  }

  if (questions.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ my: 4, color: theme.palette.text.primary }}>
        No questions found. Try a different search query or filter.
      </Typography>
    )
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{ bgcolor: theme.palette.background.paper }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: theme.palette.text.primary }}>Title</TableCell>
            <TableCell sx={{ color: theme.palette.text.primary }}>Type</TableCell>
            <TableCell sx={{ color: theme.palette.text.primary }}>Options/Blocks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: theme.palette.text.primary }}>{question.title}</TableCell>
              <TableCell>
                <Chip
                  label={question.type}
                  color={question.type === "MCQ" ? "primary" : question.type === "ANAGRAM" ? "secondary" : "default"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.primary }}>
                {question.type === "MCQ" && question.blocks && (
                  <ul style={{ paddingLeft: "20px" }}>
                    {question.blocks.map((block, idx) => (
                      <li key={idx}>
                        {block.text} {block.isAnswer && <Chip label="Answer" size="small" color="success" />}
                      </li>
                    ))}
                  </ul>
                )}
                {question.type === "ANAGRAM" && question.blocks && (
                  <ul style={{ paddingLeft: "20px" }}>
                    {question.blocks.map((block, idx) => (
                      <li key={idx}>{block.text}</li>
                    ))}
                  </ul>
                )}
                {question.type === "READ_ALONG" && question.blocks && question.blocks[0] && (
                  <div>
                    <p>
                      <strong>Text:</strong> {question.blocks[0].text}
                    </p>
                    <p>
                      <strong>Audio:</strong> {question.blocks[0].audio}
                    </p>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default QuestionList

