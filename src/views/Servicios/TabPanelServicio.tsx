import { motion } from "framer-motion";
import StackImgs from "./StackImgs";

export default function TabPanelServicio({
  id = "",
  textContent = <></>,
  listas = [{ label: "", items: [""] }],
}) {
  return (
    <section>
      <div className="max-w-[600px] indent-2">
        {textContent}
        <br />
      </div>

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

      <StackImgs id={id} />
    </section>
  );
}
