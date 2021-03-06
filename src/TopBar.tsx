import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  InputBase,
  Theme,
  alpha,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./UserProvider";


const useStyles = makeStyles<Theme>((theme: Theme) => ({
  searchContainer: {
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: "100%",
  },
  searchIcon: {
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    color: "white",
    width: "100%",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const history = useHistory();
  const userContext = useContext(UserContext);
  const isUserExist = userContext && userContext.uid;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase className={classes.searchBox} placeholder="Search…" />
          </div>
          {!isUserExist && <Button color="inherit" onClick={() => history.push("/Login")}>Login</Button>}
          {!isUserExist && <Button color="inherit" onClick={() => history.push("/SignUp")}>SignUp</Button>}
          {isUserExist && <Button color="inherit" onClick={() => history.push("/profile")}>Profile</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
