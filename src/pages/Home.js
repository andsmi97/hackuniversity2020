import React, { useState, useEffect } from "react";
import SearchField from "../components/SearchField/Component";
import importedBooks from "../books.json";
import BooksList from "../components/BooksList/Component";
const Home = () => {
  const [books, setBooks] = useState(importedBooks);
  const [searchField, setSearchField] = useState("");
  const onSearchChange = e => {
    setSearchField(e.target.value);
    setBooks(
      importedBooks.filter(book =>
        book.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };
  return (
    <>
      <SearchField
        variant="filled"
        searchChange={onSearchChange}
        value={searchField}
      />
      <BooksList books={books} />
    </>
  );
};

export default Home;
