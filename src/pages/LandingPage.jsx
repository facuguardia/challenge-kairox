import { Link } from "react-router-dom";
// Components
import MenuMobile from "../components/MenuMobile";
// Images
import ImgLanding from "../assets/landing.png";
import ImgLogo from "../assets/logo.png";
// Icons
import { SiLinkedin, SiGithub, SiInternetexplorer } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";

function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Menu Mobile */}
      <div>
        <MenuMobile />
      </div>

      {/* Navbar */}
      <div className="p-4">
        <nav className="flex justify-between items-center">
          <div>
            <img src={ImgLogo} alt="Logo Star Wars" className="w-24" />
          </div>
          <div className="pr-4">
            <ul className="flex items-center gap-7 text-white text-xl">
              <Link
                to={"https://www.linkedin.com/in/facu-guardia/"}
                target="_blank"
                className="hover:text-blue-400"
              >
                <SiLinkedin />
              </Link>
              <Link
                to={"https://github.com/facuguardia"}
                target="_blank"
                className="hover:text-blue-400"
              >
                <SiGithub />
              </Link>
              <Link
                to={"https://facuguardia.netlify.app/"}
                target="_blank"
                className="hover:text-blue-400"
              >
                <SiInternetexplorer />
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main */}
      <div className="flex justify-between items-center px-7 pb-5">
        <div className="flex flex-col justify-center items-center md:pt-[50%] lg:pt-[0%]">
          <h1 className="text-[80px] text-white text-center font-semibold pb-5">
            Come to the dark side
          </h1>
          <Link to={"https://bit.ly/3yxOSR4"} target="_blank">
            <button className="bg-[#39ff14] text-black font-semibold py-2 px-5 rounded-full hover:bg-blue-400 transform hover:scale-125 transition-all">
              Contact me
            </button>
          </Link>
        </div>
        <div>
          <img
            src={ImgLanding}
            alt="Nave Star Wars"
            className="hidden lg:block "
          />
        </div>
        <div>
          <ul className="hidden lg:flex flex-col justify-center gap-4 text-2xl text-[#39ff14] font-medium ">
            <Link
              to={"/home"}
              className="hover:text-blue-400 flex items-center gap-2 transform hover:scale-125 transition-all"
            >
              <IoIosArrowForward /> Home
            </Link>
            <Link
              to={"/character-list"}
              className="hover:text-blue-400 flex items-center gap-2 transform hover:scale-125 transition-all"
            >
              <IoIosArrowForward /> Favorite
            </Link>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 left-16 md:right-3 md:flex md:justify-center bg-black">
        <footer>
          <p className="text-gray-300/50">
            ©Facu Guardia for Kairox Lab - 2023
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
