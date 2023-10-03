import { motion } from "framer-motion";
function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.1, 0.1, 0.1, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 10 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#c7c5c2] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#c7c5c2] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#c7c5c2] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#c7c5c2] rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
