import React, { useState, useEffect, useRef } from "react"
import { TextField, InputAdornment, ClickAwayListener } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import SuggestionList from "./SuggestionList"

const SearchBox = ({ onSearch, suggestions, onSelectSuggestion }) => {
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(inputValue)
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue, onSearch])

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    setShowSuggestions(value.length > 0)
  }

  const handleClickAway = () => {
    setShowSuggestions(false)
  }

  const handleSuggestionSelect = (suggestion) => {
    setInputValue(suggestion.title)
    setShowSuggestions(false)
    onSelectSuggestion(suggestion)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <TextField
          label="Search Questions"
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
          value={inputValue}
          inputRef={inputRef}
          onFocus={() => setShowSuggestions(inputValue.length > 0)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {showSuggestions && <SuggestionList suggestions={suggestions} onSelect={handleSuggestionSelect} />}
      </div>
    </ClickAwayListener>
  )
}

export default SearchBox

