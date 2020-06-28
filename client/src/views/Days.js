import React from "react";
import {
	Container,
	Typography,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
	Grid,
	Paper
} from "@material-ui/core";
import WeightCard from "./components/WeightCard";
import CalendarCard from "./components/CalendarCard";

export const Days = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={4} md={2}>
				<CalendarCard />
				<WeightCard />
			</Grid>
			<Grid item xs={12} sm={8} md={10}>
				<WeightCard />
			</Grid>
		</Grid>
	);
};

export default Days;
