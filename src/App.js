import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Home />}>
              <Route path=":teamId" element={<Home />} />
              <Route path="new" element={<Home />} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
        </div>
    );
}

export default App;
