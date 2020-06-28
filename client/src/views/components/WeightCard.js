import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	title: {
		fontSize: 15
	},
	pos: {
		marginBottom: 13
	},
	weight: {
		fontSize: 52,
		fontWeight: 401
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
				<Typography>28 de Junho de 2020</Typography>
				<Typography className={classes.weight}>
					67.6kg
				</Typography>
			</CardContent>
		</Card>
	);
};

export default WeightCard;
