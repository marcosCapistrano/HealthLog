import React, { useState } from "react";
import {
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    DialogActions
} from "@material-ui/core";
import MealCard from "./components/MealCard";

const Meals = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = () => {
        setOpenDialog(false);
    };
    return (
        <React.Fragment>
            <Typography variant="h3">Meals:</Typography>
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
            <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenDialog(true)}
            >
                ADD
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Adicionar nova Meal</DialogTitle>
                <DialogContent>
                    <TextField label="nome"></TextField>
                    <TextField label="carbohydrates"></TextField>
                    <TextField label="proteins"></TextField>
                    <TextField label="fats"></TextField>
                </DialogContent>
                <DialogActions>
                    <Button>ADD</Button>
                    <Button onClick={handleClose}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default Meals;
