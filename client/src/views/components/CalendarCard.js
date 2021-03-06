import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({});

const CalendarCard = () => {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
		console.log(date);
	};

	return (
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
	);
};

export default CalendarCard;
