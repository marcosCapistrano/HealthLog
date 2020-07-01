import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ root: {} });

const Login = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        password2: ""
    });

    const { login, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Passwords do not match");
        } else {
            console.log(formData);
        }
    };
    return (
        <Card>
            <CardContent>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="login"
                        name="login"
                        value={login}
                        onChange={onChange}
                        required
                    ></TextField>
                    <TextField
                        label="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        required
                    ></TextField>
                    <TextField
                        label="password2"
                        name="password2"
                        type="password2"
                        value={password2}
                        onChange={onChange}
                        required
                    ></TextField>
                    <Button type="submit">REGISTER</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Login;
