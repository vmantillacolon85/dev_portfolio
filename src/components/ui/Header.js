// import React from "react";
// import Logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// // ==========
// // Material UI-CORE
// // ==========
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Tab from "@material-ui/core/Tab";
// // import Button from "@material-ui/core/Button";
//
// // ==========
// // MUI-STYLES
// // ==========
//
// import { useTheme, makeStyles } from "@material-ui/core/styles";
// //
// // ===============
// // Header component
// // ================
// export default function Header(props) {
//
//     const routes = [
// 		{ id: 0, name: "Home", link: "/" },
// 		{ id: 1, name: "About", link: "/about" },
// 		{ id: 2, name: "Contact", link: "/contact" },
// 	];
// // ============
// // Selected Tab
// // ============
// // =============
// // Tabs
// // =============
//
// const tabs = (
// 		<React.Fragment>
// 			<Tabs>
// 				{routes.map((route, id) => (
// 					<Tab
// 						component={Link}
// 						to={"#"}
// 						label={route.name}
// 						key={`${route}.${id}`}
// 					></Tab>
// 				))}
// 			</Tabs>
//
//             <Button component={Link} to={"#"}>Resume</Button>
// 		</React.Fragment>
// 	)
// 	return (
// 		<React.Fragment>
// 			<AppBar position="fixed">
// 				<h1>Victor Mantilla Colon</h1>
//                 {tabs}
// 			</AppBar>
// 		</React.Fragment>
// 	);
// }


// =========================


import React from "react";

// Material UI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/images/logo.png"

const styles = makeStyles((theme) => ({
	toolBarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "4em",
	},
  logo: {
      marginLeft: "2rem",
      width: "6rem",
  },
  tabContainer: {
      marginLeft: "auto",
  }
}));
// Header Component

export default function Header() {
  const classes = styles()
  const theme = useTheme()

  const routes = [
		{
			name: "About",
			link: "#about",
		},
		{ name: "Contact", link: "#contact" },
    { name: "Experience", link: "#experience"}
    ];

    const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
				{routes.map((route, id) => {
					return (
						<Tab value={route.id} label={route.name} key={`${route}.${id}`}>
							{route.name}
						</Tab>
					);
				})}
			</div>
		</React.Fragment>
	);


	return (
		<React.Fragment>
			<AppBar position="fixed" color="secondary">
				<Toolbar disableGutters>
        <Button disableRipple>
          <img src={Logo} className={classes.logo} alt={"logo"} />
        </Button>
        {tabs}
        </Toolbar>
			</AppBar>
      <div className={classes.toolBarMargin}></div>
		</React.Fragment>
	);
}




//the Header.js file is being rendered by the App.js file ///
