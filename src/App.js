// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const inputRef = useRef();

//   function submitHandler(e) {
//     e.preventDefault();

//     console.log(inputRef.current.value);
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <input ref={inputRef} className="text-input" />
//       <button type="submit" className="button">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default App;
import { useRef } from "react";
import "./App.css";
import { Input } from "./input";

function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
       {/* <input ref={inputRef} className="text-input" /> */}
      <Input ref={inputRef} />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;
