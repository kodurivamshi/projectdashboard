import {React, Component} from 'react';
import {Link} from 'react-router-dom';

class Section extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            val:""
        }
        this.toggle=this.toggle.bind(this);
    }
    toggle=(e)=>{
        
        this.setState({val:e.target.textContent});
    }
    sections=()=>{
        return(
            <div>{this.props.project.sections.map(sec=>{
                    return(
                        <>
                 <Link to= {`/detailedsection/${sec.name}`}>  <div className="row row1" onClick={this.toggle}>
                        <div className="col-9 ml-4">{sec.name}</div>
                        <div className="col-2">{sec.date}</div>
                    </div></Link> 
                    
                    </>
                    );
            })}
            </div>
        )
    }
    render(){
        //console.log(this.props.project)
        return(
            <>
                <div>
                    <div className="row">
                        <div className="col-9 ml-4"><b>Name</b></div>
                        <div className="col-2"><b>Date Modified</b></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 ml-4">
                <hr style={{ color: "gray",backgroundColor: "gray",height: 2,}}/></div></div>
            
                {this.sections()}
            
            </>
        );
    }
}

export default Section;