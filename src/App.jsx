import Ingredients from "./ingredientsComponents/ingredients";
import IngredientsInfoHelper from "./ingredientsComponents/ingredients-info-helper";

function App() {
  return (
    <>
      <Ingredients IngredientsInfoHelper={<IngredientsInfoHelper/>}/>
    </>
  );
}

export default App;
