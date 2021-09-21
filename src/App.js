import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Routes />
          </>
        )}
      />
    </Router>
  );
}

export default App;
