import React from "react";
import Logo from "./../components/Logo";
import { Label, TextInput, Button, Flowbite } from "flowbite-react";
import customTheme from "./../customCSS/customTheme";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@email.domain"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Flowbite theme={{ theme: customTheme }}>
              <Button
                type="submit"
                color="secondary"
                className={`${customTheme.button.hover}`}
              >
                <span className="group-hover:text-lg transition-all duration-300">
                  Sign up
                </span>
              </Button>
            </Flowbite>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already signed up&#63;</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
