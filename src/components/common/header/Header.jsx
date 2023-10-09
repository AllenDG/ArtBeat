import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { signin } from "../../data/Data"
import { Link} from "react-router-dom"


const Header = () => {
  const [navList, setNavList] = useState(false)


return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
             <h1>Art Beat </h1>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              
            </h4>
            <Link to='/login'>
              <i className='fa fa-sign-out'></i> Sign In
            </Link>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
