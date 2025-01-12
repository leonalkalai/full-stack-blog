import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <>
      <Link
        to="/"
        className={`${
          props.component === "header"
            ? "self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            : props.component === "signUp"
            ? "font-bold dark:text-white whitespace-nowrap text-4xl flex flex-col items-center"
            : "font-bold dark:text-white text-4xl"
        }`}
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 text-white">
          Leon Kountouras
        </span>
        <span className="px-2 py-1 font-bold text-neutral-900">
          &#123;Blog&#125;
        </span>
      </Link>
    </>
  );
}
