import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar/NavBar";
import VisualStudioCode from "./components/Apps/VisualStudioCode/VisualStudioCode";


function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <NavBar />
        <VisualStudioCode />
    </div>
  );
}

export default App;
