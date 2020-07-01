import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
	root: {
		marginBottom: 40
	}
});

const CalendarCard = () => {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
		console.log(date);
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						margin="normal"
						invalidDateMessage={"Essa data não é válida!"}
						id="date-picker-dialog"
						label="Clique para selecionar o dia"
						format="dd/MM/yyyy"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date"
						}}
					/>
				</MuiPickersUtilsProvider>
			</CardContent>
		</Card>
	);
};

export default CalendarCard;
