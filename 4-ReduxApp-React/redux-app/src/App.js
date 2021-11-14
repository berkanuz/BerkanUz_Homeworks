import Caps from "./Components/Caps";
import SelectedCaps from "./Components/SelectedCaps";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MemesProvider from './Contexts/MemesContext'


function App() {
  return (
    <MemesProvider>
    <Router>
      <Routes>
        <Route path = "/" element = {<Caps />} />
        <Route path = "/selected-caps/:id" element = {<SelectedCaps />} />
        </Routes>
    </Router>
    </MemesProvider>
  );
}

export default App;
