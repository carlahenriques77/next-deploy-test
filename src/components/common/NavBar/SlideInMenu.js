// SlideInMenu.js

import React from "react";
import Link from "next/link";

const SlideInMenu = ({ menuOpen, isLinkActive }) => {
  const linksData = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Sobre",
      href: "/sobre",
    },
    {
      text: "Contato",
      href: "/sobre",
    },
    {
      text: "Vagas",
      href: "/sobre",
    },
    {
      text: "Reservarção",
      href: "/sobre",
    },
    {
      text: "Localizações",
      href: "/sobre",
    },
  ];

  return (
    <div
      className={`slide-in hidden top-0 fixed w-full h-[100vh] bg-black75 z-[200] lg:static lg:h-[100%] lg:justify-end lg:flex-wrap lg:w-fit ${
        menuOpen ? "!block lg:!flex" : ""
      }`}
    >
      <ul className="pt-[100px] flex flex-col items-center gap-3 text-[20px] overflow-auto max-h-[400px] lg:flex-row lg:pt-[0px] lg:gap-4">
        {linksData.map((mapItem, itemIndex) => (
          <li key={itemIndex} className="w-full lg:w-fit">
            <Link
              className={`py-[8px] pl-[24px] border-b-[1px] border-t-[1px] border-white50 hover:border-skyBlue border-solid active:text-primaryBlue active:border-primaryBlue hover:text-skyBlue block w-full text-lightBlue lg:border-none lg:p-[12px] lg:font-bold lg:text-white75 lg:hover:text-[white] ${
                isLinkActive(mapItem.href)
                  ? "!text-skyBlue !border-skyBlue lg:!text-[white]"
                  : ""
              }`}
              href={mapItem.href}
            >
              {mapItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideInMenu;
