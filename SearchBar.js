import React from "react"
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";
import pharmDetails from "./pharmDetails.js"
const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        backgroundColor: "fff",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *": {
        flex: 1,
        height: "45px",
        margin: "8px",
    },
    },
});
export default (props) => {
    const classes = useStyles();

    return(
        <Box className={classes.wrapper}>
            <Select variant="filled" defaultValue="City">
                <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Madurai">Madurai</MenuItem>
                <MenuItem value="City">City</MenuItem>
            </Select>
            <Select variant="filled" defaultValue="State">
                <MenuItem value="TamilNadu">Tamil Nadu</MenuItem>
                <MenuItem value="AndraPradesh">Andra Pradesh</MenuItem>
                <MenuItem value="State">State</MenuItem>
            </Select>
            <Button variant="contained" onClick={()=><pharmDetails/>}>Search</Button>
        </Box>

    )
}