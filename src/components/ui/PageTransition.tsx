import { easeInOut, motion } from "framer-motion";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

function PageTransition({ children }: { children: React.ReactNode }) {
  const pageChange = usePageTransitionStore((state) => state.pageChange);
  const pageHidden = usePageTransitionStore((state) => state.pageHidden);

  return (
    <div key={window.location.pathname} className="px-[8%]">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: pageHidden ? 1 : 0,
          transition: {
            delay: pageHidden || !pageChange ? 0 : 0.7,
            duration: pageHidden ? 0.2 : 1.1,
            ease: easeInOut,
          },
        }}
        exit={{ opacity: 1, transition: { duration: 2, ease: easeInOut } }}
        className={`w-full h-full fixed inset-0 bg-background ${
          !pageHidden ? "pointer-events-none" : "pointer-events-auto"
        }`}
      />
      {children}
    </div>
  );
}

export default PageTransition;
