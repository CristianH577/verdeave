import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import StackImgs from "./StackImgs";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { OBJ_PRICES } from "../../const/siteConfig";
import { Button } from "@mui/material";

const ns = "servicios";
export default function TabPanelServicio({ id = "", linkExample = "" }) {
  const { t } = useTranslation();

  const textContent = t("items." + id + ".text_content", {
    ns: ns,
    returnObjects: true,
  }) as string[];

  const listas = t("items." + id + ".listas", {
    ns: ns,
    returnObjects: true,
  }) as { label: string; items: string[] }[];

  const cost = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(OBJ_PRICES[id as keyof typeof OBJ_PRICES] ?? 0);

  return (
    <section className="space-y-8">
      <article className="max-w-[600px] indent-4">
        {textContent.map((p, i) => (
          <p key={i}>{p}.</p>
        ))}
      </article>

      <article className="flex flex-wrap gap-8">
        {Array.isArray(listas) &&
          listas.map((list, i) => (
            <div
              key={i}
              className="bg-emerald-800/90 p-4 rounded-lg h-fit shadow-sm"
            >
              <b>{list.label}:</b>

              <motion.ol
                className="list-disc list-inside space-y-1"
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
                {list.items.map((li, k) => (
                  <motion.li
                    key={k}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {li}
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          ))}

        <div className="bg-emerald-800/90 p-4 rounded-lg h-fit shadow-sm border-5 border-emerald-400">
          <b>{t("prices.label", { ns: "servicios" })}:</b>

          <motion.ol
            className="list-disc list-inside space-y-1"
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
            {["basico", "adelanto", "adicional"].map((li, k) => (
              <motion.li
                key={k}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {t("prices." + li, {
                  ns: ns,
                  cost: cost,
                })}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </article>

      {linkExample && (
        <Button
          variant="contained"
          color="success"
          component="a"
          href={linkExample}
          title={t("show_example")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          {t("example")}
          <OpenInNewIcon fontSize="small" />
        </Button>
      )}

      <StackImgs id={id} />
    </section>
  );
}
