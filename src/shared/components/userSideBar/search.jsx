import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate(); 

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="relative w-full max-w-[400px] flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white rounded-lg px-4 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <img
            src="/src/assets/search-svgrepo-com (1).svg"
            alt="Search Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
