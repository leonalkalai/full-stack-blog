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

export default function SignUp() {
  const [formValues, setFormValues] = useState({}); // set initial form data to empty object
  const [errorMessage, setErrorMessage] = useState(null); // set initial state for errors
  const [loading, setLoading] = useState(false); // set initial state for loading
  const navigate = useNavigate(); // use navigation feature

  // create method to drop error message
  const handleErrorMessage = async (formValues) => {
    const { username, email, password } = formValues;
    if ([username, email, password].some((value) => value === "" || !value)) {
      return setErrorMessage("please fill all the required fields.");
    }
  };

  const handleDublicateErrorMessage = async (data) => {
    if (data.success === false) {
      return setErrorMessage(data.message);
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
    const signUpURL = "/api/auth/signup";
    await handleErrorMessage(formValues);
    try {
      setLoading(true); // loading on submit
      setErrorMessage(null); // reset error messages
      const response = await fetch(`${signUpURL}`, {
        method: "POST", // method of post form data
        headers: { "Content-Type": "application/json" }, // content json form
        body: JSON.stringify(formValues), // stringify json to send it
      });

      const data = await response.json(); // get the form data
      //console.log(data);
      await handleDublicateErrorMessage(data); // drop error if user exists
      setLoading(false); // stop loading after successful submit
      if (response.ok) {
        navigate("/sign-in"); // navigate to sign-in if response is ok
      }
    } catch (error) {
      // setErrorMessage(error.message); // client error if no internet
      setLoading(false); // stop loading after successful submit
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
            Sign up using your email and password &#91; alt Google &#93; .
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChangeValue}
              />
            </div>
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
                placeholder="Password"
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
                    Sign up
                  </span>
                )}
              </Button>
            </Flowbite>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already signed up&#63;</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
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
