// components/common/PrimaryButton.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PrimaryButton = ({
  pageHref,
  buttonText,
  iconSrc,
  altText,
  buttonClassName,
}) => {
  return (
    <Link
      className={`bg-crimsonRed text-[white] font-bold w-[72%] p-[16px] mt-[32px] rounded hover:brightness-[80%] text-center flex flex-row gap-3 justify-center items-center xl:text-[18px] ${buttonClassName}`}
      href={pageHref}
    >
      {buttonText}

      {iconSrc && (
        <Image
          aria-hidden={true}
          className="w-[16px] xl:w-[18px]"
          src={iconSrc}
          alt={altText}
          width={0}
          height={0}
          unoptimized
        />
      )}
    </Link>
  );
};

export default PrimaryButton;
