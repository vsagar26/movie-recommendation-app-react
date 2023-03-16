import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-around gap-8 md:gap-20 py-6 fixed w-[100vw] bg-transparent z-[100]">
        <div className="flex flex-row gap-8">
          <img
            className="ml-2 md:ml-0 mr-2 md:mr-12 h-[24px] md:h-[40px]"
            src={logo}
            alt="logo"
          />
          <ul className="flex flex-row gap-4 md:gap-8 mt-2 text-[12px] md:text-[17px] font-medium text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">TV Shows</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">Recently Addded</a>
            </li>
            <li>
              <a href="/">My List</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 md:gap-12 ">
          <div className="text-[22px] mt-2 text-white">
            <FiSearch />
          </div>
          <button className="bg-[#FF2007] text-white text-[12px] md:text-[16px] px-2 md:px-5 min-w-[70px] max-w-[100px] py-1 rounded">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
