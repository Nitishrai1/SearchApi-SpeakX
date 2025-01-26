import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api_url=import.meta.env.VITE_API_URL;

export const fetchQuestions = createAsyncThunk("search/fetchQuestions", async ({ query, page, questionType }) => {
  const response = await axios.get(`${api_url}/search`, {
    params: {
      q: query,
      page: page,
      limit: 10,
      type: questionType,
    },
  })
  return response.data
})

export const fetchSuggestions = createAsyncThunk("search/fetchSuggestions", async (query) => {
  const response = await axios.get(`${api_url}/suggestions`, {
    params: { q: query },
  })
  return response.data
})

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    questions: [],
    suggestions: [],
    questionType: "",
    page: 1,
    totalPages: 1,
    status: "idle",
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setQuestionType: (state, action) => {
      state.questionType = action.payload
      state.page = 1
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    clearQuestions: (state) => {
      state.questions = []
      state.totalPages = 1
      state.page = 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.questions = action.payload.questions
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload.suggestions
      })
  },
})

export const { setQuery, setQuestionType, setPage, clearQuestions } = searchSlice.actions

export default searchSlice.reducer

