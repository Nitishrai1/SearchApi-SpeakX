import React from "react"
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
} from "@mui/material"

const QuestionList = ({ questions = [], isLoading }) => {
  if (isLoading) {
    return (
      <Typography variant="h6" align="center" sx={{ my: 4 }}>
        Loading...
      </Typography>
    )
  }

  if (questions.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ my: 4 }}>
        No questions found. Try a different search query or filter.
      </Typography>
    )
  }

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Options/Blocks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow key={index}>
              <TableCell>{question.title}</TableCell>
              <TableCell>
                <Chip
                  label={question.type}
                  color={question.type === "MCQ" ? "primary" : "secondary"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                {question.type === "MCQ" ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {question.blocks.map((block, idx) => (
                      <li key={idx}>
                        {block.text} {block.isAnswer && <Chip label="Answer" size="small" color="success" />}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul style={{ paddingLeft: "20px" }}>
                    {question.blocks.map((block, idx) => (
                      <li key={idx}>{block.text}</li>
                    ))}
                  </ul>
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

