import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home"
import About from "./pages/about"
import Settings from "./pages/settings"

function App() {

  const router = createBrowserRouter([
    {
      path: "/", 
      element:<Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "settings",
      element: <Settings/>
    }
  ])

  return (
    <RouterProvider router ={router}/>
  )
}

export default App
