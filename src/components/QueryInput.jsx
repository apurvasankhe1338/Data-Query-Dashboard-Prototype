import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, submitQuery, setResults, setError } from "../redux/querySlice";

const QueryInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.currentQuery);
  const [suggestions, setSuggestions] = useState([]);

  // Mock AI-powered suggestions
  const mockSuggestions = [
    "Show me sales data for 2024",
    "Compare revenue between Q1 and Q2",
    "Graph of top 5 performing products",
    "Sales report",
    "What was the range of highest selling product last month?",
    "What was the range of lowest selling products last month?",
    "Generate a customer demographics report",
  ];

  // Handle user input change
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));

    // Filter mock suggestions based on input
    if (value.length > 0) {
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    dispatch(setQuery(suggestion));
    setSuggestions([]);
  };

  // Handle query submission
  const handleSubmit = () => {
    if (!query.trim()) return;
    dispatch(submitQuery());
    setSuggestions([]); // Clear suggestions on submit

    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(setError("Invalid query! Try again."));
      } else {
        dispatch(setResults({
          message: `Results for "${query}"`,
          data: [
            Math.floor(Math.random() * 50 + 10),
            Math.floor(Math.random() * 50 + 10),
            Math.floor(Math.random() * 50 + 10),
            Math.floor(Math.random() * 50 + 10),
            Math.floor(Math.random() * 50 + 10),
            Math.floor(Math.random() * 50 + 10),
          ],
        }));
      }
    }, 1500);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="p-2 flex">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Ask a question..."
          className="border text-black p-2 rounded-s-md w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-e-md hover:cursor-progress"
        >
          Submit Query
        </button>
      </div>

      {/* AI Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute  opacity-90 left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryInput;
