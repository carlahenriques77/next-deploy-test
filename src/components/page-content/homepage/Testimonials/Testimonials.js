import useDataFetching from "@/hooks/useDataFetching";
import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const urlToFetch =
    "http://localhost:1337/api/content-media?populate[Testimonials][populate][TestimonialVideoFormats][populate]=*";
  const { completeDataJSON: testimonialsData } = useDataFetching(urlToFetch);

  const urlToFetchThumbnail =
    "http://localhost:1337/api/content-media?populate[Testimonials][populate][VideoThumbnail][populate]=*";
  const { completeDataJSON: thumbnailData } =
    useDataFetching(urlToFetchThumbnail);

  return (
    <div className="mt-[72px] bg-[url(/pattern.png)] bg-repeat text-[white] flex flex-col gap-9 py-[4%]">
      {testimonialsData.data && thumbnailData.data && (
        <>
          <div className="flex flex-col gap-4 xl:gap-5 px-[24px] lg:px-[48px] lg:">
            <h1 className="font-bold text-[28px]">
              {testimonialsData.data.attributes.Testimonials.Title}
            </h1>

            <p className="font-semibold xl:text-[18px]">
              {
                testimonialsData.data.attributes.Testimonials.Description[0]
                  .children[0].text
              }
            </p>
          </div>

          <div>
            <div className="px-[8px] lg:px-[48px]">
              <video
                className="w-full rounded-[24px] object-cover h-[400px] bg-midnightBlack border-[8px] border-[black] border-solid"
                controls
                poster={`http://localhost:1337${thumbnailData.data.attributes.Testimonials.VideoThumbnail.ThumbnailOptional.data.attributes.formats.small.url}`}
              >
                <source
                  src={`http://localhost:1337${testimonialsData.data.attributes.Testimonials.TestimonialVideoFormats.MP4Video.data.attributes.url}`}
                  type="video/mp4"
                />
                <source
                  src={`http://localhost:1337${testimonialsData.data.attributes.Testimonials.TestimonialVideoFormats.WebmVideo.data.attributes.url}`}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-[24px] lg:px-[48px] text-center flex flex-col gap-2 mt-[12px]">
              <a
                className="text-[0.5rem] hover:underline sm:text-[0.75rem] xl:text-[0.875rem] text-white75"
                href={
                  testimonialsData.data.attributes.Testimonials
                    .TestimonialVideoFormats.SourceLinkIfAny
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {
                  testimonialsData.data.attributes.Testimonials
                    .TestimonialVideoFormats.AttributionIfAny
                }
              </a>

              <a
                className="text-[0.5rem] hover:underline sm:text-[0.75rem] xl:text-[0.875rem] text-white75"
                href={
                  thumbnailData.data.attributes.Testimonials.VideoThumbnail
                    .SourceLinkIfAny
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {
                  thumbnailData.data.attributes.Testimonials.VideoThumbnail
                    .AttributionIfAny
                }
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
