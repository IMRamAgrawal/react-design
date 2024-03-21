// import ShoppingCard from "./components/shopping-card";
// import "./App.css";

// function App() {
//   return (
//     <main className="flex items-center h-full place-content-center bg-cyan-900">
//     <ShoppingCard />
//   </main>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import "./App.css";
import axios from "axios";
import Book from "./components/books/book";
import Books from "./components/books/books";

export type Book = {
  id: number;
  title: string;
  author?: string;
};

export const fetchRandomBook = async () => {
  const response = await axios.get(`/api/books/random`);
  return response.data;
};

export const fetchBook = async (count: number) => {
  const response = await axios.get(`/api/books?limit=${count}`);
  return response.data;
};

function App() {
  const [book, setBook] = useState<Book[]>([]);

  useEffect(() => {
    fetchRandomBook().then(setBook);
  }, []);

  if (!book) return <Loader />;

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
 <Books>
        {book.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </Books>
    </main>
  );
}

export default App;
