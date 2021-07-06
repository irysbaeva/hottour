import "./App.css";
import FormTour from "./components/form"
import Tour from "./components/tour"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hot tour</p>
      <FormTour/>
      <Tour/>
      </header>
    </div>
  );
}

export default App;
