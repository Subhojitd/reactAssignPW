import "./App.css";
import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";

function App() {
  
  const handleClick = () => {
    console.log("Button clicked !");
  };

  const listItems = ['Node.js','react', 'Tailwind', 'Html','Mongodb']

  return (
    <>
      <Header title="My WebApp" />
      <Person name="Subhajit" age="21" />
      <Button text="Press Me !" onClick={handleClick} />
      <List items ={listItems} />
      <Counter/>
    </>
  );
}

export default App;
