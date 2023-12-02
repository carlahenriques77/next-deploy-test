import useDataFetching from "@/hooks/useDataFetching";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Quote = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[QuoteDivider][populate]=*";
  const { completeDataJSON: quoteData } = useDataFetching(urlToFetch);

  return (
    <div className="mt-[72px]">
      {quoteData.data && (
        <>
          <div
            style={{
              backgroundImage: `url(http://localhost:1337${quoteData.data.attributes.QuoteDivider.BackgroundImage.data.attributes.formats.small.url})`,
            }}
            className="bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
          >
            <div
              style={{
                backgroundColor: `rgba(0, 0, 0, 0.${quoteData.data.attributes.QuoteDivider.GlassOverlayTransparency})`,
              }}
              className="w-[100%] h-[100%] px-[24px] lg:px-[48px]"
            >
              <h1 className="text-center text-shadow-black text-[24px] xl:text-[26px] my-[12%] font-bold text-[white]">
                {quoteData.data.attributes.QuoteDivider.Quote}
              </h1>

              <Image
                style={{
                  top: "100%",
                  left: "50%",
                  transform: "translate(-50%, -45%)",
                }}
                className="absolute w-[200px] md:w-[30%]"
                src="/trail-and-ball.svg"
                alt="Bolinha de tennis"
                width="0"
                height="0"
                unoptimized
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quote;
