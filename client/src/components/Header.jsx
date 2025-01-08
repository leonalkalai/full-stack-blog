import React from "react";
import { Navbar, TextInput, Button, Flowbite } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const customTheme = {
  button: {
    color: {
      primary:
        "flex w-auto h-11 text-4xl items-center justify-center text-black outline outline-blue-700 rounded-none hover:bg-gradient-to-r hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 hover:text-white",
    },
  },
};

export default function Header() {
  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 text-white">
          Leon Kountouras
        </span>
        <span className="px-2 py-1 font-bold text-neutral-900">
          &nbsp; &#123; Blog &#125;
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search blog post"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex items-center gap-2 md:order-2">
        <Flowbite theme={{ theme: customTheme }}>
          <Button className="w-12 h-12 hidden sm:flex" color="primary">
            <IconContext.Provider
              value={{
                className: "",
                size: "2em",
              }}
            >
              <div>
                <BsFillMoonStarsFill />
              </div>
            </IconContext.Provider>
          </Button>
          <Link to="/sign-in">
            <Button color="primary" className="relative z-10 rounded-none">
              Sign In
            </Button>
          </Link>
        </Flowbite>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
