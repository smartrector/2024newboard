import React from "react";

function SearchInp({searchForm, onSearch}) {
  return (
    <input
      className="p-2 border border-gray-300 rounded-md"
      type="text"
      placeholder="검색하세요"
      onChange={onSearch}
      value={searchForm}
    />
  );
}

export default SearchInp;
