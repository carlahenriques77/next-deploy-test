import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useDataFetching from "@/hooks/useDataFetching";

const Footer = () => {
  const urlToFetch =
    "http://localhost:1337/api/site-footer?populate[FooterSocials][populate][SocialsRepeatable][populate]=*";
  const { completeDataJSON: footerData } = useDataFetching(urlToFetch);

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
    <div>
      <div className="px-[24px] lg:px-[48px] flex flex-col text-[white] z-[200] pt-1 pb-[32px] border-t-8 border-t-skyBlue border-solid bg-[black]">
        <div className="w-full flex flex-col">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div
              className={
                "relative after:bg-[url(/logo-arc.png)] h-[100%] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:-left-3 after:top-[-52px] after:scale-y-[-1]"
              }
            >
              <Link href={"/"}>
                <Image
                  className="w-[137px]"
                  src="/logo.png"
                  alt="Logo Site"
                  width="0"
                  height="0"
                  unoptimized
                  priority={true}
                />
              </Link>
            </div>

            <ul className="flex items-center gap-2 mt-[16px] sm:mt-0">
              {footerData.data &&
                footerData.data.attributes.FooterSocials.SocialsRepeatable.map(
                  (mapItem) => (
                    <li key={mapItem.id}>
                      <Link
                        className="block bg-[white] pt-[6px] pb-[6px] pr-1 pl-1 rounded-[4px] w-[32px] hover:brightness-[80%]"
                        href={mapItem.Link}
                      >
                        <Image
                          className="w-full h-[20px]"
                          src={`http://localhost:1337${mapItem.Icon.data.attributes.url}`}
                          alt={mapItem.ImageAlternativeTextForAccesibility}
                          width="0"
                          height="0"
                          unoptimized
                        />
                      </Link>
                    </li>
                  )
                )}
            </ul>
          </div>

          <ul className="flex flex-col gap-4 justify-center items-center mt-[28px] pb-[16px] md:flex-row md:flex-wrap">
            {linksData.map((mapItem, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  className="block font-bold underline text-skyBlue py-2 px-2 text-[20px] hover:text-primaryBlue"
                  href={mapItem.href}
                >
                  {mapItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!footerData.data && (
        <div className="w-full bg-midnightBlack p-[32px] text-center text-[white] font-bold">
          <p>
            © {new Date().getFullYear()} Doggy Daycare. Todos direitos
            reservados.
          </p>
        </div>
      )}

      {footerData.data && (
        <div className="w-full bg-midnightBlack p-[32px] text-center text-[white] font-bold">
          <p>
            © {new Date().getFullYear()}{" "}
            {
              footerData.data.attributes.FooterSocials.CopyrightText[0]
                .children[0].text
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
