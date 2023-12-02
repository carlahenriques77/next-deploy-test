import Attribution from "@/components/utils/Attribution";
import PrimaryButton from "@/components/utils/PrimaryButton";
import useDataFetching from "@/hooks/useDataFetching";
import Image from "next/image";
import React from "react";

const LongText = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[LongTextDescription][populate]=*";
  const { completeDataJSON: textData } = useDataFetching(urlToFetch);

  const urlToFetchImage =
    "http://localhost:1337/api/content-media?populate[LongTextDescription][populate][ThirdTextGroup][populate]=*";
  const { completeDataJSON: imageData } = useDataFetching(urlToFetchImage);

  return (
    <div className="px-[24px] lg:px-[48px] mt-[72px]">
      {textData.data && (
        <>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
              <div className="flex flex-col gap-4 xl:gap-5">
                <h1 className="text-skyBlue font-bold text-[24px] xl:text-[26px]">
                  {
                    textData.data.attributes.LongTextDescription.FirstTextGroup
                      .Title
                  }
                </h1>

                <p className="text-[16px] xl:text-[18px]">
                  {
                    textData.data.attributes.LongTextDescription.FirstTextGroup
                      .Description[0].children[0].text
                  }
                </p>
              </div>

              <div className="flex flex-col gap-4 xl:gap-5">
                <h1 className="text-skyBlue font-bold text-[24px] xl:text-[26px]">
                  {
                    textData.data.attributes.LongTextDescription.SecondTextGroup
                      .Title
                  }
                </h1>

                <p className="text-[16px] xl:text-[18px]">
                  {
                    textData.data.attributes.LongTextDescription.SecondTextGroup
                      .Description[0].children[0].text
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              <div className="w-[272px] m-auto flex flex-col gap-1 text-center sm:w-[340px] lg:order-1">
                {imageData.data && textData.data && (
                  <>
                    <Image
                      src={`http://localhost:1337${imageData.data.attributes.LongTextDescription.ThirdTextGroup.IllustrationImage.data.attributes.formats.small.url}`}
                      alt={
                        imageData.data.attributes.LongTextDescription
                          .ThirdTextGroup.ImageAlternativeTextForAccesibility
                      }
                      width="0"
                      height="0"
                      unoptimized
                      style={{ width: "100%" }}
                    />

                    <Attribution
                      sourceHref={
                        textData.data.attributes.LongTextDescription
                          .ThirdTextGroup.SourceLinkIfAny
                      }
                      attributionText={
                        textData.data.attributes.LongTextDescription
                          .ThirdTextGroup.AttributionIfAny
                      }
                      classNamesAndTextColor="text-black75 mt-[8px]"
                    />
                  </>
                )}
              </div>

              <div className="mt-[12px] flex flex-col gap-[32px] lg:mt-[0px]">
                <div className="flex flex-col gap-4 xl:gap-5">
                  <h1 className="text-skyBlue font-bold text-[24px] xl:text-[26px]">
                    {
                      textData.data.attributes.LongTextDescription
                        .ThirdTextGroup.Title
                    }
                  </h1>

                  <p className="text-[16px] xl:text-[18px]">
                    {
                      textData.data.attributes.LongTextDescription
                        .ThirdTextGroup.Description[0].children[0].text
                    }
                  </p>
                </div>

                <PrimaryButton
                  pageHref="/sobre"
                  buttonText="Leia mais sobre nós"
                  iconSrc="/book-icon.svg"
                  altText="Livro Icone"
                  buttonClassName="!mt-[0px]"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LongText;
