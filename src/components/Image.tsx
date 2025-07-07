import { useState } from "react";
import { motion } from "framer-motion";

import { Skeleton } from "@mui/material";

import logoImg from "../assets/imgs/logo_img-264.webp";

const MotionSkeleton = motion.create(Skeleton);

export default function Image({
  src = logoImg,
  width = 100,
  height = 100,
  alt = "Logo",
  classes = { wrapper: "" },
  ...props
}) {
  const [load, setLoad] = useState(false);

  return (
    <div
      className={
        "relative w-fit" + (classes.wrapper ? " " + classes.wrapper : "")
      }
    >
      <MotionSkeleton
        variant="rounded"
        className="w-full !h-full absolute inset-0"
        initial={{ opacity: 1 }}
        animate={load && { opacity: 0, display: "none" }}
      />

      <motion.img
        src={src || logoImg}
        width={width}
        height={height}
        loading="lazy"
        alt={alt}
        initial={{ opacity: 0 }}
        animate={load && { opacity: 1 }}
        onLoad={() => setLoad(true)}
        {...props}
      />
    </div>
  );
}
