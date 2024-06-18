import Header from "../../components/HeaderMainPage/Header";
import MainContent from "../../components/MainContent/MainContent";
function HomePage() {
  return (
    <>
      <div className="mainpageWallpaper d-flex flex-column">
        <Header />
        <MainContent />
      </div>
    </>
  )
}

export default HomePage;
