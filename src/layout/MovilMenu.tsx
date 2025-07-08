import { motion } from "framer-motion";

import { LINKS_NAV } from "../const/siteConfig";

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

export default function MovilMenu({ isOpen = false, setIsOpen }: Props) {
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
        title="Ir al inicio"
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
        {LINKS_NAV.map((link) => (
          <motion.li key={link.id} className={class_li} variants={variants_li}>
            <Button
              component="a"
              href={"#" + link.id}
              title={"Ir a " + link.label}
              size="large"
              className="!px-4 font-semibold w-full !text-white !normal-case !justify-start"
              onClick={onClose}
            >
              {link.label}
            </Button>
          </motion.li>
        ))}

        <motion.li
          className={class_li + " text-neutral-500 hover:text-white"}
          variants={variants_li}
        >
          <Button
            className="!px-4 font-semibold w-full !text-inherit !normal-case !justify-start"
            title="Cerrar menú"
            onClick={() => setIsOpen(false)}
            startIcon={<ArrowBackIcon />}
          >
            Cerrar
          </Button>
        </motion.li>
      </motion.ul>
    </Drawer>
  );
}
