import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SplashScreen() {
  const navigate = useNavigate();

  // Navigate to the Home Screen after 2 seconds
  setTimeout(() => {
    navigate("/HomeScreen");
    console.log("Home screen now");
  }, 2000);

  return (
    <div className="bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] w-screen h-screen flex justify-center items-center">
      {/* Animated Text */}
      <motion.div
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E0E1DD] to-[#A9BCD0]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        HEALTH LINK
      </motion.div>
    </div>
  );
}

export default SplashScreen;
