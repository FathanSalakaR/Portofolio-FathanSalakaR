import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className={`mb-14 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <motion.span variants={fadeUp} className={`eyebrow ${align === "center" ? "!text-center" : ""}`}>
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className={`text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl ${
          align === "center" ? "!text-center" : ""
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base text-slate-600 sm:text-lg font-normal ${
            align === "center" ? "!text-center" : "text-left"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
