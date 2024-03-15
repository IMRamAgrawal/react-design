// import { useState, useTransition } from "react";
// import Cover from "./components/cover";
// import Reviews from "./components/reviews";
// import Writer from "./components/writer";
// import { StyledButton } from "./components/styled-elements";

// function App() {
//   const [section, setSection] = useState("Cover");

//   const sectionHandler = (sec) => {
//     setSection(sec);
//   };
//   return (
//     <>
//       <StyledButton onClick={() => sectionHandler("Cover")}>
//         Book Cover
//       </StyledButton>
//       <StyledButton onClick={() => sectionHandler("Reviews")}>
//         Book Reviews
//       </StyledButton>
//       <StyledButton onClick={() => sectionHandler("Writer")}>
//         Book's Writer
//       </StyledButton>

//       {section === "Cover" ? (
//         <Cover />
//       ) : section === "Reviews" ? (
//         <Reviews />
//       ) : (
//         <Writer />
//       )}
//     </>
//   );
// }

// export default App;

import { useState, useTransition } from "react";
import Cover from "./components/cover";
import Reviews from "./components/reviews";
import Writer from "./components/writer";
import { StyledButton } from "./components/styled-elements";

function App() {
  const [section, setSection] = useState("Cover");

  const sectionHandler = (sec) => {
    setSection(sec);
  };
  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

const Button = ({ onClick, ...props }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <StyledButton
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      {...props}
    />
  );
};

export default App;
