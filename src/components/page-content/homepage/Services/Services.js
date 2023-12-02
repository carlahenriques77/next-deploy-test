import Attribution from "@/components/utils/Attribution";
import PrimaryButton from "@/components/utils/PrimaryButton";
import useDataFetching from "@/hooks/useDataFetching";
import Image from "next/image";
import React from "react";

const Services = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[ServicesSection][populate][ServicesText][populate]=*";
  const { completeDataJSON: servicesData } = useDataFetching(urlToFetch);

  return (
    <div className="px-[24px] lg:px-[48px] mt-[72px] flex flex-col gap-4 md:gap-8">
      {servicesData.data && (
        <h1 className="text-primaryBlue font-bold text-[28px]">
          {servicesData.data.attributes.ServicesSection.SectionTitle}
        </h1>
      )}

      <div className="flex flex-col gap-8 md:gap-12">
        {servicesData.data &&
          servicesData.data.attributes.ServicesSection.ServicesText.map(
            (mapItem, itemIndex) => (
              <div
                className={`flex flex-col gap-8 md:grid md:gap-8 md:items-center ${
                  itemIndex % 2 === 0
                    ? "md-grid-cols-2fr-1fr"
                    : "md-grid-cols-1fr-2fr"
                }`}
                key={mapItem.id}
              >
                <div
                  className={`flex flex-col gap-3 md:order-1 xl:gap-4 ${
                    itemIndex % 2 === 0 ? "md:order-[1]" : "md:order-[0]"
                  }`}
                >
                  <h2 className="text-skyBlue font-bold text-[24px] xl:text-[26px]">
                    {mapItem.Title}
                  </h2>

                  <p className="xl:text-[18px]">{mapItem.Description}</p>

                  <PrimaryButton
                    pageHref="/servicos"
                    buttonText="Veja mais sobre"
                    iconSrc="/paw-icon.svg"
                    altText="Pata de cachorro Icone"
                    buttonClassName="xl:mt-[24px]"
                  />
                </div>

                <div>
                  <Image
                    className="rounded-[8px]"
                    src={`http://localhost:1337${mapItem.Image.data.attributes.formats.small.url}`}
                    alt={mapItem.ImageAlternativeTextForAccesibility}
                    width="0"
                    height="0"
                    unoptimized
                    style={{ width: "100%" }}
                  />

                  <div className="text-center mt-2">
                    <Attribution
                      sourceHref={mapItem.ImageSourceIfAny}
                      attributionText={mapItem.ImageAttributionIfAny}
                      classNamesAndTextColor="text-black75"
                    />
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Services;
