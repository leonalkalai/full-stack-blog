import React from "react";
import { Navbar, TextInput, Button, Flowbite } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Logo from "./Logo";
import customTheme from "./../customCSS/customTheme";

export default function Header() {
  const path = useLocation().pathname; // get path
  return (
    <Navbar className="border-b-2">
      <Logo component="header" />
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
          className={`text-base ${customTheme.link.hoverLinkParent} ${
            path === "/"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/"}
          as={"div"}
        >
          <Link
            className={`${customTheme.link.hoverLinkChild} ${
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
          className={`text-base ${customTheme.link.hoverLinkParent} ${
            path === "/about"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/about"}
          as={"div"}
        >
          <Link
            className={`${customTheme.link.hoverLinkChild} ${
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
          className={`text-base ${customTheme.link.hoverLinkParent}  ${
            path === "/projects"
              ? customTheme.link.active
              : customTheme.link.activeHamburger
          }`}
          active={path === "/projects"}
          as={"div"}
        >
          <Link
            className={`${customTheme.link.hoverLinkChild} ${
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
