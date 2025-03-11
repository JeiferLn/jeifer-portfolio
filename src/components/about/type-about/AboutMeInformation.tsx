import React from "react";

interface IAboutMeInformation {
  fieldName: string;
  fielValue: string;
}

function AboutMeInformation({
  dataInformation,
}: {
  dataInformation: IAboutMeInformation;
}) {
  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      <span className="text-primary-description">
        {dataInformation.fieldName}
      </span>
      <p className="text-primary">{dataInformation.fielValue}</p>
    </div>
  );
}

export default AboutMeInformation;
