// pages/index.js
import PrimaryButton from "@/components/utils/PrimaryButton";
import useDataFetching from "@/hooks/useDataFetching";

const HiringSection = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[JoinUs][populate]=*";
  const { completeDataJSON: joinUsData } = useDataFetching(urlToFetch);

  return (
    <div>
      {joinUsData.data && (
        <div
          style={{
            backgroundImage: `url(http://localhost:1337${joinUsData.data.attributes.JoinUs.BackgroundImage.data.attributes.formats.small.url})`,
          }}
          className="bg-cover bg-center relative"
        >
          <div
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.${joinUsData.data.attributes.JoinUs.GlassOverlayTransparency})`,
            }}
            className="px-[24px] lg:px-[48px] mt-[72px] flex flex-col gap-2 py-[12%] w-[100%] h-[100%] sm:py-[8%]"
          >
            <div className="flex flex-col gap-3 text-center sm:gap-[20px]">
              <h1 className="text-[24px] xl:text-[26px] text-skyBlue font-bold">
                {joinUsData.data.attributes.JoinUs.Title}
              </h1>

              <p className="text-[white] font-semibold md:mx-auto md:w-[60%] xl:text-[18px]">
                {
                  joinUsData.data.attributes.JoinUs.Description[0].children[0]
                    .text
                }
              </p>
            </div>

            <div className="flex justify-center">
              <PrimaryButton
                pageHref="/vagas-disponiveis"
                buttonText="Explorar Vagas"
                iconSrc="/briefcase-icon.svg"
                altText="Pasta Icone"
                buttonClassName="md:w-[60%] lg:w-[40%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiringSection;
