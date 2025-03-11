import type { JSX } from "react";
import HTMLIcon from "./HTMLIcon";
import CSSIcon from "./CSSIcon";
import JavascriptIcon from "./JavascriptIcon";
import ReactIcon from "./ReactIcon";
import SassIcon from "./SassIcon";
import TailwindIcon from "./TailwindIcon";
import TypeScriptIcon from "./TypeScriptIcon";
import BootstrapIcon from "./BootstrapIcon";
import FramerMotionIcon from "./FramerMotionIcon";
import ViteIcon from "./ViteIcon";
import NextIcon from "./NextIcon";
import AstroIcon from "./AstroIcon";

function SkillsMenu({ name }: { name: string }) {
  const icons: { [key: string]: JSX.Element } = {
    HTML5: <HTMLIcon />,
    CSS3: <CSSIcon />,
    JavaScript: <JavascriptIcon />,
    TypeScript: <TypeScriptIcon />,
    Sass: <SassIcon />,
    Bootstrap: <BootstrapIcon />,
    TailwindCSS: <TailwindIcon />,
    FramerMotion: <FramerMotionIcon />,
    React: <ReactIcon />,
    Vite: <ViteIcon />,
    "Next.js": <NextIcon />,
    Astro: <AstroIcon />,
  };

  return name ? icons[name] : null;
}

export default SkillsMenu;
