import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import SearchField from './components/SearchField/Component';
import books from './books.json';
import BooksList from './components/BooksList/Component';

const App = () => {
  const onSearchChange = e => {
    console.log(e);
  };
  return (
    <div>
      <Typography variant="h1">BookStore</Typography>
      <SearchField variant="filled" searchChange={onSearchChange} />
      <BooksList books={books} />
    </div>
  );
};

export default App;
