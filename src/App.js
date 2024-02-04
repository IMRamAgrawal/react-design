// import { SplitScreen } from "./components/split-screen";
import { ControlledForm } from "./components/controlled-form";
import { UncontrolledForm } from "./components/uncontrolled-form";
// import { LargeAuthorListItem } from "./components/authors/LargeListItems";
// import { SmallAuthorListItem } from "./components/authors/SmallListItems";
// import { LargeBookListItem } from "./components/books/LargeListItems";
// import { RegularList } from "./components/lists/Regular";
// import { authors } from "./data/authors";
// import { Modal } from "./components/Modal";
// import { books } from "./data/books";

// const LeftSideComp = ({title}) => {
//   return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
// };

// const RightSideComp = ({title}) => {
//   return <h2 style={{ backgroundColor: "green" }}>{title}</h2>;
// };

function App() {
  return (
    <>
    {/* <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={'Right'}/>
      <RightSideComp title={'Left'}/>
    </SplitScreen>
   
     <RegularList
     items={authors}
     sourceName={"author"}
     ItemComponent={SmallAuthorListItem}
   />
   <RegularList
     items={authors}
     sourceName={"author"}
     ItemComponent={LargeAuthorListItem}
   />
   <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal> */}
      <ControlledForm />
      <UncontrolledForm />
   </>
  );
}

export default App;

