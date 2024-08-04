import Header from "../../components/HeaderMainPage/Header";
import MainContent from "../../components/MainContent/MainContent";
import {motion} from 'framer-motion';
function HomePage() {
  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="mainpageWallpaper d-flex flex-column justify-content-between">
        <Header />
        <MainContent />
      </motion.div>
    </>
  )
}

export default HomePage;
