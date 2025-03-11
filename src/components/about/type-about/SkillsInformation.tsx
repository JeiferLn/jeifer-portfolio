import SkillsMenu from "../../icons/skills/SkillsMenu";
import { motion } from "framer-motion";

import React from "react";
import { usePageTransitionStore } from "../../../stores/usePageTransitionStore";

function SkillsInformation({ dataInformation }: { dataInformation: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const pageChange = usePageTransitionStore((state) => state.pageChange);
  const pageHidden = usePageTransitionStore((state) => state.pageHidden);

  return (
    <motion.div
      key={window.location.pathname}
      initial={{ opacity: 1 }}
      animate={{
        opacity: !pageHidden && !pageChange ? 1 : 0,
        transition: {
          delay: pageHidden || !pageChange ? 0 : 0.7,
          duration: pageHidden ? 0.2 : 1.1,
          ease: "easeInOut",
        },
      }}
      className="relative w-full h-[150px] flex gap-4 justify-center items-center bg-container rounded-lg hover:cursor-pointer hover:text-secondary transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -top-[20%] px-3 py-1 bg-primary text-container rounded opacity-0"
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {dataInformation}
      </motion.div>

      <SkillsMenu name={dataInformation.replace(/\s+/g, "")} />
    </motion.div>
  );
}

export default SkillsInformation;
