import {React, Component} from 'react';

class Updates extends Component{
    render(){
        return(
            <>
                <div style={{marginTop:100,display:"flex",justifyContent:"center"}}>
                   <div><b>---</b>&nbsp;&nbsp;&nbsp;</div> 
                   <div style={{color:"#848482"}}><b>No Updates</b></div>
                   <div>&nbsp;&nbsp;&nbsp;<b>---</b></div>
                </div>
            </>
        );
    }
}

export default Updates;