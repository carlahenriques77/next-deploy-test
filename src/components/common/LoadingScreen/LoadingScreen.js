import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  // Array of random loading messages
  const loadingMessages = [
    "Preparando um conteúdo exclusivo. Aguarde!",
    "Aguarde enquanto montamos um ambiente cheio de surpresas.",
    "Aguarde enquanto preparamos um conteúdo especial para você.",
    "Montando um playground perfeito para os momentos felizes dos seus pets.",
  ];

  // State to store the selected loading message
  const [randomMessage, setRandomMessage] = useState("");

  // Function to set a random message when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    setRandomMessage(loadingMessages[randomIndex]);
  }, []);

  return (
    <div className="w-[100vw] fixed bg-[black] z-[500] px-[24px] lg:px-[48px] flex flex-col gap-4 justify-center items-center h-[100vh]">
      <video
        className="w-[100px] bg-[black] p-[12px] rounded-[12px] border-solid border-white75 border-[1px]"
        autoPlay
        loop
        muted
        speed="0.5"
      >
        <source src="/loading-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-bold text-[24px] xl:text-[26px] text-white75">
          Carregando Conteúdo do Strapi<span className="loading-dots"></span>
        </h1>

        <p className="font-bold text-white75">{randomMessage}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
