import { AnimatePresence, motion } from "framer-motion";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

function Photo() {
  const pageHidden = usePageTransitionStore((state) => state.pageHidden);

  return (
    <div className="w-full h-full">
      <AnimatePresence>
        {!pageHidden && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.5, ease: "easeIn" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="w-full h-full flex justify-center items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.5, ease: "easeIn" },
              }}
              className="w-[241px] h-[241px] xl:w-[403px] xl:h-[403px] mx-auto mix-blend-lighten photo-container"
            >
              <img
                src="/photo-image.webp"
                alt="imageUser"
                className="w-full h-full mx-auto rounded-full object-cover"
              />
            </motion.div>

            {/* Circle */}
            <motion.svg
              className="w-[240px] h-[240px] xl:w-[404px] xl:h-[404px] absolute"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke="#f4b400"
                strokeWidth={4}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.circle>
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Photo;
