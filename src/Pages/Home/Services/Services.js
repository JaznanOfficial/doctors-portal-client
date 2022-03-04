import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import caviti from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
    {
        name: "Fluoride Treatment",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ut mollitia quasi quisquam autem ea repellat asperiores unde iusto et!",
        img: fluoride,
    },
    {
        name: "Caviti Filling",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ut mollitia quasi quisquam autem ea repellat asperiores unde iusto et!",
        img: caviti,
    },
    {
        name: "Teeth Whitening",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ut mollitia quasi quisquam autem ea repellat asperiores unde iusto et!",
        img: whitening,
    },
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography  sx={{ color: 'success.main', fontWeight: 500, m: 2 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service) => (
                        <Service key={service.name} service={service}></Service>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
