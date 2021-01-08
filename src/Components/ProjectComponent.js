import {React, Component,} from 'react';
import {  Input, Button, Modal, ModalHeader,ModalBody,ModalFooter, Form, FormGroup, Label } from 'reactstrap';



class Project extends Component{
    
    constructor(props){
        super(props);
        this.state={
           modal:false,
           value:this.props.projects[0].name,
           projectName:"",
        }
        //console.log(this.props.projects);
        this.toggle=this.toggle.bind(this);
    }
    
    toggle(){
        this.setState({modal:!this.state.modal});
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value});
        this.props.onClick(e.target.value);
    }
    onProjectName=(e)=>{
        this.setState({projectName:e.target.value});
    }
    addProject=(e)=>{
        //console.log(this.state.projectName);
        this.props.onNewProject(this.state.projectName);
        this.setState({modal:!this.state.modal});
    }
    render(){
        let i=1;
        //console.log(this.props.projects);
        return(
            <>
                 <div className="row ml-4 mr-4" >
                    <div className="input-group mb-3">
                    <select value={this.state.value} onChange={this.handleChange} className="form-control selectProject">
                            {
                                this.props.projects.map(project=>{
                                    return(  
                                  <option key={i++} value={project.name} >{project.name}</option>  
                                    )
                                })
                            }
                    </select>
                    <div>&nbsp;&nbsp;</div>
                    <button type="button" className="btn btn-secondary" onClick={this.toggle}>Add Project</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle} style={{backgroundColor:'royalblue', color:'white'}}><b>Project</b></ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="projectName">Name</Label>
                                <Input type="text" name="projectName" id="projectName" placeholder="Project Name" value={this.state.projectName} onChange={this.onProjectName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="projectDetails">Details</Label>
                                <Input type="textarea" name="projectDetails" id="projectDetails" placeholder="project Details" />
                            </FormGroup>
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.addProject}>Add</Button>{' '}
                        <Button color="secondary"  onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                </div> 
            
        
             
            </>
        );
    }

}

export default Project;