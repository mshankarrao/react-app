import { TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { useFormStyles } from "./FormUI";
import firebase from "firebase/app";
import "firebase/auth";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

export interface ISignUp {
    firstName: string,
    lastName: string,
    emailAddress: string;
    password: string;
}

export default function SignUp() {
    const history = useHistory();
    const props = {
        height: 500,
    }
    const classes = useFormStyles(props);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignUp>();
    const [errorMessage, setErrorMessage] = useState("");
    const renderButtons = () => {
        return (
            <Footer
                primary={{
                    text: "Sign Up",
                    onClick: () => history.push("/signUp"),
                }}
                secondary={{
                    text: "Login",
                    onClick: () => history.push("/login"),
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
                        {...register("firstName", {
                            required: true,
                            minLength: { value: 4, message: "firstName should be minimum 4" },
                            maxLength: {
                                value: 8, message: "firstName should be less than 8"
                            }

                        })
                        }
                        type="text"
                        placeholder="firstName"
                        id="firstName"
                        label="firstName"
                        variant="outlined"
                        error={errors.firstName?.message !== undefined}
                        helperText={errors.firstName?.message}
                        className={classes.textField}
                    ></TextField>
                </div>

                <div className={classes.textFieldContainer}>
                    <TextField
                        {...register("lastName", {
                            required: true,
                            minLength: { value: 4, message: "lastName should be minimum 4" },
                            maxLength: {
                                value: 8, message: "password should be less than 8"
                            }

                        })
                        }
                        type="text"
                        placeholder="lastName"
                        id="lastName"
                        label="lastName"
                        variant="outlined"
                        error={errors.lastName?.message !== undefined}
                        helperText={errors.lastName?.message}
                        className={classes.textField}
                    ></TextField>
                </div>



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

    const onFormSubmit = async (signUp: ISignUp) => {
        try {
            const credentials = await firebase.auth().createUserWithEmailAndPassword(signUp.emailAddress, signUp.password);
            credentials.user?.updateProfile({ displayName: `${signUp.firstName} ${signUp.lastName}` });
            history.push("/");
            return true;
        }
        catch (error: any) {
            return setErrorMessage(error.message);
        }
    }

    return (
        <div className={classes.root}>
            <form className={classes.container} onSubmit={handleSubmit(onFormSubmit)}>
                <Typography variant="h4">Welcome to the SignUp page</Typography>
                {renderForm()}
                {renderButtons()}
                {errorMessage && <ErrorMessage message={errorMessage} />}
            </form>
        </div>
    )
}
