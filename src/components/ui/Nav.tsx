import { motion } from "framer-motion";
import { usePageTransitionStore } from "../../stores/usePageTransitionStore";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Nav() {
  const pathname = window.location.pathname;

  const setPageChange = usePageTransitionStore((state) => state.setPageChange);
  const setPageHidden = usePageTransitionStore((state) => state.setPageHidden);
  const pageChange = usePageTransitionStore((state) => state.pageChange);
  const pageHidden = usePageTransitionStore((state) => state.pageHidden);

  const handleNavigation = (href: string) => {
    setPageHidden(true);

    setTimeout(() => {
      setPageChange(true);
      setPageHidden(false);
      window.location.href = href;
    }, 300);
  };

  return (
    <motion.nav
      className="flex gap-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: pageHidden ? 0 : 1, y: 0 }}
      transition={{
        duration: pageHidden ? 0.3 : !pageChange ? 0 : 0.5,
        delay: pageHidden ? 0 : !pageChange ? 0 : 0.9,
      }}
    >
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.href);
          }}
          className={`nav-link ${
            pathname === item.href &&
            "text-secondary after:bg-transparent hover:text-secondary-hover duration-200"
          }`}
        >
          {item.name}
        </a>
      ))}
    </motion.nav>
  );
}

export default Nav;
