import { useState } from "react";
// import { SplitScreen } from "./components/split-screen";
import { ControlledForm } from "./components/controlled-form";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { ControlledModal } from "./components/controlled-modal";
import { UncontrolledModal } from "./components/uncontrolled-modal";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";
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
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const StepOne = ({ next }) => {
    return (
      <>
        <h1>Step #1: Enter your name</h1>
        <button onClick={() => next({ name: "TestName" })}>Next</button>
      </>
    );
  };
  const StepTwo = ({ next }) => {
    return (
      <>
        <h1>Step #2: Enter your age</h1>
        <button onClick={() => next({ age: 28 })}>Next</button>
      </>
    );
  };
  const StepThree = ({ next }) => {
    return (
      <>
        <h1>Step #3: Enter your country</h1>
        <button onClick={() => next({ country: "Poland" })}>Next</button>
      </>
    );
  };
  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };
  const StepFour = ({ next }) => {
    return (
      <>
        <h1>Step #4: Enter your country</h1>
        <button onClick={() => next({ country: "Poland" })}>Next</button>
      </>
    );
  };
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
      {/* <ControlledForm />
      <UncontrolledForm /> */}
      {/* <button onClick={() => setShowModal(!showModal)}>
        {" "}
        {showModal ? "Hide Modal" : "Show Modal"}{" "}
      </button>
      <ControlledModal shouldShow={showModal} close={() => setShowModal(false)}>
        <h1>I am the body of the modal!</h1>
      </ControlledModal> */}
       {/* <UncontrolledFlow 
       onDone={(data) => {
        console.log(data);
        alert("Onboarding Flow Done!");
      }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}
      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
   </>
  );
}

export default App;

