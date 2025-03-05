import { motion, AnimatePresence, easeIn, easeInOut } from "framer-motion";
import { useEffect } from "react";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

function StairTransition() {
  const pageTransaction = usePageTransitionStore(
    (state) => state.pageTransition
  );
  const setPageTransaction = usePageTransitionStore(
    (state) => state.setPageTransition
  );
  const pageChange = usePageTransitionStore((state) => state.pageChange);
  const setPageChange = usePageTransitionStore((state) => state.setPageChange);

  useEffect(() => {
    if (pageChange) {
      setTimeout(() => {
        setPageChange(false);
        setTimeout(() => {
          setPageTransaction(false);
        }, 1000);
      }, 1000);
    } else {
      setTimeout(() => {
        setPageTransaction(false);
      }, 1000);
    }
  }, [pageChange, setPageChange, setPageTransaction]);

  return (
    <AnimatePresence>
      {pageTransaction && (
        <div className="fixed top-0 left-0 flex w-full h-screen z-50 rotate-180">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ scaleY: pageChange ? 0 : 1 }}
              animate={{ scaleY: pageChange ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: easeInOut }}
              className="w-1/6 h-screen bg-primary origin-top"
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

export default StairTransition;
