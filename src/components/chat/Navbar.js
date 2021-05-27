import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export default function Navbar() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ? (
                        <Button
                            onClick={() => auth.signOut()}
                            variant={"outlined"}
                        >
                            Логаут
                        </Button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
