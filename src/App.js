import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/booking/:serviceId">
              <Booking />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
