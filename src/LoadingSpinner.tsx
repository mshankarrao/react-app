import { CircularProgress, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
    },
});


export default function LoadingSpinner() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress />
        </div>);
}