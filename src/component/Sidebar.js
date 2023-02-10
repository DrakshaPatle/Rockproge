// import React from 'react'
// import "./Navbar.css"
// const Sidebar = () => {
//     return (
//         <>


//             <div className="sidebar-page-container" id="sidebar-page-container">
//                 {/* Sidebar */}
//                 <div className="sidebar-content">
//                     {/* sidebar toggle button */}
//                     <button className="sidebar-toggle" id="sidebar-toggler">
//                         <ion-icon name="menu-outline" />
//                     </button>
//                     <nav id="sidebarMenu" className="d-lg-block sidebar bg-white">
//                         <div className="position-sticky">
//                             <div id="sidebar" className="list-group list-group-flush mt-4">
//                                 <a
//                                     href="index.html"
//                                     className="list-group-item list-group-item-action py-2 ripple sidebar-item"
//                                     aria-current="true"
//                                 >
//                                     <i className="fa-solid fa-house fa-fw me-3" />
//                                     <span>Home</span>
//                                 </a>
//                                 <a
//                                     href="about.html"
//                                     className="list-group-item list-group-item-action py-2 ripple sidebar-item active"
//                                 >
//                                     <i className="fa-solid fa-users fa-fw me-3" />
//                                     <span>About us </span>
//                                 </a>
//                                 <a
//                                     href="contact.html"
//                                     className="list-group-item list-group-item-action py-2 ripple sidebar-item"
//                                 >
//                                     <i className="fa-solid fa-envelope fa-fw me-3" />
//                                     <span>Contact us</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </div>

//         </>
//     )
// }
// export default Sidebar;




import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav   style={{ background: "black" }} expanded={this.state.isVisible} >
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">


<NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>


            <NavText style={{marginTop:"20px"}}><h6>Home</h6></NavText>


          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>

            <NavText><h5>placed orders </h5></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText><h5>Orders</h5></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText><h5>Destination </h5></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            
          
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
