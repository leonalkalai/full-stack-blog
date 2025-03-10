import { React, useState } from "react";
import Logo from "./../components/Logo";
import {
  Label,
  TextInput,
  Button,
  Alert,
  Spinner,
  Flowbite,
} from "flowbite-react";
import customTheme from "./../customCSS/customTheme";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"; // import useDispatch to use the reducer functions and useSelector to select the error and loading from redux
// import reducer functions
import {
  defaultSignIn,
  successSignIn,
  failSignIn,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formValues, setFormValues] = useState({}); // set initial form data to empty object
  //const [errorMessage, setErrorMessage] = useState(null); // set initial state for errors
  //const [loading, setLoading] = useState(false); // set initial state for loading
  const { loading, error: errorMessage } = useSelector((state) => state.user); // select loading and errorMessage from reducer error
  const dispatch = useDispatch(); // use the dispatcher to dispatch the reducers
  const navigate = useNavigate(); // use navigation feature

  // create method to drop error message
  const handleErrorMessage = async (formValues) => {
    const { email, password } = formValues;
    if ([email, password].some((value) => value === "" || !value)) {
      //return setErrorMessage("please fill all the required fields.");
      return dispatch(failSignIn("please fill all the required fields.")); // user dispatch to get the error from the reducer
    }
  };

  const handleDublicateErrorMessage = async (data) => {
    if (data.success === false) {
      /* instead of 
          return setErrorMessage(data.message);
        use
         dispatch(failSignIn(data.message)); 
      */
      return dispatch(failSignIn(data.message));
    }
  };

  const handleChangeValue = (event) => {
    // console.log(event.target.value); // console log event value
    //setFormValues({ ...formValues, [event.target.id]: event.target.value });
    const { id, value } = event.target; // destructure the event values
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [id]: value.trim(), // use trim to remove spaces
    }));
    //setFormValues({ ...formValues, [id]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // prevent refreshing page on submit
    const signInURL = "/api/auth/signin";
    await handleErrorMessage(formValues);
    try {
      /* instead of 
        setLoading(true); // loading on submit
        setErrorMessage(null); // reset error messages
      use 
        dispatch(defaultSignIn());
      */
      dispatch(defaultSignIn());
      const response = await fetch(`${signInURL}`, {
        method: "POST", // method of post form data
        headers: { "Content-Type": "application/json" }, // content json form
        body: JSON.stringify(formValues), // stringify json to send it
      });

      const data = await response.json(); // get the form data
      //console.log(data);
      await handleDublicateErrorMessage(data); // drop error if user exists
      // setLoading(false); // stop loading after successful submit
      if (response.ok) {
        dispatch(successSignIn(data)); // dispatch success if using redux
        navigate("/"); // navigate to home if sign in ok
      }
    } catch (error) {
      dispatch(failSignIn(error.message)); // dispatch error if using redux
      // setErrorMessage(error.message); // client error if no internet
    }
  };

  // console.log(formValues); log typed form values
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* flex-1 to get equal div widths */}
        {/* left */}
        <div className="flex-1">
          <Logo component="signUp" />
          <p className="text-lg mt-5 whitespace-break-spaces">
            Sign in using your email and password &#91; alt Google &#93; .
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@email.domain"
                id="email"
                onChange={handleChangeValue}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChangeValue}
              />
            </div>
            <Flowbite theme={{ theme: customTheme }}>
              <Button
                //  Syntax: <button disabled={true}>Disabled Button</button> [ https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/ ]
                disabled={loading}
                type="submit"
                color="secondary"
                className={`${customTheme.button.hover}`}
              >
                {/* if loading is true then load spinner and for Aria use span else show 'signup' */}
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  <span className="group-hover:text-lg transition-all duration-300">
                    Sign in
                  </span>
                )}
              </Button>
            </Flowbite>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Haven't signed up&#63;</span>
            <Link to="/sign-up" className="text-blue-500">
              Signup
            </Link>
          </div>
          {/* display error message  */}
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
