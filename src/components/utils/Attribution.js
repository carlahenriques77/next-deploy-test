// components/common/Attribution.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Attribution = ({
  sourceHref,
  attributionText,
  classNamesAndTextColor,
}) => {
  return (
    <div className="text-center flex flex-col gap-2 mt-[12px]">
      <a
        className={`text-[0.5rem] hover:underline sm:text-[0.75rem] xl:text-[0.875rem] ${classNamesAndTextColor}`}
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {attributionText}
      </a>
    </div>
  );
};

export default Attribution;
