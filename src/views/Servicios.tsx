import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

import TabPanelServicio from "./Servicios/TabPanelServicio";

const items = [
  {
    id: "web",
    linkExample: "https://imanestucuman.com.ar/",
  },
  {
    id: "catalogo",
    linkExample: "https://cata-log.netlify.app/",
  },
  {
    id: "tienda",
    linkExample: "https://imanestucuman.mercadoshops.com.ar/",
  },
  {
    id: "catalogo_pdf",
    linkExample:
      "https://drive.google.com/drive/folders/1ueYmBFl4_3Y8Tb-BNmQnWAK2kSVLNRa_?usp=drive_link",
  },
];

const ns = "servicios";
export default function Servicios() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  return (
    <section id="servicios" className="view-section">
      <span className="text-subtext text-neutral-300 mb-1">
        *{t("prices_alert", { ns: ns })}
      </span>

      <article className="border-b border-neutral-400 overflow-x-auto pb-1">
        <motion.ul
          aria-label={t("tab_aria_label", { ns: ns })}
          className="flex w-fit relative"
        >
          {items.map((item, i) => (
            <li key={i}>
              <Button
                color="inherit"
                size="large"
                data-selected={i === value}
                className="whitespace-nowrap data-[selected=true]:!font-semibold data-[selected=true]:text-shadow-md text-shadow-black/30 !text-common"
                onClick={() => setValue(i)}
              >
                {value === i && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute right-0 bottom-0 rounded-sm w-full h-full bg-gradient-to-t from-emerald-600 to-emerald-400"
                  />
                )}
                <span className="z-10">
                  {t("items." + item.id + ".label", { ns: ns })}
                </span>
              </Button>
            </li>
          ))}
        </motion.ul>
      </article>

      <AnimatePresence mode="wait">
        <motion.article
          key={value}
          layoutId="content"
          className="py-4 sm:px-4 text-common"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TabPanelServicio {...items[value]} />
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
