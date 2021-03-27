import React from "react";
import { Box, Button, Grid, FilledInput, IconButton,  Select, MenuItem,  Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles } from '@material-ui/core'
import { Close as CloseIcon} from '@material-ui/icons'
import pharmData from "./dummyData.js"
import Location from '@material-ui/icons/LocationOn';
import Mail from '@material-ui/icons/Drafts';
import Phone from '@material-ui/icons/Phone';
const useStyles = makeStyles(theme => ({
    skillChip: {
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
}))
export default (props) => {
 const classes = useStyles();

    return(
       
        
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Grid item xs={6}>
                        <Typography>{props.title}</Typography>
                </Grid>
                <IconButton onClick={props.closeModal}>
                    <CloseIcon />
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing = {2}>
                    
                    <Grid item xs={12}>
                        <Typography><Location />&nbsp;&nbsp;Location:&nbsp;&nbsp;&nbsp;{props.city} ,{props.state}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography><Mail />&nbsp;&nbsp;email: {props.link}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography><Phone />&nbsp;&nbsp;phone: {props.phone}</Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        
                    </Grid>           
                </Grid>
        
        </DialogContent>
        
        </Dialog>
        
    )
    
}