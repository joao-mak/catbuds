import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './redux/actions';

import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  const {
    robots,
    searchField,
    onSearchChange,
    isPending,
    onRequestRobots,
  } = props;

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    onRequestRobots();
  }, []);

  return (
    <div className="App">
      <header className="tc">
        <h1>CatBuds</h1>
        <SearchBar searchChange={onSearchChange} />
      </header>
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
