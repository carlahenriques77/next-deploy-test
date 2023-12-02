import useDataFetching from "@/hooks/useDataFetching";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SiteFeatures = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[SiteFeatures][populate][FeaturesRepetable][populate]=*";
  const { completeDataJSON: featuresData } = useDataFetching(urlToFetch);

  return (
    <div className="px-[24px] lg:px-[48px] gap-11 grid relative md:justify-items-center lg:grid-cols-3 lg:gap-7">
      {featuresData.data && (
        <>
          <Image
            className="!absolute w-full md:!w-[50%]"
            src="/dog-paws.png"
            alt="Marcas de patas de cachorro"
            width="0"
            height="0"
            unoptimized
            priority={true}
          />
          {featuresData.data.attributes.SiteFeatures.FeaturesRepetable.map(
            (mapItem) => (
              <div
                className="grid justify-items-center text-center gap-2 z-[100] h-fit md:gap-3"
                key={mapItem.id}
              >
                <h3 className="text-primaryBlue text-2xl font-bold uppercase xl:text-[26px]">
                  {mapItem.FeatureTitle}
                </h3>

                <div className="p-4 rounded-[100%] border-[3px] border-solid border-primaryBlue bg-midnightBlack">
                  <Image
                    className="h-[48px] w-[48px] xl:h-[60px] xl:w-[60px]"
                    src={`http://localhost:1337${mapItem.FeatureIcon.data.attributes.url}`}
                    alt={mapItem.ImageAlternativeTextForAccesibility}
                    width="48"
                    height="48"
                    unoptimized
                  />
                </div>

                <p className="font-medium xl:text-[18px]">
                  {mapItem.FeatureDescription}
                </p>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default SiteFeatures;
