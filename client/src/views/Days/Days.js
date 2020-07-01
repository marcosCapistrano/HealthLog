import React, { useState } from "react";
import {
    Container,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Paper
} from "@material-ui/core";
import WeightCard from "./components/WeightCard";
import CalendarCard from "./components/CalendarCard";
import MealCard from "./components/MealCard";
import AddMealDialog from "./components/AddMealDialog";
import NewMealCard from "./components/NewMealCard.js";

export const Days = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={2}>
                <CalendarCard />
                <WeightCard />
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
                <MealCard />
                <MealCard />
                <MealCard />
                <MealCard />
                <MealCard />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setOpenDialog(true);
                    }}
                >
                    ADD
                </Button>
                <Dialog open={openDialog} onClose={handleClose} scroll="body">
                    <DialogTitle>Escolha a meal</DialogTitle>
                    <DialogContent>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                        <NewMealCard></NewMealCard>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default Days;
