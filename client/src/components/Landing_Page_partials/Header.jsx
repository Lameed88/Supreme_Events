import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import React from "react";
import Link  from "next/link"

function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="#" className="flex items-center text-[20px] ">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="#" className="flex items-center text-[20px] ">
          About-us
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="/contact" className="flex items-center text-[20px] ">
          Contact
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <Link href="/contact" className="flex items-center text-[20px]">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-[calc(100%+48px)] overflow-hidden  ">
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-10 lg:py-0 shadow-2xl font-mono ">
        <div className="flex items-center justify-between text-blue-700">
          <div className="flex flex-row">
            <img
              src="suplogo.png"
              alt="logo"
              width={"100px"}
              height={"100px"}
              className=" cursor-pointer "
            />
            <div className=" lg:text-[55px] md:text-[40px] text-[35px] font-extrabold cursor-pointer mt-6 ">
              UPREME
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-5">
              <Button
                // variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded"
              >
                <a href="/users/signin">sign In</a>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block  bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded "
              >
                <a href="/users/signup">Sign up</a>
              </Button>
            </div>
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
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=" bg-red-500 hover:bg-yellow-500 text-white font-bold py-1 px-1 rounded"
            >
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="  bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-1 rounded"
            >
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
export default StickyNavbar;
