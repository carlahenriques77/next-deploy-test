import useDataFetching from "@/hooks/useDataFetching";
import React, { useEffect, useState } from "react";

const VideoHero = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[HeroSection][populate][HeroVideosFormats][populate]=*";
  const { completeDataJSON: videoData } = useDataFetching(urlToFetch);

  return (
    <>
      <div className="mb-[72px]">
        <div className="relative after:content-[''] after:absolute after:bg-[length:28px] after:w-full after:h-[8px] after:bg-[url(/vector-hill.png)] after:bg-repeat-x after:-bottom-[2px]">
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover h-[200px] bg-midnightBlack sm:h-[280px] md:h-[328px] lg:h-[400px]"
          >
            {videoData.data && (
              <>
                <source
                  src={`http://localhost:1337${videoData.data.attributes.HeroSection.HeroVideosFormats.MP4VideoForTheHeroSection.data.attributes.url}`}
                  type="video/mp4"
                />
                <source
                  src={`http://localhost:1337${videoData.data.attributes.HeroSection.HeroVideosFormats.WebmVideoForTheHeroSection.data.attributes.url}`}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </>
            )}
          </video>
        </div>

        {videoData.data && (
          <div className="px-[24px] lg:px-[48px] text-center mt-[8px]">
            <a
              className="text-[0.5rem] hover:underline sm:text-[0.75rem] xl:text-[0.875rem] font-semibold text-black75"
              href={
                videoData.data.attributes.HeroSection.HeroVideosFormats
                  .VideoSourceLinkIfAny
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                videoData.data.attributes.HeroSection.HeroVideosFormats
                  .VideoAttributionIfAny
              }
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoHero;
