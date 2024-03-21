// import { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "./components/loader/loader";
// import Book from "./components/books/book";
// import Books from "./components/books/books";
// import "./App.css";

// export type Book = {
//   id: number;
//   title: string;
//   author?: string;
// };

// export const fetchBooks = async (count: number) => {
//   const response = await axios.get(`/api/books?limit=${count}`);
//   return response.data;
// };

// function App() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [count, setCount] = useState(10);

//   return (
//     <main className="w-full max-w-2xl py-16 mx-auto">
//       <Books setBooks={}
//         // count={count}
//         // onChange={(e) => setCount(e.target.valueAsNumber)}
//         // onSubmit={() => fetchBooks(count).then(setBooks)}
//       >
//         {books.map((book) => {
//           return <Book title={book.title} author={book.author} />;
//         })}
//       </Books>
//     </main>
//   );
// }

// export default App;
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const mutableRefValue = useRef(20);

  mutableRefValue.current = 20;

  return (
    <>
      <input ref={inputRef} />
    </>
  );
}

export default App;
