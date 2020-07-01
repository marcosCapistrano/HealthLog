import React from 'react'
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        marginBottom: 20
    },
    title: {
        marginBottom: 10
    }
})

const MealCard = () => {
    const classes = useStyles()
    return (

        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant='h5' className={classes.title}>Frango Assado</Typography>
                        <Typography>Calorias: 200kcal</Typography>
                        <Typography>Carboidratos: 25g</Typography>
                        <Typography>Proteinas: 30g</Typography>
                        <Typography>Gordura: 10g</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant='outlined' color='primary'>Edit</Button>
                        <Button variant='outlined' color='secondary'>Delete</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}
export default MealCard
