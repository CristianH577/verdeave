import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { LINKS_NAV_KEYS } from "../const/siteConfig";

import { Button, Divider, Drawer } from "@mui/material";

import Image from "../components/Image";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  isOpen: boolean;
  setIsOpen: (bool: React.SetStateAction<boolean>) => void;
}

const class_li = "hover:bg-emerald-500/50 transition-colors";

const variants_li = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const ns = "menu_nav";
export default function MenuDrawer({ isOpen = false, setIsOpen }: Props) {
  const { t } = useTranslation();
  const onClose = () => setIsOpen(false);

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      disableScrollLock
      classes={{
        paper: "w-full xs:!max-w-[220px] !bg-transparent backdrop-blur-lg ",
      }}
    >
      <a
        href="#"
        title={t("go_to_home", { ns: ns })}
        className="inline-flex items-center gap-1 text-emerald-200 font-semibold text-3xl drop-shadow-sm drop-shadow-black/60 py-4 px-2"
      >
        <Image width={48} height={48} />
        VerdeAve
      </a>

      <Divider variant="middle" className="bg-neutral-500" />

      <motion.ul
        className="py-2"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {LINKS_NAV_KEYS.map((id) => (
          <motion.li key={id} className={class_li} variants={variants_li}>
            <Button
              component="a"
              href={"#" + id}
              title={t("go_to") + t(id, { ns: "links_nav" })}
              size="large"
              className="!px-4 font-semibold w-full !text-white !normal-case !justify-start !text-common"
              onClick={onClose}
            >
              {t(id, { ns: "links_nav" })}
            </Button>
          </motion.li>
        ))}

        <motion.li
          className={class_li + " text-neutral-500 hover:text-white"}
          variants={variants_li}
        >
          <Button
            className="!px-4 font-semibold w-full !text-inherit !normal-case !justify-start !text-common"
            title={t("close_menu", { ns: ns })}
            onClick={() => setIsOpen(false)}
            startIcon={<ArrowBackIcon />}
          >
            {t("close", { ns: ns })}
          </Button>
        </motion.li>
      </motion.ul>
    </Drawer>
  );
}
