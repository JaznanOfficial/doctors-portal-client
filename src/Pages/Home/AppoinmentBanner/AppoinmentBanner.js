import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const AppoinmentBanner = () => {
    const appointmentBanner = {
        background: `url(${bg})`,
        marginTop: 150,
        backgroundColor: "rgba(45, 58, 74, 0.9)",
        backgroundBlendMode: `darken`,
    };
    return (
        <div>
            <h2>this is appoinment</h2>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: "-110px" }}
                            src={doctor}
                            alt="img not found"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}
                    
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems:'center',
                    }}
                    >
                        <Box sx={{mx:10}}>
                            <Typography variant="h6" sx={{ color: `rgb(12,181,194)`,mb:5 }}>
                                Appoinment
                            </Typography>
                            <Typography variant="h4" sx={{ color: "white",mb:5 }}>
                                Make An Appoinment Today
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ color: "white", fontSize: 14, fontWeight: 300, mb:5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                                asperiores ea porro totam eius ex quaerat, quis animi. Dolor,
                                molestias.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: `rgb(12,181,194)`}}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppoinmentBanner;
