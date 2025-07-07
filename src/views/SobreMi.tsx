import { motion } from "framer-motion";

import Image from "../components/Image";

export default function SobreMi() {
  return (
    <motion.section
      id="sobremi"
      className="view-section flex flex-col items-center justify-center text-center gap-4"
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
      <div className="relative pb-6 flex flex-col items-center text-shadow-md text-shadow-black">
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

          <div className="uppercase flex justify-around text-[10vw] sm:text-5xl">
            {"servicios".split("").map((e, i) => (
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
          </div>
        </div>
      </div>

      <div className="max-w-96 text-2xl flex gap-1 items-center justify-center flex-wrap">
        {"Me gusta hacer las cosas simples, optimas y funcionales."
          .split(" ")
          .map((e, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, x: 20, y: 10, rotate: 20 },
                visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
              }}
            >
              {e}
            </motion.p>
          ))}
      </div>
    </motion.section>
  );
}
