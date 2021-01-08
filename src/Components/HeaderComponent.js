import {React, Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component{
    render(){
        return (
            <>
                <Navbar color="primary" expand="md" >
                        <NavbarBrand href="/" className="navHead" style={{marginLeft:13}}><b><i>Project Dashboard</i></b></NavbarBrand>
                </Navbar>
            </>
        );
    }
}

export default Header;