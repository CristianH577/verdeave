import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Button, IconButton, Modal } from "@mui/material";

import Image from "../components/Image";

import AbcIcon from "@mui/icons-material/Abc";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  SvgLogoFramerMotion,
  SvgLogoReact,
  SvgLogoTailwindCss,
  SvgLogoTs,
} from "../assets/svgs/svgsLogos";

type TypeCard = {
  id: string;
  categoria: string;
  label: string;
  year: string;
  href: string;
  bg?: string;
  desc: string;
  rol: string;
  tecnologias: string[];
};

const images_all = import.meta.glob(
  "../assets/imgs/trabajos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all) as string[][];

const logos = {
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
};

const items = [
  {
    id: "imanes_tucuman",
    categoria: "App Web",
    label: "Imanes Tucuman",
    year: "2025",
    href: "https://imanestucuman.com.ar/",
    bg: "bg-gradient-to-b from-[rgb(45,49,119)] to-[#202355]",
    desc: "Sitio para un emprendimiento comercial de ventas de imanes",
    rol: "Creador",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
  {
    id: "catalog",
    categoria: "App Web",
    label: "CataLog",
    year: "2025",
    href: "https://cata-log.netlify.app/",
    bg: "bg-gradient-to-t from-[#1565C0] to-[#1E88E5]",
    desc: "Diseño web para catálogos estáticos de negocios",
    rol: "Creador",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
  {
    id: "abel_urbano",
    categoria: "Landing page",
    label: "Abel Urbano",
    year: "2025",
    href: "https://abel-urbano.vercel.app/",
    bg: "!bg-black",
    desc: "Landing page para estilista local",
    rol: "Creador",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
];

const MotionButton = motion.create(Button);
const MotionImage = motion.create(Image);

export default function Trabajos() {
  const [selected, setSelected] = useState<TypeCard | null>(null);

  return (
    <section id="trabajos" className="view-section">
      <motion.article
        className="p-4 pt-8 grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(220px,_260px))]"
        variants={{
          visible: {
            transition: { delayChildren: 0.1, staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <MotionButton
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelected(item)}
            className={
              "p-4 h-[240px] rounded-lg shadow-md shadow-black/50" +
              (item.bg ? " " + item.bg : "")
            }
            title="Ver más"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1.05 }}
          >
            <MotionImage
              src={srcs.find(([path, _]) => path.includes(`/${item.id}`))?.[1]}
              width={240}
              height={100}
              alt={"Logo de " + item.label}
              className="w-full max-w-[240px]"
              classes={{ wrapper: "self-center" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </MotionButton>
        ))}
      </motion.article>

      <AnimatePresence>
        {selected && (
          <Modal
            open={Boolean(selected)}
            onClose={() => setSelected(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <motion.div
              layoutId={selected.id}
              className="text-white justify-self-center"
              onClick={() => setSelected(null)}
            >
              <div
                className={
                  "p-4 w-full max-w-[360px] xs:rounded-lg shadow-md shadow-black flex flex-col justify-around my-[25vh]" +
                  (selected.bg ? " " + selected.bg : "")
                }
              >
                <MotionImage
                  src={
                    srcs.find(([path, _]) =>
                      path.includes(`/${selected.id}`)
                    )?.[1]
                  }
                  width={240}
                  height={100}
                  alt={"Logo de " + selected.label}
                  className="w-full"
                  classes={{ wrapper: "self-center" }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                />

                <motion.div
                  className="p-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                >
                  <span className="font-semibold text-neutral-300">
                    {selected.categoria}
                  </span>
                  <h2>
                    <a
                      href={selected.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ir al sitio"
                      className="text-xl hover:underline"
                    >
                      <b>{selected.label}</b> <OpenInNewIcon fontSize="small" />
                    </a>{" "}
                    <span className="text-sm text-neutral-300">
                      {selected.year}
                    </span>
                  </h2>

                  <span className="text-sm text-neutral-300">
                    Rol/Aporte: {selected.rol}
                  </span>

                  <p>{selected.desc}.</p>

                  <div className="flex flex-wrap gap-2 my-1 drop-shadow-sm drop-shadow-black/80">
                    {selected.tecnologias &&
                      selected.tecnologias.map((item) => {
                        const logo =
                          logos[item as keyof typeof logos] ?? logos.default;
                        const Svg = logo.icon;

                        return (
                          <IconButton
                            key={item}
                            size="small"
                            className="hover:!bg-transparent"
                            title={logo.label}
                          >
                            <Svg height={16} />
                          </IconButton>
                        );
                      })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
