import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import videoWallpaper from '../public/WallpaperXbox.mp4';
function App() {
  return (
    <>
      <div className="mainWallpaper">
        {/* <video autoPlay muted loop className="mainWallpaper">
          <source src={videoWallpaper} type="video/mp4" />
        </video> */}
        <Header />
        <MainContent />
      </div>
    </>
  )
}

export default App
