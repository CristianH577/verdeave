import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IconButton, Modal, useMediaQuery } from "@mui/material";

import Image from "../../components/Image";

const images_all_test = import.meta.glob(
  "../../assets/imgs/servicios/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const srcs = Object.entries(images_all_test) as string[][];

const path_chevron_l = "M15 18 l-6 -6 6 -6";
const path_chevron_r = "M9 6 l6 6 -6 6";
const path_chevron_t = "M6 15 l6 -6 6 6";
const path_chevron_b = "M6 9 l6 6 6 -6";

export default function StackImgs({ id = "" }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const isSmall = useMediaQuery("(max-width: 640px)");

  const path_chevron_1 = isSmall ? path_chevron_b : path_chevron_r;
  const path_chevron_2 = isSmall ? path_chevron_t : path_chevron_l;

  const imgs = srcs
    .filter(([path, _]) => path.includes("300/" + id))
    .map((src) => src[1]);
  const imgsFull = srcs
    .filter(([path, _]) => path.includes("full/" + id))
    .map((src) => src[1]);

  return (
    <AnimatePresence mode="wait">
      <article
        role="wrapper"
        className="flex flex-col sm:flex-row gap-4 items-center my-2 py-6 pe-4 overflow-y-hidden"
        style={{
          overflowX: !isSmall && expanded ? "auto" : "hidden",
        }}
      >
        <IconButton
          color="inherit"
          className="!border-4 !border-emerald-400"
          title={expanded ? "Retraer" : "Expander"}
          onClick={() => setExpanded(!expanded)}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12"
            initial="rest"
            animate={expanded ? "animate" : "rest"}
            whileHover="hover"
          >
            <motion.path
              variants={{
                rest: { d: path_chevron_1, x: 0, y: 0 },
                animate: { d: path_chevron_2 },
                hover: {
                  x: isSmall ? 0 : expanded ? [0, -5, 0] : [0, 5, 0],
                  transition: {
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity,
                  },
                },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.svg>
        </IconButton>

        <div
          className="relative w-[150px] gap-2 sm:w-fit sm:h-[150px] sm:flex"
          style={{ maxHeight: expanded ? "none" : 200 }}
        >
          {imgs.map((item, i) => {
            const offset = expanded ? 0 : -(150 - i * 10 + 150 * (i - 1));
            const rotate = i % 2 === 0 ? 8 : -8;
            const zIndex = imgs.length - i;

            return (
              <motion.div
                key={i}
                // layout
                // layoutId={id ? id + "-" + i : undefined}
                variants={{
                  hidden: {
                    opacity: expanded ? 1 : 1 - i * 0.2,
                    x: isSmall ? 0 : offset,
                    y: isSmall ? offset : 0,
                    rotate: rotate,
                  },
                  visible: {
                    opacity: expanded ? 1 : 1 - i * 0.2,
                    x: 0,
                    y: 0,
                  },
                }}
                initial="hidden"
                animate={expanded ? "visible" : "hidden"}
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  zIndex: imgs.length + 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-xl shadow-md w-[150px] h-[150px] overflow-hidden cursor-pointer"
                style={{ zIndex: zIndex }}
                onClick={() => setSelected(i)}
              >
                <Image
                  src={item}
                  width={150}
                  height={150}
                  alt={"Imagen de ejemplo " + i}
                  className="object-cover h-full scale-[2] hover:scale-[1.5] transition-transform"
                  classes={{ wrapper: "h-full" }}
                />
              </motion.div>
            );
          })}
        </div>

        {selected !== undefined && (
          <Modal
            open={selected !== undefined}
            onClose={() => setSelected(undefined)}
          >
            <motion.div
              // layoutId={id ? id + "-" + selected : undefined}
              className="h-full p-4 flex items-center overflow-auto"
              onClick={() => setSelected(undefined)}
            >
              <Image
                src={imgsFull[selected]}
                width={960}
                height={900}
                alt={"Imagen de ejemplo " + selected}
                className="w-auto max-w-none"
                classes={{
                  wrapper: "m-auto",
                }}
              />
            </motion.div>
          </Modal>
        )}
      </article>
    </AnimatePresence>
  );
}
