
import './App.css';
import Home from './pages/Home';
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
       <Switch> {/*used to warp multiple route and only one route will be rendered which checks in the order given */}
          <Route path="/search">
              <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
