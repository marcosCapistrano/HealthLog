import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar.js";
import Days from "./views/Days/Days";
import Meals from "./views/Meals/Meals";
import Login from "./views/Login/Login";
import Register from "./views/Login/Register";
import theme from "./ui/Theme.js";
import { ThemeProvider } from "@material-ui/core/styles";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Route exact path="/" component={Login} />
                <Switch>
                    <Route exact path="/register" component={Register} />
                </Switch>
            </ThemeProvider>
        </Router>
    </Provider>
);

export default App;
