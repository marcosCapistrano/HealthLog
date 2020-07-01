import React, { useState } from "react";
import { Button, Paper, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginBottom: 20
    }
});

const NewMealCard = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography>Frango Assado</Typography>
            <TextField label="Quantidade" type="number"></TextField>
            <Button>ADD</Button>
        </Paper>
    );
};

export default NewMealCard;
