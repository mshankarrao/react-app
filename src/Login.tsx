import {TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router"
import Footer from "./Footer";
import { useFormStyles } from "./FormUI";

interface ILogin {
    emailAddress: string;
    password: string;
}

export default function Login() {
    const history = useHistory();
    const props = {
        height: 300,
    }
    const classes = useFormStyles(props);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>();
    const renderButtons = () => {
        return (
            <Footer
                primary={{
                    text: "Login",
                    onClick: () => console.log("Login button is invoked"),
                }}
                secondary={{
                    text: "SignUp",
                    onClick: () => history.push("/signUp"),
                }}
                tertiary={{
                    text: "Home",
                    onClick: () => history.push("/"),
                }}
            />
        );
    };

    const renderForm = () => {

        return (
            <>
                <div className={classes.textFieldContainer}>
                    <TextField
                        {...register("emailAddress", {
                            required: true,
                            pattern: {
                                value: /\w+@\w+\.\w+/,
                                message: "Email pattern not matcing"
                            }
                        })
                        }
                        type="email"
                        placeholder="Email Address"
                        id="emailAddress"
                        label="Email Address"
                        variant="outlined"
                        error={errors.emailAddress?.message !== undefined}
                        helperText={errors.emailAddress?.message}
                        className={classes.textField}
                    ></TextField>

                </div>
                <div className={classes.textFieldContainer}>
                    <TextField
                        {...register("password", {
                            required: true,
                            minLength: { value: 4, message: "user name should be minimum 4" },
                            maxLength: {
                                value: 8, message: "password should be less than 8"
                            }

                        })
                        }
                        type="password"
                        placeholder="Password"
                        id="password"
                        label="password"
                        variant="outlined"
                        error={errors.password?.message !== undefined}
                        helperText={errors.password?.message}
                        className={classes.textField}
                    ></TextField>
                </div>
            </>
        );
    };


    return (
        <div className={classes.root}>
            <form className={classes.container}>
                <Typography variant="h4">Welcome to the Login page</Typography>
                {renderForm()}
                {renderButtons()}
            </form>
        </div>
    )
}


