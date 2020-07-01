import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({ root: {} });

const Register = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <TextField label="login"></TextField>
                <TextField label="password"></TextField>
                <Button>LOGIN</Button>
                <Button component={Link} to="/register">
                    REGISTER
                </Button>
            </CardContent>
        </Card>
    );
};

export default Register;
