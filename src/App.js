import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./utils/theme";
import jwtDecode from "jwt-decode";
import AuthRoute from "./utils/AuthRoute";
import axios from "axios";
import User from "./pages/User";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICSTED } from "./redux/types";
import { logoutUser } from "./redux/actions/userActions";
import { getUserData } from "./redux/actions/userActions";
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL =
  "http://localhost:5000/socialape-db539/europe-west/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICSTED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
              <Route exact path="/users/:handle" component={User} />
              <Route
                exact
                path="/users/:handle/scream/:screamId"
                component={User}
              />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
