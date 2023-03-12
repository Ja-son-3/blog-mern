import { useContext } from "react"
import { Context } from "../../context/Context"
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <a className="link" href={`/`}>HOME</a>
            </li>
            <li className="topListItem">
              <a className="link" href={`/`}>ABOUT</a>
            </li>
            <li className="topListItem">
              <a className="link" href={`/`}>CONTACT</a>
            </li>
            <li className="topListItem">
              <a className="link" href={`/write`}>WRITE</a>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT" }
            </li>
          </ul>
        </div>
        <div className="topRight">

          {
            user ? (
              <a className="link" href={`/settings`}>
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </a>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <a className="link" href={`/login`}>LOGIN</a>
                </li>
                <li className="topListItem">
                  <a className="link" href={`/register`}>REGISTER</a>
                </li>
              </ul>
            )
          }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
