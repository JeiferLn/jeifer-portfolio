import experience from "../../data/about/Experience.json";
import education from "../../data/about/Education.json";
import skills from "../../data/about/Skills.json";
import aboutMe from "../../data/about/AboutMe.json";
import SkillsInformation from "./type-about/SkillsInformation";
import AboutMeInformation from "./type-about/AboutMeInformation";
import GeneralInformation from "./type-about/GeneralInformation";

import { useAboutSelectedStore } from "../../stores/useAboutSelectedStore";

import { motion } from "framer-motion";
import React from "react";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

interface IAboutContent {
  title: string;
  description: string;
  info: [];
}

const data: { [key: string]: any } = {
  experience: experience,
  education: education,
  skills: skills,
  aboutMe: aboutMe,
};

function AboutContent() {
  const [information, setInformation] = React.useState<IAboutContent>();

  const aboutSelected = useAboutSelectedStore((state) => state.aboutSelected);
  const pageChange = usePageTransitionStore((state) => state.pageChange);

  React.useEffect(() => {
    setInformation(data[aboutSelected]);
  }, [aboutSelected]);

  return (
    <motion.section
      key={information?.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: pageChange ? 0.7 : 0, duration: 0.8 }}
      className="w-full lg:w-[65%] mt-12 lg:mt-0 text-center lg:text-left"
    >
      <h1 className="text-4xl text-primary">{information?.title}</h1>
      <p className="text-primary-description mt-4 text-pretty">
        {information?.description}
      </p>

      <div
        className={`w-full grid gap-6 my-8
        ${
          information?.title === "Skills"
            ? "grid-cols-2 lg:grid-cols-4"
            : "lg:grid-cols-2"
        }
        `}
      >
        {information?.info?.map((item, index) =>
          information.title === "Skills" ? (
            <SkillsInformation dataInformation={item} key={index} />
          ) : information.title === "About me" ? (
            <AboutMeInformation dataInformation={item} key={index} />
          ) : (
            <GeneralInformation dataInformation={item} key={index} />
          )
        )}
      </div>
    </motion.section>
  );
}

export default AboutContent;
