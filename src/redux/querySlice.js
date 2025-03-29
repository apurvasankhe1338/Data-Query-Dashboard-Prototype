import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: [],
  currentQuery: "",
  results: null,
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    submitQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.queries.push(state.currentQuery);
      state.currentQuery = "";
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setQuery, submitQuery, setResults, setError } = querySlice.actions;
export default querySlice.reducer;
