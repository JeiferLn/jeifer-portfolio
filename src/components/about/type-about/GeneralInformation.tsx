import React from "react";

interface IGeneralInformation {
  date: string;
  title: string;
  description: string;
}

function GeneralInformation({
  dataInformation,
}: {
  dataInformation: IGeneralInformation;
}) {
  return (
    <div className="w-full h-[240px] lg:h-auto flex flex-col justify-center lg:justify-start bg-container rounded-lg py-6 px-6 text-center lg:text-start">
      <h3 className="text-secondary mb-2">{dataInformation.date}</h3>
      <h2 className="text-xl text-primary">{dataInformation.title}</h2>
      <p className="text-primary-description mt-4 text-pretty text-sm">
        {dataInformation.description}
      </p>
    </div>
  );
}

export default GeneralInformation;
