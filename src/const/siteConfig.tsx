import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const LIKS_CONTACT = [
  {
    id: "wp",
    href: "https://api.whatsapp.com/send?phone=543813545903",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    id: "insta",
    href: "https://www.instagram.com/verde_ave/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    id: "github",
    href: "https://github.com/CristianH577",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    id: "email",
    label: "cristian.herrera07@hotmail.com",
    title: "Email",
    icon: EmailIcon,
  },
];

export const LINKS_NAV_KEYS = ["sobremi", "trabajos", "servicios", "contacto"];

export const FONTS_VALUES = {
  md: {
    common: "medium",
    subtext: "small",
    h1: "x-large",
    h2: "large",
  },
  lg: {
    common: "large",
    subtext: "medium",
    h1: "xx-large",
    h2: "x-large",
  },
  xl: {
    common: "x-large",
    subtext: "large",
    h1: "xxx-large",
    h2: "xx-large",
  },
};
