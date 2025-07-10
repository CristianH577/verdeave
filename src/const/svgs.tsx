import AbcIcon from "@mui/icons-material/Abc";

import {
  SvgLogoFramerMotion,
  SvgLogoPython,
  SvgLogoReact,
  SvgLogoTailwindCss,
  SvgLogoTs,
  SvgSQL,
} from "../assets/svgs/svgsLogos";

export const LOGOS_PROGRAMACION = {
  default: {
    icon: AbcIcon,
    label: "Logo",
  },
  react: {
    icon: SvgLogoReact,
    label: "React",
  },
  ts: {
    icon: SvgLogoTs,
    label: "TypeScript",
  },
  framerMotion: {
    icon: SvgLogoFramerMotion,
    label: "Framer Motion",
  },
  tailwind: {
    icon: SvgLogoTailwindCss,
    label: "TailwindCss",
  },
  python: {
    icon: SvgLogoPython,
    label: "Python",
  },
  sql: {
    icon: SvgSQL,
    label: "SQL",
  },
};
