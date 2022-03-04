import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
    };
    const verticalCenter = {
        display: "flex",
        alignItems: "center",
        // border: "1px solid red",
        height: 450,
    };
    return (
        <Container sx={{ flexGrow: 1, ...bannerBg }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} sx={{...verticalCenter, textAlign: "left" }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                            explicabo sint consequatur praesentium error suscipit, autem fugiat
                            voluptatem minus possimus?
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#0CB5AE" }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ ...verticalCenter }}>
                    <img style={{ width: "350px" }} src={chair} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
