import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <section id="hero" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Daniel Shan Balico Graduation Picture"
          />

          {/* =========== TOOLTIP TEXT =========== */}
          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%] text-center md:text-left">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
            <div className="mt-6 flex  justify-between md:justify-start md:space-x-8 items-center text-center md:px-0  px-12 py-2">
        {/* =========== FACEBOOK =========== */}
        <a
          href={user_info.socials.facebook}
          className=" text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-3xl text-red-800 dark:text-red-500" />
        </a>

        {/* =========== X =========== */}
        <a
          href={user_info.socials.twitter}
          className=" text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 "
        >
          <FaSquareXTwitter className="self-center text-3xl text-red-800 dark:text-red-500" />
        </a>
        
        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className=" text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 "
        >
          <FaInstagram className="self-center text-3xl text-red-800 dark:text-red-500" />
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className=" text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
        >
          <FaLinkedin className="self-center text-3xl text-red-800 dark:text-red-500" />
        </a>
          {/* =========== GITHUB =========== */}
          <a
          href={user_info.socials.github}
          className=" text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
        >
          <FaGithub className="self-center text-3xl text-red-800 dark:text-red-500" />
        </a>
      </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Daniel Shan Balico Graduation Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
