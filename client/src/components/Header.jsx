import React from "react";
import { Navbar, TextInput, Button, Flowbite } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const customTheme = {
  button: {
    color: {
      primary:
        "bg-white text-black relative z-10 px-1 py-1 relative z-10 rounded-none",
    },
  },
  link: {
    base: "flex w-auto h-13 text-4xl items-center justify-center text-black p-1 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 transition-all duration-300 rounded-none",
    hover:
      "hover:bg-gradient-to-r hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 hover:text-white",
    active:
      "bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 sm:bg-clip-text sm:text-transparent",
    lgactive:
      "lg:bg-gradient-to-r lg:from-blue-950 lg:via-blue-700 lg:to-blue-500 lg:bg-clip-text lg:text-transparent",
    activeHamburger: "text-gray-700 bg-transparent",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  toggle: {
    base: "bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500",
    icon: "h-6 w-6 shrink-0",
  },
};

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
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
          <Link
            to="#"
            className={`hidden sm:flex ${customTheme.link.base} ${customTheme.link.hover}`}
          >
            <Button
              className={`rounded-none w-12 h-12 hidden sm:flex ${customTheme.link.hover}`}
              color="primary"
            >
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
          </Link>
          <Link
            to="/sign-in"
            className={`${customTheme.link.base} ${customTheme.link.hover}`}
          >
            <Button
              color="primary"
              className="rounded-none hover:bg-gradient-to-r hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 hover:text-white"
            >
              Sign In
            </Button>
          </Link>
        </Flowbite>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className={`${
            path === "/"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/"}
          as={"div"}
        >
          <Link
            className={`${
              path === "/"
                ? customTheme.link.lgactive
                : customTheme.link.activeHamburger
            }`}
            to="/"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link
          className={`${
            path === "/about"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/about"}
          as={"div"}
        >
          <Link
            className={`${
              path === "/about"
                ? customTheme.link.lgactive
                : customTheme.link.activeHamburger
            }`}
            to="/about"
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link
          className={`${
            path === "/projects"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/projects"}
          as={"div"}
        >
          <Link
            className={`${
              path === "/projects"
                ? customTheme.link.lgactive
                : customTheme.link.activeHamburger
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
