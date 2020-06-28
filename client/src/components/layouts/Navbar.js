import React, { useState } from "react";
import clsx from "clsx";
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	useScrollTrigger,
	Slide,
	Button,
	Drawer,
	IconButton,
	SwipeableDrawer,
	Divider,
	Link,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const drawerWidth = 140;

const useStyles = makeStyles(theme => ({
	tabContainer: {
		marginLeft: "auto"
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px"
	},
	logout: {
		fontSize: "1rem",
		fontWeight: 400,
		minWidth: 20,
		marginLeft: "50px",
		color: "white"
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	menuButton: {
		marginLeft: "auto"
	},
	hide: {
		display: "none"
	},
	drawer: {
		backgroundColor: theme.palette.primary.main
	},
	drawerItem: {
		...theme.typography.tab,
		color: "white"
	},
	drawerItemLogout: {
		backgroundColor: theme.palette.secondary.main,
		marginBottom: "25px"
	}
}));

const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();
	const iOS =
		process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const [value, setValue] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
			>
				<Tab className={classes.tab} label="Days" />
				<Tab className={classes.tab} label="Meals" />
				<Tab className={classes.tab} label="Data" />
			</Tabs>
			<Button
				variant="contained"
				color="secondary"
				className={classes.logout}
			>
				Logout
			</Button>
		</React.Fragment>
	);

	const drawerButton = (
		<IconButton
			color="inherit"
			aria-label="open drawer"
			onClick={() => setOpenDrawer(!openDrawer)}
			edge="start"
			className={clsx(classes.menuButton, {
				[classes.hide]: openDrawer
			})}
		>
			<MenuIcon />
		</IconButton>
	);

	const drawer = (
		<SwipeableDrawer
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
			anchor="right"
			open={openDrawer}
			onOpen={() => setOpenDrawer(true)}
			onClose={() => setOpenDrawer(false)}
			classes={{ paper: classes.drawer }}
		>
			<List disablePadding>
				<ListItem
					className={classes.drawerItemLogout}
					divider
					button
					component={Link}
					to="/"
					onClick={() => setOpenDrawer(false)}
				>
					<ListItemText
						className={classes.drawerItem}
						disableTypography
					>
						Logout
					</ListItemText>
				</ListItem>
				<ListItem
					divider
					button
					component={Link}
					to="/"
					onClick={() => setOpenDrawer(false)}
					selected={value === 0}
				>
					<ListItemText
						className={classes.drawerItem}
						disableTypography
					>
						Days
					</ListItemText>
				</ListItem>
				<ListItem
					divider
					button
					component={Link}
					to="/"
					onClick={() => setOpenDrawer(false)}
					selected={value === 0}
				>
					<ListItemText
						className={classes.drawerItem}
						disableTypography
					>
						Meals
					</ListItemText>
				</ListItem>
				<ListItem
					divider
					button
					component={Link}
					to="/"
					onClick={() => setOpenDrawer(false)}
					selected={value === 0}
				>
					<ListItemText
						className={classes.drawerItem}
						disableTypography
					>
						Data
					</ListItemText>
				</ListItem>
			</List>
		</SwipeableDrawer>
	);

	return (
		<React.Fragment>
			<HideOnScroll>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h5">
							HealthLog
						</Typography>
						{matches ? drawerButton : tabs}
					</Toolbar>
					{matches ? drawer : null}
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
};

export default Navbar;
