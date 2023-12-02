import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SlideInMenu from "./SlideInMenu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [is1024, setIs1024] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  // Function to determine if a link is active
  const isLinkActive = (pathname) => router.pathname === pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(true);
        setIs1024(true);
      } else {
        setMenuOpen(false);
        setIs1024(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="w-full px-[24px] lg:px-[48px] flex h-[72px] text-[white] z-[400] pt-3 pb-1 border-b-8 border-b-skyBlue border-solid top-0 bg-[black] sticky">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit relative after:bg-[url(/logo-arc.png)] h-[100%] after:content-[''] after:absolute after:w-[80px] after:h-[20px] after:bg-no-repeat after:mt-[4px] after:right-[70px]">
            <Link className="block h-full w-full" href={"/"}>
              <Image
                className="block h-full w-full"
                src="/logo.png"
                alt="Logo e Botão da Homepage"
                width="0"
                height="0"
                unoptimized
                priority={true}
              />
            </Link>
          </div>

          {is1024 ? (
            <SlideInMenu menuOpen={menuOpen} isLinkActive={isLinkActive} />
          ) : (
            <button
              aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
              aria-expanded={menuOpen}
              className="flex flex-col cursor-pointer lg:hidden"
              onClick={toggleMenu}
            >
              <div
                className={`transition-02s w-[35px] h-1 bg-[white] my-[3px] p-0  ${
                  menuOpen ? "hamburger-spin-positive" : ""
                }`}
              ></div>
              <div
                className={`transition-02s w-[35px] h-1 bg-[white] my-[3px] p-0 ${
                  menuOpen ? "!bg-[black]" : ""
                }`}
              ></div>
              <div
                className={`transition-02s w-[35px] h-1 bg-[white] my-[3px] p-0 ${
                  menuOpen ? "hamburger-spin-negative" : ""
                }`}
              ></div>
            </button>
          )}
        </div>
      </nav>

      {!is1024 && (
        <SlideInMenu menuOpen={menuOpen} isLinkActive={isLinkActive} />
      )}
    </>
  );
};
export default NavBar;
