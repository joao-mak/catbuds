import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';
import './App.css';

const App = () => {
  const [robotsArr, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(robotsArr);
  };
  const filterRobots = robotsArr.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  });

  return (
    <div className="App">
      <header className="tc">
        <h1>CatBuds</h1>
        <SearchBar searchChange={onSearchChange} />
      </header>
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
};

export default App;
