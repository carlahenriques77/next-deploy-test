import Image from "next/image";
import React from "react";

const ServerDown = () => {
  return (
    <div className="w-[100vw] fixed bg-[white] z-[500] px-[24px] lg:px-[48px] flex flex-col gap-4 justify-center items-center h-[100vh]">
      <Image
        className="w-[230px]"
        src="/server-down-image.png"
        alt="Pilha de Legos"
        width="0"
        height="0"
        unoptimized
        priority={true}
      />

      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-crimsonRed font-bold text-[24px] xl:text-[26px] text-black50">
          Ops! Algo deu errado.
        </h1>

        <p className="font-bold text-[black]">
          Se você está vendo esta mensagem, peço desculpas pelo transtorno. Por
          favor, entre em contato comigo pelo e-mail:{" "}
          <a
            className="underline text-primaryBlue"
            href="mailto:carloshenrique.webdev@gmail.com"
          >
            carloshenrique.webdev@gmail.com
          </a>{" "}
          para que eu possa resolver este problema rapidinho. Agradeço a sua
          paciência e colaboração. Até logo!
        </p>

        <a
          className={`text-[0.5rem] hover:underline sm:text-[0.75rem] xl:text-[0.875rem] text-black75`}
          href="https://icons8.com.br/illustrations/illustration/3d-casual-life-lego-bricks-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Illustration by Icons 8 from Ouch!
        </a>
      </div>
    </div>
  );
};

export default ServerDown;
