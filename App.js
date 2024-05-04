//xs = extra small grid point and this will apply on all device width
//grid container inside the header used to display the main layout of job display and searching bar
import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/Search Bar";
import JobCard from "./components/Job/JobCard";

export default () => {
  return <ThemeProvider theme = {theme} >
    <Header />
    <Grid container justifyContent = "center">
      <Grid item xs={10}>   
        <SearchBar />
        <JobCard /> 
        <JobCard /> 
        <JobCard /> 
        <JobCard /> 
      </Grid>
    </Grid>
  </ThemeProvider>
};
