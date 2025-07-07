import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useState } from "react";

export default function AnimationBackground() {
  const { scrollYProgress } = useScroll({
    // @ts-ignore
    // target: containerRef.current,
    offset: ["start end", "end start"],
  });

  const [viewportHeight, setViewportHeight] = useState(0);
  const radius = useTransform(
    scrollYProgress,
    [0, 1],
    [0, viewportHeight * 1.4]
  );

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div className="fixed h-full w-full">
      <div className="h-screen w-full sticky top-0 flex items-center justify-center ">
        <svg className="w-full h-screen absolute">
          {[
            { cx: 0, cy: 0, fill: "fill-sky-900" },
            { cx: 100, cy: 100, fill: "fill-green-500" },
            { cx: 100, cy: 0, fill: "fill-emerald-500" },
            { cx: 0, cy: 100, fill: "fill-sky-600" },
          ].map((item, i) => (
            <motion.circle
              key={i}
              cx={item.cx + "%"}
              cy={item.cy + "%"}
              initial={{ r: 0, opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              r={radius}
              className={"mix-blend-multiply " + item.fill}
            />
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
