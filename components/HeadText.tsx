import { motion } from "framer-motion";

const TextAnimation = () => {
  const text1 = "YOUR PDF";
  const text2 = "YOUR WAY";

  return (
    <div className="text-center pt-28 md:pt-28">
      <h1 className="font-extrabold text-5xl sm:text-7xl">
        {text1.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: index * 0.1, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        <br />
        {text2.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: index * 0.2, delay: index * 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default TextAnimation;
