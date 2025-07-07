import { useState } from "react";
import { motion } from "framer-motion";

import { LINKS_NAV, LIKS_CONTACT } from "../const/siteConfig";

import { IconButton } from "@mui/material";
import MovilMenu from "./MovilMenu";

import Image from "../components/Image";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

const MotionIconButton = motion.create(IconButton);

const wp = LIKS_CONTACT.find((link) => link.id === "wp");

export default function BarraNavegacion() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className="sticky inset-0 z-50 p-2 flex items-center gap-4 justify-between md:justify-around backdrop-blur-xl w-full max-w-[1200px] self-center">
      <MotionIconButton
        color="inherit"
        className="md:!hidden relative"
        title="Abrir menú"
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
        className="inline-flex items-center gap-1 text-emerald-200 font-semibold text-3xl drop-shadow-sm drop-shadow-black/60"
      >
        <Image width={48} height={48} />
        <span className="hidden xs:block">VerdeAve</span>
      </a>

      <ul className="hidden md:flex gap-2">
        {LINKS_NAV.map((link) => (
          <motion.li
            key={link.id}
            variants={{
              hover: {},
              hidden: { opacity: 0, scale: 1.1 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover="hover"
          >
            <a
              href={"#" + link.id}
              className="px-4 py-2 font-semibold relative hover:text-shadow-sm text-shadow-black/30"
              title={"Ir a " + link.label}
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
              <span className="relative z-10">{link.label}</span>
            </a>
          </motion.li>
        ))}
      </ul>

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
          <motion.span
            className="absolute inset-0 bg-radial from-emerald-400 to-emerald-600 rounded-full"
            initial={false}
            variants={{
              hover: { clipPath: "circle(100% at 50% 50%)" },
            }}
            style={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <IconButton
            component="a"
            href={wp.href}
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a WhatsApp"
          >
            <WhatsAppIcon fontSize="medium" />
          </IconButton>
        </motion.div>
      )}

      <MovilMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </nav>
  );
}
