import React, { useState } from 'react';
import './App.css';
import SearchField from './components/SearchField/Component';
import importedBooks from './books.json';
import BooksList from './components/BooksList/Component';
import Logo from './assets/images/BookStore.svg';
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
      <img src={Logo} width={350} style={{ margin: 24 }} alt="logo" />
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
