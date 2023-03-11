import "./topbar.css"

export default function topbar() {
  const user = false
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
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <a className="link" href={`/settings`}>
                <img className="topImg" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg" alt="" />
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
