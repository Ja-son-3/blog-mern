import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { createBrowserRouter, createRoutesFromElements, Link, Route, Outlet, RouterProvider} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings/> : <Login />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
      </Route>
    )
  )

  return (
    <>
      <TopBar />
      <RouterProvider  router={router}/>   
    </>
  );
}

const Root = () => {

  return (
    <> 
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
