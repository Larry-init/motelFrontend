import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/motelLogoBlack.png";

const ListingNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleSticky = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <nav
      className={` top-0 z-10 bg-white transition-all duration-300 max-w-screen-xl xl:px-20 xl:mx-auto ${
        isSticky ? " border-b-[1.4px] border-[#f1f1f1] sticky bottom-0" : ""
      }`}
    >
      <div className=" pt-6 pb-4 flex flex-row justify-between items-center ">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-10" />
        </Link>
        <div className=" flex flex-row items-center gap-5 text-sm text-[#222222] font-medium">
          <Link className=" border-[1.3px] border-[#dddddd] px-4 py-2 rounded-full hover:border-[#222222]">
            Dashboard
          </Link>
          <Link className=" border-[1.3px] border-[#dddddd] px-4 py-2 rounded-full hover:border-[#222222]">
            Exit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ListingNavbar;
