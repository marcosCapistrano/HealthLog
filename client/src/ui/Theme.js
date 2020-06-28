import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#330033"
		},
		secondary: {
			main: "#333366"
		}
	},
	typography: {
		h3: {
			fontWeight: 300
		},
		tab: {
			fontWeight: 700,
			fontSize: "1rem"
		}
	}
});

export default theme;
