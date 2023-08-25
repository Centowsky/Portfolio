import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function NavbarHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium transition hover:text-blue-900 hover:underline hover:scale-110"
      >
        <Link to="/" className="flex items-center">
          Strona główna
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          O mnie
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/projects" className="flex items-center">
          Projekty
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/contact" className="flex items-center">
          Kontakt
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full py-1 px-4 lg:px-8 lg:py-3 bg-slate-400 rounded-b-lg text-white fixed top-0 w-screen">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Centowsky
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
