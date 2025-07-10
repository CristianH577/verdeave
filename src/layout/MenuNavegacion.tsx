import { useState } from "react";
import { motion } from "framer-motion";

import { LIKS_CONTACT, LINKS_NAV_KEYS } from "../const/siteConfig";

import { IconButton } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

import Image from "../components/Image";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import MenuConfigs from "./BarraNavegacion/MenuConfigs";
import { useTranslation } from "react-i18next";

const MotionIconButton = motion.create(IconButton);

const wp = LIKS_CONTACT.find((link) => link.id === "wp");

const ns = "menu_nav";
export default function MenuNavegacion() {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className="sticky inset-0 z-50 p-2 flex items-center gap-4 justify-between md:justify-around backdrop-blur-xl w-full max-w-[1200px] self-center">
      <MotionIconButton
        color="inherit"
        className="md:!hidden relative"
        title={t("open_menu", { ns: ns })}
        onClick={() => setIsOpenMenu(true)}
        variants={{
          hidden: {},
          hover: {},
        }}
        initial="hidden"
        whileHover="hover"
      >
        <motion.span
          className="absolute inset-0 bg-radial from-emerald-400 to-emerald-600 rounded-full"
          initial={false}
          variants={{
            hover: { clipPath: "circle(100% at 50% 50%)" },
          }}
          style={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <ViewStreamIcon fontSize="large" className="z-10" />
      </MotionIconButton>

      <a
        href="#"
        title={t("go_to_home", { ns: ns })}
        className="inline-flex items-center gap-1 text-emerald-200 font-semibold drop-shadow-sm drop-shadow-black/60"
      >
        <Image width={48} height={48} />
        <span className="hidden xs:block text-3xl">VerdeAve</span>
      </a>

      <ul className="hidden md:flex gap-2">
        {LINKS_NAV_KEYS.map((id) => (
          <motion.li
            key={id}
            variants={{
              hover: {},
              hidden: { opacity: 0, scale: 1.1 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover="hover"
          >
            <a
              href={"#" + id}
              className="px-4 py-2 font-semibold relative hover:text-shadow-sm text-shadow-black/30"
              title={t("go_to") + t(id, { ns: "links_nav" })}
            >
              <motion.span
                className="absolute inset-0 rounded-b-lg rounded-t-3xl bg-radial from-emerald-400 to-emerald-600 "
                initial={false}
                variants={{
                  hover: { clipPath: "circle(100% at 50% 50%)" },
                }}
                style={{ clipPath: "circle(0% at 50% 50%)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              <span className="relative z-10">
                {t(id, { ns: "links_nav" })}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="flex gap-2">
        <MenuConfigs />

        {wp && (
          <motion.div
            className="relative"
            variants={{
              hidden: {},
              visible: { rotate: [30, 0, 30, 0] },
              hover: { rotate: [30, 0, 30, 0] },
            }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <IconButton
              component="a"
              href={wp.href}
              target="_blank"
              rel="noopener noreferrer"
              title={t("go_to") + wp.label}
            >
              <WhatsAppIcon fontSize="medium" />
            </IconButton>
          </motion.div>
        )}
      </div>

      <MenuDrawer isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </nav>
  );
}
