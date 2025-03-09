import links from "../../../data/Routes.json";

import React from "react";
import MenuNav from "../../icons/MenuNav";

import { AnimatePresence, motion } from "framer-motion";
import { usePageTransitionStore } from "../../../stores/usePageTransitionStore";

import CloseIcon from "../../icons/CloseIcon";

function MobileNav() {
  const pathname = window.location.pathname;
  const [isOpen, setIsOpen] = React.useState(false);

  const setPageChange = usePageTransitionStore((state) => state.setPageChange);
  const setPageHidden = usePageTransitionStore((state) => state.setPageHidden);

  const handleNavigation = (href: string) => {
    setPageHidden(true);

    setTimeout(() => {
      setPageChange(true);
      setPageHidden(false);
      window.location.href = href;
    }, 400);
  };

  return (
    <div>
      <div
        className={`${isOpen ? "opacity-0" : "opacity-100"} duration-200`}
        onClick={() => setIsOpen(true)}
      >
        <MenuNav />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="fixed w-screen h-screen top-0 left-0 bg-black/40 backdrop-blu z-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="relative w-3/4 h-screen bg-background flex flex-col justify-center items-center gap-6 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-0 right-0 p-5"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>

              <h1 className="text-3xl pb-5">Jeifer<span className="text-secondary">.</span></h1>

              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link text-xl ${
                    pathname === item.href &&
                    "text-secondary after:scale-x-100 after:bg-secondary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleNavigation(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
