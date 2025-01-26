import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const QuestionList = ({ questions = [] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Options/Blocks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <TableRow key={index}>
                <TableCell>{question.title}</TableCell>
                <TableCell>{question.type}</TableCell>
                <TableCell>
                  {question.type === 'MCQ' ? (
                    <ul>
                      {question.blocks.map((block, idx) => (
                        <li key={idx}>
                          {block.text} {block.isAnswer ? '(Answer)' : ''}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      {question.blocks.map((block, idx) => (
                        <li key={idx}>{block.text}</li>
                      ))}
                    </ul>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography variant="body1">No Data</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuestionList;