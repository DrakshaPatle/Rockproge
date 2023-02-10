
// import React from 'react'
// import "./Navbar.css"
// const Navbar = () => {
//     return (
//         <div>

//             <nav
//                 className="navbar navbar-expand-lg fixed-top navbar-light"
//                 //   style={{"background-color: #51cf66"}}
//                 id="navbar"
//             >
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">
//                         <i
//                             className="fas fa-solid fa-plane-departure fa-beat-fade fa-2xl"
//                         // style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075"
//                         ></i>
//                         <span className="brand-name">Travels</span>
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarCollapse"
//                         aria-controls="navbarCollapse"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarCollapse">
//                         <div className="ms-auto grid me-2">
//                             <button
//                                 className="btn btn-outline-dark"
//                                 type="button"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#signUpModal"
//                             >
//                                 Sign-up
//                             </button>

//                             <button
//                                 className="btn btn-dark"
//                                 type="button"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#loginModal"
//                             >
//                                 Login
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>


//         </div>
//     )
// };

// export default Navbar





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
          <Navbar.Brand href=""   style={{marginLeft:"50px"}}>CONTAINER</Navbar.Brand>

          <button style={{   marginLeft:"1350px",backgroundColor:"#3BB9FF",paddingBottom:"20px", paddingLeft:"30px",borderRadius:"12px", textAlign:"center"}}> Country</button>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;
