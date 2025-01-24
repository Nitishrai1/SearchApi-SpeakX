import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios'
import { setQuery } from '../redux/searchSlice';

function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
}

const SearchBar: React.FC = () => {
  const [inputValue,setInputValue]=useState('');
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  const debounceSearch=debounce(async (query:string)=>{
    if(query){
        try{
            const response=await axios.get("https://searchapi-speakx.onrender.com/api/questions/search",{
                params:{q:query},
            })
            console.log(response.data);
        }catch(err){
            console.log('Error fetching seach data frmo backend',err);
        }
    }
  },500)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setQuery(e.target.value));
    setInputValue(e.target.value);
    debounceSearch(e.target.value);

  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;