import "./App.css";
import FormTour from "./components/form";
import Tour from "./components/tour";
function App() {
  return (
    <div className="App">
      <p className="header">Горящий тур</p>
      <FormTour />
      <Tour />
    </div>
  );
}

export default App;
