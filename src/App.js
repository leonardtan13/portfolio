import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar/NavBar";
import Notes from "./components/Apps/Notes/Notes";


function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <NavBar />
        <Notes />

    </div>
  );
}

export default App;
