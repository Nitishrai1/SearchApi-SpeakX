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
                  color={question.type === "MCQ" ? "primary" : question.type === "ANAGRAM" ? "secondary" : "default"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
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

