import {React, Component} from 'react';
import  Header from './HeaderComponent';
import Section from './SectionComponent';
import Members from './MembersComponent';
import Updates from './UpdatesComponent';
import Menu from './MenuComponent';
import Project from './ProjectComponent'; 
import DetailedSection from './DetailedSectionComponent';
import {Switch, Route, Redirect} from 'react-router-dom';




class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            
            selectedProject:"sky height project",
            projects:[
                {
                    name:"sky height project",
                    sections:[
                                {
                                    name:"living room",
                                    date:"07-01-2021",
                                    layout:"/assets/layout.PNG",
                                    products:[
                                                {
                                                    photo:"/assets/product1.PNG",
                                                    name:"Sofa Lorem ipsum",
                                                    category:"Sofas"
                                                },
                                                {
                                                    photo:"/assets/product2.PNG",
                                                    name:"Mirror Lorem ipsum",
                                                    category:"Mirrors"
                                                }
                                            ],
                                    discussion:[
                                                    {
                                                        photo:"/assets/comment.PNG",
                                                        name:"vamshi",
                                                        comment:"very nice",
                                                        time:"2:30",
                                                    }
                                                ]
                                },
                                {
                                    name:"kitchen room",
                                    date:"02-01-2021",
                                    layout:'/assets/layout.PNG',
                                    products:[
                                        {
                                            photo:"/assets/product1.PNG",
                                            name:"Sofa Lorem ipsum",
                                            category:"Sofas"
                                        },
                                        {
                                            photo:"/assets/product2.PNG",
                                            name:"Mirror Lorem ipsum",
                                            category:"Mirrors"
                                        }
                                    ],
                            discussion:[
                                            {
                                                photo:"/assets/comment.PNG",
                                                name:"vamshi",
                                                comment:"very nice",
                                                time:"2:30",
                                            }
                                        ]
                                }
                            ],
                    members:[
                                {
                                    name:"Anshul Gupta",
                                    photo:'/assets/person1.PNG',
                                    designation:"Architect",
                                    company:"Design Consortium",
                                    phone:"+91 9989709841",
                                    email:"anshul@gmail.com"
                                },
                                {
                                    name:"Shivani Gupta",
                                    photo:'/assets/person3.PNG',
                                    designation:"Landscape Designer",
                                    company:"Nunc mattis",
                                    phone:"+91 9876524512",
                                    email:"shivani@gmail.com"
                                },
                                {
                                    name:"Ashmita Jain",
                                    photo:'/assets/person2.PNG',
                                    designation:"Plumbing Concultant",
                                    company:"KTL Pvt. Ltd.",
                                    phone:"+91 7306225565",
                                    email:"ashmitha@gmail.com"
                                },
                            ]
                },
                {
                    name:"Green land project",
                    sections:[
                                {
                                    name:"Garden",
                                    date:"07-01-2021",
                                    layout:'/assets/layout.PNG',
                                    products:[
                                        {
                                            photo:"/assets/product1.PNG",
                                            name:"Sofa Lorem ipsum",
                                            category:"Sofas"
                                        },
                                        {
                                            photo:"/assets/product2.PNG",
                                            name:"Mirror Lorem ipsum",
                                            category:"Mirrors"
                                        }
                                    ],
                            discussion:[
                                            {
                                                photo:"/assets/comment.PNG",
                                                name:"vamshi",
                                                comment:"very nice",
                                                time:"2:30",
                                            }
                                        ]

                                },
                                {
                                    name:"Parking",
                                    date:"02-01-2021",
                                    layout:'/assets/layout.PNG',
                                    products:[
                                        {
                                            photo:"/assets/product1.PNG",
                                            name:"Sofa Lorem ipsum",
                                            category:"Sofas"
                                        },
                                        {
                                            photo:"/assets/product2.PNG",
                                            name:"Mirror Lorem ipsum",
                                            category:"Mirrors"
                                        }
                                    ],
                            discussion:[
                                            {
                                                photo:"/assets/comment.PNG",
                                                name:"vamshi",
                                                comment:"very nice",
                                                time:"2:30",
                                            }
                                        ]
                                }
                            ],
                            members:[
                                {
                                    name:"Karanveer Singh",photo:'/assets/person4.PNG',
                                    designation:"coo",
                                    company:"Sem metus",
                                    phone:"+91 9234158679",
                                    email:"karanveer@gmail.com"
                                },
                                {
                                    name:"Anshul Gupta",photo:'/assets/person2.PNG',
                                    designation:"Architect",
                                    company:"Design Consortium",
                                    phone:"+91 9989709841",
                                    email:"anshul@gmail.com"
                                },
                                {
                                    name:"Ashmita Jain",photo:'/assets/person1.PNG',
                                    designation:"Plumbing Concultant",
                                    company:"KTL Pvt. Ltd.",
                                    phone:"+91 7306225565",
                                    email:"ashmitha@gmail.com"
                                },
                            ]
                }
            ]
        }
        
    }
    onSelect=(project)=>{
        this.setState({selectedProject:project});
        //console.log(this.state.projects.filter(project=>project.name===this.state.selectedProject)[0]);
        //console.log(this.state.selectedProject);
        
    }
    getDate(){
        let newDate=new Date();
        return  `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getUTCFullYear()}`;
    }
    onNewPro=(project)=>{
        
        var a={
            name:project,
            sections:[
                        {
                            name:"introduction",
                            date:this.getDate(),
                            layout:'/assets/layout.PNG',
                                    products:[
                                                {
                                                    photo:"/assets/product1.PNG",
                                                    name:"Sofa Lorem ipsum",
                                                    category:"Sofas"
                                                },
                                                {
                                                    photo:"/assets/product2.PNG",
                                                    name:"Mirror Lorem ipsum",
                                                    category:"Mirrors"
                                                }
                                            ],
                                    discussion:[
                                                    {
                                                        photo:"/assets/comment.PNG",
                                                        name:"vamshi",
                                                        comment:"very nice",
                                                        time:"2:30",
                                                    }
                                                ]
                        }
                    ],
            members:[
                {
                    name:"Ashmita Jain",photo:'/assets/person1.PNG',
                    designation:"Plumbing Concultant",
                    company:"KTL Pvt. Ltd.",
                    phone:"+91 7306225565",
                    email:"ashmitha@gmail.com"
                }
                    ]
        }
        this.setState({projects:this.state.projects.concat(a)});
        //console.log(this.state.projects);
    }
    onNewSec=(sec)=>{
        //console.log(sec);
        var b={
            name:sec,
            date:this.getDate(),
            layout:"/assets/layout.PNG",
                                    products:[
                                                {
                                                    photo:"/assets/product1.PNG",
                                                    name:"Sofa Lorem ipsum",
                                                    category:"Sofas"
                                                },
                                                {
                                                    photo:"/assets/product2.PNG",
                                                    name:"Mirror Lorem ipsum",
                                                    category:"Mirrors"
                                                }
                                            ],
                                    discussion:[
                                                    {
                                                        photo:"/assets/comment.PNG",
                                                        name:"vamshi",
                                                        comment:"very nice",
                                                        time:"2:30",
                                                    }
                                                ],
                
                
            members:[
                {
                    name:"Ashmita Jain",photo:'/assets/person1.PNG',
                    designation:"Plumbing Concultant",
                    company:"KTL Pvt. Ltd.",
                    phone:"+91 7306225565",
                    email:"ashmitha@gmail.com"
                }
                    ]
        }
        var p=this.state.projects.filter(p=>p.name===this.state.selectedProject)[0];
        p.sections.push(b);
        for(var i=0;i<this.state.projects.length;i++){
            if(this.state.projects[i].name===this.state.selectedProject){
                this.setState({projects:this.state.projects.splice(i,1)});
            }
        }
        this.setState({projects:this.state.projects.concat(p)});
    }
    onNewMem=(mem)=>{
        var b={
            name:mem.name,
            photo:'/assets/person4.PNG',
            designation:mem.desig,
            company:mem.comp,
            phone:mem.phone,
            email:mem.mail
        }
        var p=this.state.projects.filter(p=>p.name===this.state.selectedProject)[0];
        p.members.push(b);
        for(var i=0;i<this.state.projects.length;i++){
            if(this.state.projects[i].name===this.state.selectedProject){
                this.setState({projects:this.state.projects.splice(i,1)});
            }
        }
        this.setState({projects:this.state.projects.concat(p)});
    }
    getTime(){
        var today = new Date()
    return `${today.getHours()} : ${today.getMinutes()}`;
    }
    onCom=(com)=>{
        //console.log(com);
        let a={
            name:com.name,
            comment:com.comment,
            photo:"/assets/comment.PNG",
            time:this.getTime()
        }
        var p=this.state.projects.filter(p=>p.name===this.state.selectedProject)[0];
        for(var i=0;i<this.state.projects.length;i++){
            if(this.state.projects[i].name===this.state.selectedProject){
            for(var j=0;j<this.state.projects[i].sections.length;j++){
                if(this.state.projects[i].sections[j].name===com.section){
                    this.state.projects[i].sections[j].discussion.push(a);
                }
            }
            }
        }
        for(i=0;i<this.state.projects.length;i++){
            if(this.state.projects[i].name===this.state.selectedProject){
                this.setState({projects:this.state.projects.splice(i,1)});
            }
        }
        this.setState({projects:this.state.projects.concat(p)});
    }
    render(){
        const onDetailSection=({match})=>{
            var a=this.state.projects.filter(p=>p.name===this.state.selectedProject)[0].sections;
            //console.log(a.filter(s=>s.name===match.params.section)[0],a,match.params.section);
            if(a.filter(s=>s.name===match.params.section)[0]===undefined){
                return(<Section project={this.state.projects.filter(project=>project.name===this.state.selectedProject)[0]}/>)
            }
            return(
                <DetailedSection onComment={this.onCom} section={match.params.section} project={this.state.selectedProject} details={a.filter(s=>s.name===match.params.section)[0]}/>
            );
        }
       return ( 
       <>
            <Header />
            <br/>
            <Project projects={this.state.projects} sel={this.state.selectedProject}  onNewProject={this.onNewPro} onClick={this.onSelect}/>
            <br/>
            <Menu onNewSec={this.onNewSec} onNewMem={this.onNewMem}/><br/>
            <Switch>
                <Route path='/section' component={()=><Section project={this.state.projects.filter(project=>project.name===this.state.selectedProject)[0]}/>}/>
                <Route path='/members' component={()=><Members project={this.state.projects.filter(project=>project.name===this.state.selectedProject)[0]}/>}/>
                <Route path='/updates' component={()=><Updates/>}/>
                <Route path='/detailedsection/:section' component={onDetailSection} />
                <Redirect to="/section"/>
            </Switch>
            
        </>
       );
    };
}

export default Main;