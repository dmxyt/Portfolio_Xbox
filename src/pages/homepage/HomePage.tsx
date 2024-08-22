import Header from "../../components/HeaderMainPage/Header";
import MainContent from "../../components/MainContent/MainContent";
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ scale: 2.5, filter: "brightness(0)" }}
        animate={{ scale: 1, filter: "brightness(1)" }}
        exit={{ scale: 1.5, filter: "brightness(0)" }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="mainpageWallpaper d-flex flex-column justify-content-between"
      >
        <AnimatePresence>
          <Header />
          <MainContent />
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default HomePage;
