import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { createBrowserRouter, createRoutesFromElements, Link, Route, Outlet, RouterProvider} from 'react-router-dom'

function App() {
  const currentUser = false;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings/> : <Login />} />
        <Route path="/register" element={currentUser ? <Home/> : <Register />} />
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
