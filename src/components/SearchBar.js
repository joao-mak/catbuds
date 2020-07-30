import React from 'react';

const SearchBar = (props) => {
  const { searchChange } = props;
  return (
    <div className="pa2">
      <input
        className="pa3 ba br2 b--dark-blue bg-lightest-blue"
        type="search"
        placeholder="search robot..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
