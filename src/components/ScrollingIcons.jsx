import React from "react";
import { motion } from "framer-motion";

const icons = [
  { label: "MongoDB" },
  { label: "BigQuery" },
  { label: "PostgreSQL" },
  { label: "MySQL" },
  { label: "Cassandra" },
  { label: "Spark" },
  { label: "Apache Airflow" },
];

const ScrollingIcons = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {[...icons, ...icons].map((icon, index) => (
          <button
            key={index}
            className="px-6 py-2 rounded-xl bg-black text-white font-semibold flex-shrink-0"
            style={{
              boxShadow: `
                inset 0 0 0 1px hsla(0, 0%, 100%, 0.075),
                inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
              `,
            }}
          >
            {icon.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingIcons;
