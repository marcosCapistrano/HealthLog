import React, { Fragment } from "react";
import Navbar from "./components/layouts/Navbar.js";
import Days from "./views/Days";
import theme from "./ui/Theme.js";
import { ThemeProvider } from "@material-ui/core/styles";

const style = {
	backgroundColor: "black"
};
const App = () => (
	<ThemeProvider theme={theme}>
		<Navbar />
		<Days />
	</ThemeProvider>
);

export default App;
