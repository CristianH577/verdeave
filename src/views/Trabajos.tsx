import { useState } from "react";

import { LOGOS_PROGRAMACION } from "../const/svgs";

import { motion, AnimatePresence } from "framer-motion";
import { Button, Modal } from "@mui/material";

import Image from "../components/Image";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";

type TypeCard = {
  id: string;
  label: string;
  year: string;
  href: string;
  bg?: string;
  tecnologias: string[];
  categorie: "web_app" | "landing";
};

const images_all = import.meta.glob(
  "../assets/imgs/trabajos/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all) as string[][];

const trabajos: TypeCard[] = [
  {
    id: "imanes_tucuman",
    categorie: "web_app",
    label: "Imanes Tucuman",
    year: "2024",
    href: "https://imanestucuman.com.ar/",
    bg: "bg-gradient-to-b from-[rgb(45,49,119)] to-[#202355]",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
  {
    id: "catalog",
    categorie: "web_app",
    label: "CataLog",
    year: "2025",
    href: "https://cata-log.netlify.app/",
    bg: "bg-gradient-to-t from-[#1565C0] to-[#1E88E5]",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
  {
    id: "abel_urbano",
    categorie: "landing",
    label: "Abel Urbano",
    year: "2025",
    href: "https://abel-urbano.vercel.app/",
    bg: "!bg-black",
    tecnologias: ["react", "ts", "framerMotion", "tailwind"],
  },
];

const MotionButton = motion.create(Button);
const MotionImage = motion.create(Image);

const ns = "trabajos";
export default function Trabajos() {
  const { t } = useTranslation();

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
        {trabajos.map((item) => (
          <MotionButton
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelected(item)}
            className={
              "p-4 h-[240px] rounded-lg shadow-md shadow-black/50" +
              (item.bg ? " " + item.bg : "")
            }
            title={t("show_more")}
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
              alt={t("logo_of") + item.label}
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
                  "p-4 w-full max-w-[26em] xs:rounded-lg shadow-md shadow-black flex flex-col justify-around my-[25vh]" +
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
                  alt={t("logo_of") + selected.label}
                  className="w-full"
                  classes={{ wrapper: "self-center" }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                />

                <motion.div
                  className="p-4 text-common"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                >
                  <span className="font-semibold text-neutral-300">
                    {t("categories." + selected.categorie, { ns: ns })}
                  </span>
                  <h2>
                    <a
                      href={selected.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("go_to_site")}
                      className="text-h2 hover:underline"
                    >
                      <b>{selected.label}</b> <OpenInNewIcon fontSize="small" />
                    </a>{" "}
                    <span className="text-subtext text-neutral-300">
                      {selected.year}
                    </span>
                  </h2>

                  <span className="text-subtext text-neutral-300">
                    {t("rol", { ns: ns })}:{" "}
                    {t(selected.id + ".rol", { ns: ns })}
                  </span>

                  <p>{t(selected.id + ".desc", { ns: ns })}.</p>

                  <div className="flex flex-wrap gap-4 my-2 drop-shadow-sm drop-shadow-black/80">
                    {selected.tecnologias &&
                      selected.tecnologias.map((item) => {
                        const logo =
                          LOGOS_PROGRAMACION[
                            item as keyof typeof LOGOS_PROGRAMACION
                          ];
                        const Svg = logo.icon;

                        return (
                          <span key={item} title={logo.label}>
                            <Svg height={16} />
                          </span>
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
