import Footer from "./Footer";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px"

    },
});

export default function Profile() {
    const userContext = useContext(UserContext);
    const history = useHistory();
    const styles = useStyles();

    const signOut = async () => {
        await firebase.auth().signOut();
        history.push("/");
    }
    const renderButtons = () => {
        return (
            <Footer
                primary={{
                    text: "Sign Out",
                    onClick: signOut,
                }}
                secondary={{
                    text: "Home",
                    onClick: () => history.push("/"),
                }}
                tertiary={{
                    text: "Back",
                    onClick: () => history.goBack(),
                }}
            />
        );
    };

    const renderProfile = () => {
        return (
            <>
                <Typography variant="h5">
                    {userContext?.displayName}
                </Typography>
                <Typography variant="h5">
                    {userContext?.email}
                </Typography>
                <Typography variant="h5">
                    {userContext?.uid}
                </Typography>
            </>
        )
    }

    return (
        <>
            <div className={styles.container}>
                <Typography variant="h3">
                    Welcome to the profile page
                </Typography>
                {renderProfile()}
                {renderButtons()}
            </div>
        </>
    );
}