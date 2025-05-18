import { motion } from "framer-motion";

const Heading = ({ data }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight mb-5 font-Headings text-center sm:text-left"
    >
      {data}
    </motion.h1>
  );
};

export default Heading;
