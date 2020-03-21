import React, { useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import SearchField from './components/SearchField/Component';
import importedBooks from './books.json';
import BooksList from './components/BooksList/Component';

const App = () => {
  const [books, setBooks] = useState(importedBooks);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = e => {
    setSearchField(e.target.value);
    setBooks(
      importedBooks.filter(book =>
        book.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <Typography variant="h1">BookStore</Typography>
      <SearchField
        variant="filled"
        searchChange={onSearchChange}
        value={searchField}
      />
      <BooksList books={books} />
    </div>
  );
};

export default App;
