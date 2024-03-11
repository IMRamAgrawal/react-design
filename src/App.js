import { Recursive } from "./components/recursive";
// import { SmallButton, SmallRedButton } from "./components/partial";
import { LargeRedButton, SmallButton } from "./components/partial";
const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      {/* <Recursive data={myNestedObject} /> */}
      {/* <SmallButton text={"I am small!"}/>
      <SmallRedButton text={"I am small and Red"}/> */}
      <SmallButton text={"I am small!"}/>
      <LargeRedButton text="I am large and Red"/>
    </>
  );
}

export default App;
