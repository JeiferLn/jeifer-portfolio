import { usePageTransitionStore } from "../../../stores/usePageTransitionStore";
import { motion, AnimatePresence } from "framer-motion";

function FaceBookIcon() {
  const pageHidden = usePageTransitionStore((state) => state.pageHidden);

  return (
    <AnimatePresence>
      {!pageHidden && (
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          fill="none"
          height="30"
          width="30"
          className="brightness-0 pb-1 pr-0.5 duration-200"
        >
          <defs>
            <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
              <stop offset="0%" stop-color="#0062E0"></stop>
              <stop offset="100%" stop-color="#19AFFF"></stop>
            </linearGradient>
          </defs>
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path
            fill="#FFF"
            d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </motion.svg>
      )}
    </AnimatePresence>
  );
}

export default FaceBookIcon;
