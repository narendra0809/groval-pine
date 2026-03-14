import { NavLink } from "react-router-dom";
import pineLogo from "../assets/logos/logo.svg";
const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];
  return (
    <div>
      <div className="flex justify-center my-16">
        <img src={pineLogo} alt="logo" className="w-xs sm:w-[550px] sm:h-44" />
      </div>
      <ul className="flex justify-around md:justify-center md:gap-24">
        {navItems.map((item, idx) => (
          <NavLink key={idx} to={item.path} className="">
            <li className="text-sm sm:text-2xl font-semibold leading-normal">
              {item.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
