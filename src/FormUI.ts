import { makeStyles, Theme } from "@material-ui/core";

export interface IStyleProps {
    height: number;
}

export const useFormStyles = makeStyles<Theme, IStyleProps>((_theme) => ({

    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "40px"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: ({ height }) => height,
    },

    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",

    },

    textField: {
        width: "100%"
    }
}));
