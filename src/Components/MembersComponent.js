import {React, Component} from 'react';
import {Card,  CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter} from 'reactstrap';

class Members extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    
   
    render(){
     
        return(
            <>
                <div >
                <div className="row ml-4">
                    { 
                        this.props.project.members.map(p=>{
                            return(
                                <>
                                    
                                        <div className="col-3">
                                        <Card className="card">
                                           <div ><div style={{textAlign:"center"}}> <img src={p.photo} width="90" height="90"  alt="" /></div></div>
                                            <CardBody>
                                            <div style={{textAlign:"center"}}> <CardTitle  tag="h5">{p.name}</CardTitle></div>
                                            <div style={{textAlign:"center",color:"#B6B6B4"}}><CardSubtitle>{p.designation}</CardSubtitle></div>
                                            <div style={{textAlign:"center",color:"#848482",margin:15}}><CardText><b>{p.company}</b></CardText></div>
                                            </CardBody>
                                            <div style={{textAlign:"center"}}>
                                            <CardFooter className="cardFoot">
                                                <p style={{color:"#B6B6B4",marginBottom:0,fontSize:15}}>{p.email}</p>
                                                <p style={{color:"#B6B6B4",fontSize:15}}>{p.phone}</p>
                                            </CardFooter>
                                            </div> </Card>
                                        </div>
                                
                                </>
                            )
                        })
                    }
                   </div>
                </div>
            </>
        );
    }
}

export default Members;