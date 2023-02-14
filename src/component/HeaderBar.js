import logo from './assets/rock-pros-usa.jpg'
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./myStyles.css";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          {/* <Navbar.Brand href=""   style={{marginLeft:"50px"}}>ROCKPROGE</Navbar.Brand> */}

          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="50"
             style={{ marginLeft:"12px", marginTop:"10px"}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"

            />
            
          </Navbar.Brand>

         
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;
