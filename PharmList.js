import React, { useState } from 'react';
import { Box, Grid, Typography, Button, makeStyles} from '@material-ui/core'
import Details from "./pharmDetails.js"
import pharmData from "./dummyData.js"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: "1px solid #e8e8e8",
    },

    companyName: {
        fontSize: "13.5px",
        backgroundColor: "#F5B7B1",
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,

    },

    buttonStyle: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontsize: "14.5px",
        borderRadius: "5px",
        transition: ".3s",
        //cursor: "pointer",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
        }
    },
}));

export default (props) => {
    const classes = useStyles();
    const [newJobModal, setNewJobModal] = useState(false)


    return(
        <Box p={2} className={classes.wrapper}>

            
            {/* <Details closeModal={() => setNewJobModal(false)} newJobModal={newJobModal}/> */}
            <Grid container>
                <Grid item xs>
                    <Typography className={classes.companyName} variant="subtitle1">{props.title}</Typography>
                </Grid>

                <Grid item container direction="column"xs>
                <Typography variant="subtitle1">{props.city}</Typography>
                
                </Grid>

                <Grid item container xs>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={()=>setNewJobModal(true)}>View</Button>
                </Grid>
                {pharmData.map(pharm => <Details key={pharm.id} {...pharm} closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} />)}
            </Grid>
        </Box>
    )
}