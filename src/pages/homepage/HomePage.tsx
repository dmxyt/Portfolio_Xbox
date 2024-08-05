import Header from "../../components/HeaderMainPage/Header";
import MainContent from "../../components/MainContent/MainContent";
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ scale: 2.5, filter: "brightness(0.3)" }}
        animate={{ scale: 1, filter: "brightness(1)" }}
        exit={{ scale: 2.5, filter: "brightness(0.3)" }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }} 
        className="mainpageWallpaper d-flex flex-column justify-content-between"
      >
        <Header />
        <MainContent />
      </motion.div>
    </>
  );
}

export default HomePage;

/*
initial={{ filter: "brightness(0.1)", scale: 2.2 }}
        animate={{ filter: "brightness(1)", scale: 1 }}
        exit={{ filter: "brightness(0.1)", scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
*/