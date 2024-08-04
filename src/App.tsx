import { routes } from "./router";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedComponents/AnimatedComponents";
function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  )
}

export default App;
{/* <RouterProvider router={routes}/> */}
