import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { LOGOS_PROGRAMACION } from "../const/svgs";

import Image from "../components/Image";

const ns = "sobremi";
export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="sobremi"
      className="view-section flex flex-col items-center justify-center text-center gap-4"
      variants={{
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
      <article className="relative pb-6 flex flex-col items-center text-shadow-md text-shadow-black">
        <Image
          className="drop-shadow-lg drop-shadow-black/60"
          width={264}
          height={264}
        />

        <div className="absolute bottom-0">
          <motion.p
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="font-semibold text-5xl sm:text-7xl text-emerald-300"
          >
            VerdeAve
          </motion.p>

          <div className="h-0.5 w-full bg-neutral-500"></div>

          <span className="uppercase flex justify-around text-[10vw] sm:text-5xl">
            {t("servicios", { ns: ns })
              .split("")
              .map((e, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {e}
                </motion.span>
              ))}
          </span>
        </div>
      </article>

      <h2 className="max-w-[16em] flex gap-[.3em] items-center justify-center flex-wrap text-h1">
        {t("h2", { ns: ns })
          .split(" ")
          .map((e, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, x: 20, y: 10, rotate: 20 },
                visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
              }}
            >
              {e}
            </motion.span>
          ))}
      </h2>

      <motion.p
        className="text-common"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {t("p", { ns: ns })}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 drop-shadow-sm drop-shadow-black/60">
        {Object.entries(LOGOS_PROGRAMACION).map(
          ([id, logo]) =>
            id !== "default" && (
              <motion.span
                key={id}
                title={logo.label}
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <logo.icon height={24} />
              </motion.span>
            )
        )}
      </div>
    </motion.section>
  );
}
