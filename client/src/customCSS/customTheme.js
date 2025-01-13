const customTheme = {
  button: {
    color: {
      primary: "bg-white text-black relative z-10 px-1 py-1 rounded-none",
      secondary:
        "group text-sm rounded-none text-white bg-gradient-to-r from-blue-700 via-blue-950 to-blue-500 ",
    },
    hover:
      "hover:bg-gradient-to-r hover:to-blue-950 hover:via-blue-700 hover:from-blue-950 hover:text-white hover:text-lg transition-all duration-300",
  },
  link: {
    base: "flex w-auto h-13 text-4xl items-center justify-center text-black p-1 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 transition-all duration-300 rounded-none",
    hover:
      "hover:bg-gradient-to-r hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 hover:text-white",
    hoverLinkParent:
      "group hover:bg-gradient-to-r hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 sm:hover:text-white sm:bg-clip-text transition-all duration-300",
    hoverLinkChild: "sm:group-hover:text-transparent group-hover:text-white",
    active:
      "bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 sm:bg-clip-text sm:text-transparent",
    lgactive:
      "lg:bg-gradient-to-r lg:from-blue-950 lg:via-blue-700 lg:to-blue-500 lg:bg-clip-text lg:text-transparent",
    activeHamburger: "text-gray-700 bg-transparent",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-lg sm:text-sm md:font-medium",
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

export default customTheme;
