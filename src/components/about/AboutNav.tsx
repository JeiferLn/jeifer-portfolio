import NavAbout from "../../data/about/Nav.json";
import { useAboutSelectedStore } from "../../stores/useAboutSelectedStore";

function AboutNav() {
  const aboutSelected = useAboutSelectedStore((state) => state.aboutSelected);
  const setAboutSelected = useAboutSelectedStore(
    (state) => state.setAboutSelected
  );

  return (
    <section className="w-full lg:w-[30%]">
      <nav className="list-none flex flex-col gap-4">
        {NavAbout.map((item) => (
          <li
            key={item.link}
            className={`${
              aboutSelected === item.link
                ? "bg-secondary text-background"
                : "bg-container text-primary hover:bg-secondary hover:text-background"
            } text-center py-3 cursor-pointer rounded-lg duration-300 select-none`}
            onClick={() => {
              setAboutSelected(item.link);
            }}
          >
            {item.name}
          </li>
        ))}
      </nav>
    </section>
  );
}

export default AboutNav;
