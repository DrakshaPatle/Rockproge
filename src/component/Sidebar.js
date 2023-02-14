
import React from "react";
import { FaHeart } from "react-icons/fa";

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
            <SideNav style={{ background: "black" }} expanded={this.state.isVisible} >
                <SideNav.Toggle
                    onClick={() => {
                        this.setState({ isVisible: !this.state.isVisible });
                    }}
                />
                <SideNav.Nav defaultSelected="home">

                    <NavItem eventKey="home">
                        <NavText style={{ marginTop: "20px" }}><h6> <span> <i class="fa-duotone fa-bell"></i> </span>  Dashboard</h6> 
                        </NavText>
                    </NavItem>
                    

                    <NavItem eventKey="home">
                        <NavText ><h6>    <span><i class="fa-sharp fa-solid fa-file-pdf"></i></span>  Quoatation</h6> 
                        </NavText>
                    </NavItem>
                   
                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-file-pdf"></i></span>  Quoatation</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-file"></i></span>  Orders</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-truck"></i></span>  Dispatch</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6> <span><i class="fa-sharp fa-solid fa-truck"></i></span>    Loadout</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>  <span><i class="fa-sharp fa-solid fa-file"></i></span> Reports</h6> 
                        </NavText>
                    </NavItem>
<h5>Admin</h5>

<NavItem eventKey="home">
                        <NavText style={{ marginTop: "20px" }}><h6>   <span> <i class="fa-duotone fa-bell"></i> </span>  Dashboard</h6> 
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-file-pdf"></i></span>  Quoatation</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-file"></i></span>  Orders</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>   <span><i class="fa-sharp fa-solid fa-truck"></i></span>  Dispatch</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6> <span><i class="fa-sharp fa-solid fa-truck"></i></span>    Loadout</h6> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavText ><h6>  <span><i class="fa-sharp fa-solid fa-file"></i></span> Reports</h6> 
                        </NavText>
                    </NavItem>
                   

                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default SideNavBar;
