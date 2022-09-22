//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRecipeStore } from "@/helpers/store";

function RecipeAPI() {
  const [searchTerm, setSearchTerm] = useState("");
  const books = useRecipeStore((state) => state.books);
  const fetchBooks = useRecipeStore((state) => state.fetchBooks);

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchBooks(searchTerm);
        }}
      >
        <label>
          Search for books
          <input
            type="search"
            placeholder="search for book"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul>
        {books.items.map((book) => {
          return (
            <li key={book.id}>
              <img
                alt={`${book.volumeInfo.title} book`}
                src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              />
              <div>
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.authors}</p>
              </div>

              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RecipeAPI;
