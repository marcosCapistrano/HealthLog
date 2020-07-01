import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	title: {
		fontSize: 15
	},
	pos: {
		marginBottom: 13
	},
	date: {
		marginBottom: 20
	},
	weight: {
		fontSize: 32,
		fontWeight: 400
	}
});

const WeightCard = () => {
	const classes = useStyles();

	return (
		<Card>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
				>
					Peso
				</Typography>
				<Typography className={classes.date}>28 de Junho de 2020</Typography>
				<form>
					<TextField type='number'></TextField>
				</form>
				<Typography className={classes.weight}>Kg</Typography>
			</CardContent>
		</Card>
	);
};

export default WeightCard;
