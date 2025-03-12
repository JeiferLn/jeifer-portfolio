import { Images } from "../../data/Images";

import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useProjectStore } from "../../stores/useProjectStore";
import Arrow from "../icons/Arrow";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

function SliderProject() {
  const [direction] = React.useState([0]);

  const activeImageIndex = useProjectStore((state) => state.projectCounter);
  const incrementProjectCounter = useProjectStore(
    (state) => state.incrementProjectCounter
  );
  const decrementProjectCounter = useProjectStore(
    (state) => state.decrementProjectCounter
  );

  const pageHidden = usePageTransitionStore((state) => state.pageHidden);
  const pageChange = usePageTransitionStore((state) => state.pageChange);

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold && activeImageIndex > 0) {
      decrementProjectCounter();
    } else if (
      draggedDistance < -swipeThreshold &&
      activeImageIndex < Images.length - 1
    ) {
      incrementProjectCounter();
    }
  };

  const skipToImage = (type: string) => {
    if (type === "next" && activeImageIndex < Images.length - 1) {
      incrementProjectCounter();
    } else if (type === "prev" && activeImageIndex > 0) {
      decrementProjectCounter();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: pageHidden ? 0 : 1,
        transition: {
          delay: pageHidden || !pageChange ? 0 : 0.7,
          duration: pageHidden ? 0.2 : 1.1,
          ease: easeInOut,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 2, ease: easeInOut } }}
      className="w-full lg:w-[45%] h-[300px] relative z-10"
    >
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={activeImageIndex}
            src={Images[activeImageIndex].src}
            alt="project-image"
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            className="absolute w-full h-full object-contain object-center bg-black rounded-lg"
          />
        </AnimatePresence>
      </div>

      <div className="w-full flex justify-end gap-4 mt-4">
        <button
          onClick={() => skipToImage("prev")}
          className="bg-secondary text-container p-4 rounded-full"
        >
          <Arrow />
        </button>
        <button
          onClick={() => skipToImage("next")}
          className="bg-secondary text-container p-4 rounded-full rotate-180"
        >
          <Arrow />
        </button>
      </div>
    </motion.div>
  );
}

export default SliderProject;
