import { routes } from "./router";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/contactsOffCanva/Contacts";
function App() {
  return (
    <>
      <div >
        <RouterProvider router={routes}/>
      </div>
    </>
  )
}

export default App;
