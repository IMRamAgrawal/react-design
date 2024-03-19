// const express = require("express");

// const app = express();

// app.use(express.json());

// let currentUser = {
//   id: "1",
//   name: "Sarah Waters",
//   age: 55,
//   country: "United Kingdom",
//   books: ["Fingersmith", "The Night Watch"],
// };

// let users = [
//   {
//     id: "1",
//     name: "Sarah Waters",
//     age: 55,
//     country: "United Kingdom",
//     books: ["Fingersmith", "The Night Watch"],
//   },
//   {
//     id: "2",
//     name: "Haruki Murakami",
//     age: 71,
//     country: "Japan",
//     books: ["Norwegian Wood", "Kafka on the Shore"],
//   },
//   {
//     id: "3",
//     name: "Chimamanda Ngozi Adichie",
//     age: 43,
//     country: "Nigeria",
//     books: ["Half of a Yellow Sun", "Americanah"],
//   },
// ];

// let books = [
//   {
//     id: "1",
//     name: "To Kill a Mockingbird",
//     pages: 281,
//     title: "Harper Lee",
//     price: 12.99,
//   },
//   {
//     id: "2",
//     name: "The Catcher in the Rye",
//     pages: 224,
//     title: "J.D. Salinger",
//     price: 9.99,
//   },
//   {
//     id: "3",
//     name: "The Little Prince",
//     pages: 85,
//     title: "Antoine de Saint-Exupéry",
//     price: 7.99,
//   },
// ];

// app.get("/current-user", (req, res) => res.json(currentUser));

// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   res.json(users.find((user) => user.id === id));
// });

// app.get("/users", (req, res) => res.json(users));

// app.post("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { user: editedUser } = req.body;

//   users = users.map((user) => (user.id === id ? editedUser : user));

//   res.json(users.find((user) => user.id === id));
// });

// app.get("/books", (req, res) => res.json(books));

// app.get("/books/:id", (req, res) => {
//   const { id } = req.params;
//   res.json(books.find((book) => book.id === id));
// });

// let SERVER_PORT = 9090;
// app.listen(SERVER_PORT, () =>
//   console.log(`Server is listening on port: ${SERVER_PORT}`)
// );

const express = require('express');
const shuffle = require('lodash.shuffle');
const booksData = require('./books.json');

const app = express();
const port = 4000;

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.get('/api/books', (req, res) => {
  const limit = Number(req.query.limit || 10);
  const offset = Number(req.query.offset || 0);
  const books = booksData.slice(offset, offset + limit);
  res.json(books);
});

app.get('/api/books/random', (req, res) => {
  const [book] = shuffle(booksData);
  res.json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: booksData.length + 1, title, author };
  booksData.push(newBook);
  res.status(201).json(newBook);
});

app.get('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const book = booksData.find((book) => book.id === Number(id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.patch('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = booksData.find((book) => book.id === Number(id));
  if (book) {
    book.title = title;
    book.author = author;
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.delete('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const index = booksData.findIndex((book) => book.id === Number(id));
  if (index !== -1) {
    const deletedBook = booksData.splice(index, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
