import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Contacts from "../../components/contactsOffCanva/Contacts";
function HomePage() {
  return (
    <>
      <div className="mainpageWallpaper">
        <Header />
        <MainContent />
        <Contacts />
      </div>
    </>
  )
}

export default HomePage;
