import PrimaryButton from "@/components/utils/PrimaryButton";
import useDataFetching from "@/hooks/useDataFetching";
import React from "react";

const BookNowCallToAction = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[BookNowCallToAction][populate]=*";
  const { completeDataJSON: bookNowData } = useDataFetching(urlToFetch);

  return (
    <div className="mt-[72px] flex flex-col gap-7">
      {bookNowData.data && (
        <>
          <div className="flex flex-col gap-[12px] text-center">
            <div
              className={
                "relative pt-3 pb-3 after:bg-[url(/dog-walking-paws.png)] after:content-[''] after:absolute after:w-full after:h-full after:bg-repeat-x after:-z-10 after:bg-center after:left-0 after:top-0"
              }
            >
              <h1 className="text-primaryBlue font-bold text-[28px] px-[24px] lg:px-[48px] ">
                {bookNowData.data.attributes.BookNowCallToAction.Title}
              </h1>
            </div>

            <p className="font-bold px-[24px] md:mx-auto md:w-[80%] lg:px-[48px] xl:text-[18px]">
              {
                bookNowData.data.attributes.BookNowCallToAction.Description[0]
                  .children[0].text
              }
            </p>
          </div>

          <div className="px-[24px] mt-[12px] lg:px-[48px] grid grid-cols-2 gap-2 sm:gap-[16px] sm:mx-auto md:w-[60%] lg:w-[50%]">
            <PrimaryButton
              pageHref="/formulario-reservar"
              buttonText="Reservar Agora"
              iconSrc="/calendar-icon.svg"
              altText="Calendario Icone"
              buttonClassName="!w-full mt-[0px]"
            />

            <PrimaryButton
              pageHref="/lozalizacoes"
              buttonText="Conheça Nossas Instalações"
              iconSrc="/map-icon.svg"
              altText="Mapa Icone"
              buttonClassName="!w-full !bg-midnightBlack mt-[0px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BookNowCallToAction;
