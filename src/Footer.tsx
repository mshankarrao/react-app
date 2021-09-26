import { Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },

    button:{
        marginRight: "10px"
    }
});

interface IFooterButton {
    text: string;
    onClick: () => void;
}

interface IFooterProps {
    primary: IFooterButton;
    secondary: IFooterButton;
    tertiary: IFooterButton;
}

export default function Footer(props: IFooterProps) {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Fab onClick={props.primary.onClick} variant="extended" color="primary" type="submit" className={classes.button}>{props.primary.text}</Fab>
            <Fab onClick={props.secondary.onClick} variant="extended" color="secondary" className={classes.button}>{props.secondary.text}</Fab>
            <Fab onClick={props.tertiary.onClick} variant="extended" >{props.tertiary.text}</Fab>
        </div>
    );
}