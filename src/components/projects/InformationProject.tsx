import { projects } from "../../data/Projects";

import React, { useEffect } from "react";
import { useProjectStore } from "../../stores/useProjectStore";
import GithubIcon from "../icons/social-links/GithubIcon";
import LinkIcon from "../icons/LinkIcon";

import { motion } from "framer-motion";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

interface InformationProjectProps {
  id: number;
  title: string;
  description: string;
  stack: string[];
  links: string[];
}

function InformationProject() {
  const [information, setInformation] =
    React.useState<InformationProjectProps>();

  const project = useProjectStore((state) => state.projectCounter);

  const pageChange = usePageTransitionStore((state) => state.pageChange);

  useEffect(() => {
    setInformation(projects[project]);
  }, [project]);

  return (
    <motion.div
      key={project}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: pageChange ? 0.8 : 0, duration: 1 }}
      className="w-full lg:w-[50%] lg:h-[45vh] pt-6 lg:pt-0"
    >
      <p className="text-8xl font-bold text-primary mb-4">0{information?.id}</p>
      <h1 className="text-5xl font-semibold text-primary">
        {information?.title}
      </h1>
      <p className="text-lg text-primary-description my-6">
        {information?.description}
      </p>
      <div className="flex flex-wrap items-start">
        {information?.stack.map((tech, index) => (
          <span
            key={index}
            className="bg-secondary hover:bg-secondary-hover text-background text-sm px-4 py-2 rounded-full mr-3 mb-3 hover:scale-105 duration-300 select-none"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="w-full lg:w-[90%] h-0.5 bg-primary-description my-6" />

      <div className="flex gap-3 mb-6">
        {information?.links.map((link, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-full text-container bg-secondary hover:bg-secondary-hover hover:scale-105 duration-300"
          >
            <a href={link} target="_blank">
              {index === 0 ? <LinkIcon /> : <GithubIcon />}
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default InformationProject;
