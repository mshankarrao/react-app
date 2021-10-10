import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    container: {
        color: "red",
    }
})


interface IProps {
    message: string;
}

export default function ErrorMessage(props: IProps) {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.container}>
            {props.message}
        </Typography>
    )
}