import React from "react";
import {Box, Grid, Typography, Button, makeStyles } from"@material-ui/core";

//Creating a constant skill which stores the value and then it is mapped in the grid tag for each and every template(using dummy data just for display purpose)

//Creating makeStyles function which takes theme as an argument and uses its properties such as colouring of the google(in 1st box) to the same color as that of the search button in the search bar

const skills = ["Javascript", "React JS", "Node JS"];
const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: "1px solid #e8e8e8",
        cursor: "pointer",
        transition: ".3s",

        "&:hover" :{
            boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
            borderLeft: "6px solid #4D64E4",
        },
    },

    companyName: {
        fontSize: "13.5px",
        marginTop: theme.spacing(0.6),
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.95),
        borderRadius: "8px",
        display: "inline-block",
        fontWeight: 600,
    },
    skillChip: {
        margin: theme.spacing(0.75),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
       // display: "inline-block",
        borderRadius: "5px",
        height: "50px",
        transition: "0.3s",
        cursor: "pointer",
        alignContent: "center",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },    
}));

export default props => {
    const classes = useStyles();
    return (
        <Box p = {2} mb = {0.75} className={classes.wrapper}>
            <Grid container>
                <Grid item xs>
                    <Typography variant="subtitle1">Sarva Shiksha Abhiyan Department of School Education activities </Typography>
                    <Typography className ={classes.companyName} variant="subtitle1">Google</Typography>
                </Grid>
               { /* The skills are advised to be kept inside the container, hence item container makes sure that the following item is inside the container */ }
                <Grid item container xs>
                    {skills.map((skill) => (<Grid key={skill} className ={classes.skillChip} item>{skill}</Grid>))}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                       <Typography variant="caption">25:77 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box mt = {2}>
                        <Button variant="outlined">Check</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}