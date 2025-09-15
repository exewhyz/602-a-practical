import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

function Library() {
  const [books, setBooks] = useState(booksData);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: bookTitle,
      author: bookAuthor,
    };
    setBooks([...books, newBook]);
    setBookTitle("");
    setBookAuthor("");
  };
  const handleDelete = (bookId) => {
    const updated = books.filter((b) => b.id !== bookId);
    setBooks(updated);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <div className="search">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchText}
            onChange={handleSearch}
            required
          />
        </div>
        <form className="add-book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            required
            value={bookTitle}
            onChange={(e) => {
              setBookTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Book author"
            required
            value={bookAuthor}
            onChange={(e) => {
              setBookAuthor(e.target.value);
            }}
          />
          <button>Add Book</button>
        </form>
        <div>
          <ul>
            {filteredBooks?.length > 0 ? (
              filteredBooks.map((book) => {
                return (
                  <li key={book.id}>
                    {book.title} by {book.author}
                    <button onClick={() => handleDelete(book.id)}>
                      Remove
                    </button>
                  </li>
                );
              })
            ) : (
              <li>No books available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Library;
