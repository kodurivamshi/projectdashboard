import {React, Component,useState} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,Navbar, Collapse, NavbarToggler, NavItem,Nav ,Input, Button, Modal, ModalHeader,ModalBody,ModalFooter, Form, FormGroup, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { createBrowserHistory } from "history";



const Example = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="primary">
          Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Small</DropdownItem>
          <DropdownItem>Medium</DropdownItem>
          <DropdownItem>Large</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>others</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            isFilter:false,
            isOpen:true,
            hideValu : 1,
            secshowme:true,
            memshowme:false,
            modal:false,
            memModal:false,
            memName:"",
            memDesig:"",
            memComp:"",
            memPhone:"",
            memMail:"",
            secName:""
        }
        this.upOperation1=this.upOperation1.bind(this);
        this.upOperation=this.upOperation.bind(this);
        this.memOperation=this.memOperation.bind(this);
        this.secOperation=this.secOperation.bind(this);
        this.toggle=this.toggle.bind(this);
        this.toggleSec=this.toggleSec.bind(this);
        this.toggleMem=this.toggleMem.bind(this);
        this.onFilter=this.onFilter.bind(this);
        // this.changeNavItem = this.changeNavItem.bind(this);
    }

    // componentDidMount(){
        
    //     console.log(createBrowserHistory().location.pathname);
    //     this.changeNavItem(createBrowserHistory().location.pathname);

    //    }

    //    changeNavItem(currentRoute){
    //     if(currentRoute === "/section"){
    //          this.setState({
    //             hideValu : 0
    //          });
    //       }
    //   }
    onFilter=()=>{
        this.setState({isFilter:!this.state.isFilter});
        //console.log(this.state.isFilter);
    }
    toggleSec(){
        this.setState({modal:!this.state.modal});
    }
    toggleMem(){
        this.setState({memModal:!this.state.memModal});
    }

        upOperation(){
            this.setState({memshowme:this.state.memshowme,secshowme:!this.state.secshowme})
        }
        upOperation1(){
            this.setState({memshowme:!this.state.memshowme,secshowme:this.state.secshowme})
        }

      memOperation(){
          this.setState({memshowme:!this.state.memshowme})
          
      }

      secOperation()
        {
        this.setState({secshowme:!this.state.secshowme})
        
        }

    toggle(){
        this.setState({isOpen:!this.state.isOpen})
    }


    onSecName=(e)=>{
        this.setState({secName:e.target.value});
    }
    onSec=(e)=>{
       
        this.props.onNewSec(this.state.secName);
        this.setState({modal:!this.state.modal});
    }

    onMem=(e)=>{
        let mem={name:this.state.memName,desig:this.state.memDesig,comp:this.state.memComp,phone:this.state.memPhone,
                    mail:this.state.memMail}
        this.props.onNewMem(mem);
        this.setState({memModal:!this.state.memModal});
    }
    onMemName=(e)=>{
        this.setState({memName:e.target.value});
    }
    onMemDesig=(e)=>{
        this.setState({memDesig:e.target.value});
    }
    onMemComp=(e)=>{
        this.setState({memComp:e.target.value});
    }
    onMemPhone=(e)=>{
        this.setState({memPhone:e.target.value});
    }
    onMemEmail=(e)=>{
        this.setState({memMail:e.target.value});
    }



    nav(){
        //console.log(createBrowserHistory().location.pathname);
        if(createBrowserHistory().location.pathname==="/section" || createBrowserHistory().location.pathname==="/"){
            
            return (
                <div className="menu ml-4 mr-4">
                <Navbar color="light" light expand="md" >
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {
                                this.state.secshowme?
                                <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/section" activeClassName="secactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Sections</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink onClick={this.memOperation}  className="nav-link" to="/members" activeClassName="memactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Members</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink onClick={this.upOperation} className="nav-link" to="/updates" activeClassName="upactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Updates</b></NavLink>
                                </NavItem>
                               
                                <NavItem style={{marginLeft:650}}>
                                    <NavLink  className="nav-link" to="#"  ><button className="btn btn-primary" onClick={this.toggleSec}>Add Section</button></NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink  className="nav-link" to="#"  ><Example/></NavLink>
                                </NavItem>
                                </Nav>
                                :
                                <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink  onClick={this.secOperation} className="nav-link" to="/section" activeClassName="secactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Sections</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/members" activeClassName="memactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Members</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/updates" activeClassName="upactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Updates</b></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="#"  ><Example/></NavLink>
                                </NavItem>
                            </Nav>
                            }
                         </Collapse>
                </Navbar>
                </div>
                
            );
        }
        if(createBrowserHistory().location.pathname==="/members"){
            return (
                
                <div className="menu ml-4 mr-4">
                <Navbar color="light" light expand="md" >
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {
                                this.state.memshowme?
                                <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={this.memOperation} className="nav-link" to="/section" activeClassName="secactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Sections</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink   className="nav-link" to="/members" activeClassName="memactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Members</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink onClick={this.upOperation1} className="nav-link" to="/updates" activeClassName="upactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Updates</b></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{marginLeft:650}} className="nav-link" to="#"><button className="btn btn-primary" onClick={this.toggleMem}>Add Members</button></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink  className="nav-link" to="#"  ><Example/></NavLink>
                            </NavItem>
                                </Nav>
                                
                                :
                                <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink   className="nav-link" to="/section" activeClassName="secactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Sections</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink onClick={this.memOperation} className="nav-link" to="/members" activeClassName="memactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Members</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/updates" activeClassName="upactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Updates</b></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="#"  ><Example/></NavLink>
                                </NavItem>
                            </Nav>
                            }
                         </Collapse>
                </Navbar>
                </div>
                
            );  
        }
        else{
            return(<div className="menu ml-4 mr-4">
                <Navbar color="light" light expand="md" >
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            
                                <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink  onClick={this.secOperation} className="nav-link" to="/section" activeClassName="secactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Sections</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink  onClick={this.memOperation} className="nav-link" to="/members" activeClassName="memactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Members</b></NavLink>
                                </NavItem>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/updates" activeClassName="upactive" activeStyle={{color: "black",backgroundColor:'#B6B6B4',borderRadius:5}}><b>Updates</b></NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:700}}>
                                    <NavLink  className="nav-link" to="#"  ><Example/></NavLink>
                                </NavItem>
                                
                            </Nav>
                         
                 </Collapse>
                </Navbar>
                </div> 
        );}
        
    }

    render(){
        
        return(
            <>
                
                {this.nav()}
                <Modal isOpen={this.state.modal} toggle={this.toggleSec}>
                        <ModalHeader toggle={this.toggleSec} style={{backgroundColor:'royalblue', color:'white'}}><b>Section</b></ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="projectName">Name</Label>
                                <Input type="text" name="projectName" id="projectName" placeholder="section" value={this.state.secName} onChange={this.onSecName}/>
                            </FormGroup>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.onSec}>Add</Button>{' '}
                        <Button color="secondary"  onClick={this.toggleSec}>Cancel</Button>
                        </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.memModal} toggle={this.toggleMem}>
                        <ModalHeader toggle={this.toggleMem} style={{backgroundColor:'royalblue', color:'white'}}><b>Member</b></ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="Name">Name</Label>
                                <Input type="text" name="Name" id="Name" placeholder="Name" value={this.state.memName} onChange={this.onMemName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="desig">Designation</Label>
                                <Input type="text" name="desig" id="desig" placeholder="Designation" value={this.state.memDesig} onChange={this.onMemDesig}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="comp">Company</Label>
                                <Input type="text" name="comp" id="comp" placeholder="Company" value={this.state.memComp} onChange={this.onMemComp}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone No.</Label>
                                <Input type="text" name="phone" id="phone" placeholder="Phone number" value={this.state.memPhone} onChange={this.onMemPhone}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="mail">Email</Label>
                                <Input type="email" name="mail" id="mail" placeholder="mail ID" value={this.state.memMail} onChange={this.onMemEmail}/>
                            </FormGroup>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.onMem}>Add</Button>{' '}
                        <Button color="secondary"  onClick={this.toggleMem}>Cancel</Button>
                        </ModalFooter>
                </Modal>

            </>
        );
    }
}

export default Menu;