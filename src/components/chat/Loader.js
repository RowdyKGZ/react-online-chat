import { Container, Grid } from "@material-ui/core";
import React from "react";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems="center"
                justify={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                ></Grid>
                <div className="lds-hourglass"></div>
            </Grid>
        </Container>
    );
};

export default Loader;
