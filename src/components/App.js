import React from "react";

//Material UI

import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";

// Header components
import Header from "./ui/Header";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}
export default App;



//the App.js file is rendering the Header.js file
