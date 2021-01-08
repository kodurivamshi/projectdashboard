import {React,Component} from 'react';
import {Button, Modal, ModalHeader,ModalBody,ModalFooter, Form, FormGroup, Label,Input} from 'reactstrap';
import Dropzone from "react-dropzone";

class DetailedSection extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            name:"",
            comment:""
        }
    }
    toggle=()=>{
        this.setState({isOpen:!this.state.isOpen});
    }
    onName=(e)=>{
        this.setState({name:e.target.value});
    }
    onComment=(e)=>{
        this.setState({comment:e.target.value});
    }
    onPost=()=>{
        let a={
            name:this.state.name,
            comment:this.state.comment,
            section:this.props.section
        }
        this.props.onComment(a);
        this.setState({isOpen:!this.state.isOpen});
    }
    render(){
       
        return(
            <>
          
            <div className="details">
            <div style={{marginBottom:0}}>Project Dashboard&nbsp;&gt;&nbsp;{this.props.project}&nbsp;&gt;&nbsp;{this.props.section}
            <hr style={{ color: "gray",backgroundColor: "gray",height: 2,}}/>
            </div>
            <div className="detailHead"><b>{this.props.section}</b></div>
            <div><b>Products</b>
            <hr style={{ marginBottom:0,color: "gray",backgroundColor: "gray",height: 1,}}/>
            </div>
            <div className="productHead">
            <div className="row mt-3">
                <div className="col-2"><div style={{color:"gray"}}><b>Product Image</b></div></div>
                <div className="col-7"><div style={{color:"gray"}}><b>Product Name</b></div></div>
                <div><div style={{color:"gray"}}><b>Product Category</b></div></div>
            </div>
            <hr style={{ marginBottom:0,color: "#B6B6B4",backgroundColor: "#B6B6B4",height: 1,marginRight:50}}/>
            <div>
                {this.props.details.products.map(p=>{return(
            <div className="row mt-3">
                <div className="col-2"><div><img src={p.photo} alt=""/></div></div>
                <div className="col-7"><div>{p.name}</div></div>
                <div><div>{p.category}</div></div>
            </div>)})
                }
            </div>
            </div>
            <div><b>Layout</b></div>
            <hr style={{ marginBottom:0,color: "gray",backgroundColor: "gray",height: 1,}}/>
            <br/><div align="center"><img src={this.props.details.layout} alt=""/></div>
            <div className="App">
            <div>
                <Dropzone >
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Drop or click files</p>
                    </div>
                    )}
                </Dropzone>
                
            </div>

            </div>
            <div>
                <div><b>Discussion</b></div>
                <hr style={{ marginBottom:0,color: "gray",backgroundColor: "gray",height: 1,}}/>
                <div className="com mt-3 mb-3">
                    {
                        this.props.details.discussion.map(d=>{
                            return(<>
                                <div className="com1 mt-2" style={{display:"flex"}}>
                                    <div><img src={d.photo} alt=""/></div>&nbsp;&nbsp;
                                    <div>{d.name}</div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div style={{fontSize:13,color:"grey"}}>{d.time}</div>
                                </div>
                                <div style={{fontSize:13}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.comment}</div>
                            </>)
                        })
                    }
                    
                </div>
                <Button class="btn btn-primary" onClick={this.toggle}>Comment</Button>
            </div>
            </div>
            <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle} style={{backgroundColor:'royalblue', color:'white'}}><b>Comment</b></ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="Name">Name</Label>
                                <Input type="text" name="Name" id="Name" placeholder="Name" value={this.state.name} onChange={this.onName}/>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input type="textarea" name="comment" id="comment" placeholder="comment" value={this.state.comment} onChange={this.onComment}/>
                            </FormGroup>
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.onPost}>Post</Button>{' '}
                        <Button color="secondary"  onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default DetailedSection;