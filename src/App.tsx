import { routes } from "./router";
import { RouterProvider } from "react-router-dom";

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
