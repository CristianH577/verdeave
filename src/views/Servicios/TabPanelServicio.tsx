import { motion } from "framer-motion";

import StackImgs from "./StackImgs";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function TabPanelServicio({
  id = "",
  textContent = <></>,
  listas = [{ label: "", items: [""] }],
  linkExample = "",
}) {
  return (
    <section className="space-y-8">
      <div className="max-w-[600px] indent-2">{textContent}</div>

      <article className="flex flex-wrap gap-8">
        {listas.map((list, i) => (
          <div
            key={i}
            className={
              list.label === "Precio"
                ? "border-5 border-emerald-400 p-3 rounded-lg h-fit"
                : ""
            }
          >
            <b>{list.label}:</b>

            <motion.ol
              className="list-disc list-inside"
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
      </article>

      {linkExample && (
        <a
          href={linkExample}
          title="Ver ejemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Ejemplo
          <OpenInNewIcon fontSize="small" />
        </a>
      )}

      <StackImgs id={id} />
    </section>
  );
}
