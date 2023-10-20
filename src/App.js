import { Carousel } from "./Carousel";

function App(props) {
  return (
    <div className="App">
      <Carousel items={props.items}/>
    </div>
  );
}

export default App;
