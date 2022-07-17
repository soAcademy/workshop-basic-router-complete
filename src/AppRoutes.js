import { useRoutes, Outlet } from "react-router-dom"
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import AboutUs from './Pages/AboutUs'
import PageNotFound from './Pages/PageNotFound'

const AppRoutes = () =>(
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/detail", element: <Detail /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/*", element: <PageNotFound /> },
  ]))

export default AppRoutes
