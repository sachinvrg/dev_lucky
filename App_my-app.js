//import React, { Component} from "react";
//import Pt, { string, string } from "prop-types"



//class component
/*class App extends Component{
    render(){

        return(
        
            <React.Fragment>
            <h1>LuckyWorld</h1>
            <h2>chinuChinu</h2>
            </React.Fragment>
        );
    }
}


export default App;*/



//function component
/*const Student = props => {
return <h1>hello {props.name}</h1>;
}
export default Student;*/



//refering component to another component

/*const Chinu=()=>{

    return <h1>hello Buddy</h1>;
}
export default Chinu;*/



//propTypes typechecking

/*class App extends Component{

    render(){
        return (
    <div>
    <h1>Hello {this.props.name}</h1>
    <h1>roll no {this.props.roll}</h1>
    </div>

        );
        
    }
}

App.propTypes={

    name: Pt.string.isRequired,
    roll: Pt.number
};

App.defaultProps={
    name: "Chinu"
};

export default App;*/


//props children

/*const Student = props => {
    return <h1>hello {props.children}</h1>;
    }
    export default Student;*/


//state without constructor


/*class Student extends Component{

    state ={
        name: "Lucky",
        roll: this.props.roll
    };
    
    render(){
        return <h1>Name is {this.state.name} and roll no. is {this.state.roll}</h1>
    }
}

export default Student;*/

//state with constructor

/*class Student extends Component{

    constructor(props){
        super(props);

    this.state ={
        name: "Lucky",
        roll: "101"
    };

}
    
    render(){
        return <h1>Name is {this.state.name} and roll no. is {this.state.roll}</h1>
    }
}

export default Student;*/


//Event handler


/*class Student extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("button clicked",this);
    }
    render(){
        return <div>
            
            <h1>Hello Event</h1>
            <button type="click" onClick={this.handleClick}>click me</button>
            </div>
    }
}

export default Student;*/


//update state using setState

/*class Student extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "chinu",
            roll: "100"
        }
    }
    handleClick=()=>{
        this.setState({name:"lucky" ,roll:"105"})
    }
    render(){
        return <div>
            
            <h1>Hello Event</h1>
    <h1>name is {this.state.name} and roll no. is {this.state.roll}</h1>
            <button type="click" onClick={this.handleClick}>click me</button>
            </div>
    }
}

export default Student;*/


//function in setState mathod

/*class Student extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "chinu",
            roll: this.props.roll
        }
    }
    handleClick=()=>{
        this.setState(function(state,props){
            console.log(props.roll);
        });
    }
    render(){
        return <div>
            
            <h1>Hello Event</h1>
    <h1>name is {this.state.name} and roll no. is {this.state.roll}</h1>
            <button type="click" onClick={this.handleClick}>click me</button>
            </div>
    }
}

export default Student;*/

//mounting an update

/*import Marks from "./comp";
import Comp from "./comp"

export default class Student extends Component{

    constructor(props){
        super(props);
        console.log("i m constructor");
        console.log(props);
        this.state={
            roll:"101"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerived");
        console.log(props,state);

        return null;
    }

    componentDidMount()
    {
        console.log("did mOunt");
    }

    render(){

        console.log("renderd");
    return <div>
                <h1>Hello {this.props.name}</h1>
                <Marks roll={this.state.roll}/>
           </div>
    }
}*/

//unmount 

/*export default class App extends Component {
    componentDidMount(){
        console.log("App did mount"); 
    }
    componentWillUnmount(){

        console.log("app will unmount");

    }    
    render() {
        return (
            <div>
                <h1>Hello App component</h1>
            </div>
        )
    }
}*/

//useState Hook

/*import React, { useState } from "react";

function App() {


    const [name,setName] = useState("rahul");
    const [roll,setRoll] = useState(101);
    //const name = varState[0];

    const handleCLick=()=>{
        setName("chinu");
        setRoll(105);

    }

    return (
        <div>
            <React.Fragment>
               <h1> {name}</h1>
               <h2>{roll}</h2>
               <button type ="click" onClick={handleCLick}>change</button>
            </React.Fragment>
        </div>
    );
}

export default App;*/

//useEffect hook

/*import React,{useState,useEffect} from 'react'

function App() {

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(50);
    const clickHandle=()=>{
        setCount(count+1);
    }

    const clickHandler=()=>{
        setCount1(count1-1);
    }

    useEffect(()=>{
        console.log("use effect");
    },[count]);

    return (
        <div>
            <h1>Count Up:{count}</h1>
            <button type = "click" onClick={clickHandle}>increment</button>

            <h1>Count Down:{count1}</h1>
            <button type = "click" onClick={clickHandler}>Decrement</button>
        </div>
    )
}
export default App;*/

//custom hook

/*import React from 'react'
import Comp from  './comp'

function App() {
    const data=Comp();
    return (
        <div>
            <h1>count up:{data.count}</h1>
            <button type="click" onClick={data.clickhandle}>increment</button>
        </div>
    );
}

export default App;*/


/*import React, { Component } from 'react'
import User from './comp'
import Guest from './guest'

export default class App extends Component {
    render() {
        const isRegistered =this.props.customer;
        if(isRegistered){
            return <User/>;  
        }
        return <Guest/>;
    }
}*/

/*import React, { Component } from 'react'
import Comp from './comp'

export default class App extends Component {
    render() {
        const isPrime=this.props.prime;
        return (
            <div>
                <h1>Welcom User</h1>
                {isPrime && <Comp/>}
            </div>
        )
    }
}*/

/*import React, { Component } from 'react'
import User from './comp'
import Guest from './guest'

export default class App extends Component {
    state={
        isLoggedIn:false
    }
    clickLogin=()=>{
        this.setState({isLoggedIn:true});
    }

    clickLogout=()=>{
        this.setState({isLoggedIn:false});
    }
    render() {
        const loggedIn=this.state.isLoggedIn;
        let consumer;
        if(loggedIn){
            consumer=<User clickhandle={this.clickLogout}/>;
        }
        else{
        consumer=<Guest clickhandle={this.clickLogin}/>;
        }

    return <div>{consumer}</div>;
    }
}*/

/*import React, { Component } from 'react'
import User from './comp'
import Guest from './guest'

export default class App extends Component {
    state={
        isLoggedIn:false
    }
    clickLogin=()=>{
        this.setState({isLoggedIn:true});
    }

    clickLogout=()=>{
        this.setState({isLoggedIn:false});
    }
    render() {
        const loggedIn=this.state.isLoggedIn;

    return <div>{loggedIn?<User clickhandle={this.clickLogout}/>:<Guest clickhandle={this.clickLogin}/>}</div>;
    }
}*/

/*import React, { Component } from 'react'
import User from './comp'
import Guest from './guest'

export default class App extends Component {
    state={
        isLoggedIn:false
    }
    clickLogin=()=>{
        this.setState({isLoggedIn:true});
    }

    clickLogout=()=>{
        this.setState({isLoggedIn:false});
    }
    render() {
        const loggedIn=this.state.isLoggedIn;

    return <div>

               {
                   (()=>{
                       if(loggedIn){
                           return <User clickhandle={this.clickLogout}/>;
                       }
                       else{
                           return <Guest clickhandle={this.clickLogin}/>;
                       }
                   })()
               }

           </div>;
    }
}*/


//List

/*import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr=[10,20,30,40,50];
        return (
            <ul>
                <li>{arr[0]*2}</li>
                <li>{arr[1]*2}</li>
                <li>{arr[2]*2}</li>
                <li>{arr[3]*2}</li>
                <li>{arr[4]*2}</li>
            </ul>
        )
    }
}*/

/*import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr=[10,20,30,40,50];
        const newArr =arr.map((num)=>{
        return <li>{num*2}</li>;
        })

        console.log(arr);
        console.log(newArr);
        return (
        <ul>{newArr}</ul>
        )
    }
}*/

/*import React, { Component } from 'react'

export default class App extends Component {
    render() {
        let arr=[10,20,30,40,50];
        return (
        <ul>{ 
            arr.map((num)=>{
            return <li>{num*2}</li>;
            })}
            </ul>
        )
    }
}*/

/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        user:[
            {id:101,name:"lucky",password:"3456uhfk"},
            {id:102,name:"chinu",password:"6789thuk"},
            {id:103,name:"swati",password:"4589klmn"}
        ]
    }
    render() {
        return (
            <div>
                <h1>{this.state.user[0].id}  {this.state.user[0].name}  {this.state.user[0].password}</h1>
                <h1>{this.state.user[1].id}  {this.state.user[1].name}  {this.state.user[1].password}</h1>
                <h1>{this.state.user[2].id}  {this.state.user[2].name}  {this.state.user[2].password}</h1>
            </div>
        )
    }
}*/


//key
/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        users:[
            {id:101,name:"lucky",password:"3456uhfk"},
            {id:102,name:"chinu",password:"6789thuk"},
            {id:103,name:"swati",password:"4589klmn"}
        ]
    }
    render() {
        const newArr=this.state.users.map((user)=>{
            console.log(user);
        return <h1 key={user.id}>ID:{user.id}  Nmae:{user.name}  password:{user.password}</h1>
        });

    return<div>{newArr}</div>;
    }
}*/

/*import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const col={
            color:'blue'
        }
        const fon={
            backgroundColor:'yellow'
        }
        return (
            <div>
                <h1 style={{...col, ...{backgroundColor:'yellow'}}}>Welcome to my app</h1>
            </div>
        )
    }
}*/

//styling component inline

/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        change:false
    }
    clickhandle=()=>{
        this.setState({change:true});
    }
    render() {
        const fon={
            backgroundColor:'yellow'
        }
        if(this.state.change){
            fon.backgroundColor="pink";
        }
        return (
            <div>
                <button style={fon} onClick={this.clickhandle}>Click</button>
            </div>
        )
    }
}*/

//styling component external sheet

/*import React, { Component } from 'react'
import User from './comp'
import './app.css'

export default class App extends Component {
    render() {
        return (
            <div>
                  <h1 className="txt1">Hello App</h1>
                  <User/>
                
            </div>
        )
    }
}*/

/*import React, { Component } from 'react'
import User from "./comp"
import "./app.css"

export default class App extends Component {
    render() {
            let style=false;
        return (
            <div>
                <h1 className="txt">Hello App</h1>
                <User rang={style?"txt":"txt1"}/>
            </div>
        )
    }
}*/
//style component css module
/*
import React, { Component } from 'react'
import User from './comp'
import Styles from "./app.module.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 className={Styles.txt}>hello App</h1>
                <User/>
            </div>
        )
    }
}*/
//use image public folder
/*
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL+"/contact us.jpg"} alt="not found"/>
            </div>
        )
    }
}*/

//use image in src folder

/*import React, { Component } from 'react'
import pic from './contact us.jpg'

export default class App extends Component {
    render() {
        return (
            <div>
                <img src={pic} alt="not found"/>
            </div>
        )
    }
}*/
//use bootstrap i reactJS 
/*import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dangers">click me</button>
            </div>
        )
    }
}*/


//controlled component in react
/*
import React, { Component } from 'react'

export default class App extends Component {
    state={
        value:""
    };

    handlechange=e=>{
        this.setState({value:e.target.value.toUpperCase().substr(0,5)});
        
    };
    render() {
        return (
            <div>
                <form>
                    <h1>controlled</h1>
                    <input type="text" value={this.state.value} onChange={this.handlechange}/>
                </form>
            </div>
        )
    }
}
*/

//control multiple input elements

/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        name:"lucky",
        password:"luck"
    }
    handle=e=>{
       // this.setState({[e.target.name]:e.target.value});
       const value=e.target.name==="password"? e.target.value.toUpperCase().substr(0,5):e.target.value;
       this.setState({[e.target.name]:value});
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:<input type="text" value={this.state.name} onChange={this.handle} name="name"/>
                    </label><br/><br/>
                    <label>
                        Password:<input type="text"  value={this.state.password} onChange={this.handle} name="password"/>
                    </label>
                </form>
            </div>
        )
    }
}*/

//form handling
/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        name:"lucky",
        password:"luck"
    }
    handle=e=>{
       this.setState({[e.target.name]:e.target.value});
    }
    handlesubmit=e=>{
        console.log(e.target[0].name);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>
                        Name:<input type="text" value={this.state.name} onChange={this.handle} name="name"/>
                    </label><br/><br/>
                    <label>
                        Password:<input type="text"  value={this.state.password} onChange={this.handle} name="password"/>
                    </label><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}*/

//ref in react
/*
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.textInput=React.createRef();
    }
    componentDidMount=()=>{
        this.textInput.current.focus();

    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:<input type="text" ref={this.textInput}/>
                    </label><br/><br/>
                    <label>
                        Password:<input type="text" />
                    </label><br/><br/>
                    <label>
                        Address:<input type="text"/>
                    </label>
                </form>
            </div>
        )
    }
}*/

/*
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        this.textInput=React.createRef();
    }
    handlesubmit=(e)=>{
        e.preventDefault();
       this.setState({value:this.textInput.current.value});
    }
    render() {
        return (
            <div>
                <h2>You Typed:{this.state.value}</h2>
                <form onSubmit={this.handlesubmit}>
                    <label>
                        Name:<input type="text" ref={this.textInput}/>
                    </label>
                    <input type="submit"/>
                   
                </form>
            </div>
        )
    }
}*/
//lifting state up
/*
import React, { Component } from 'react'
import Comp from './comp'

export default class App extends Component {
    state={
        name:"lucky"
    }
    render() {
        return (
            <div>
                <Comp name={this.state.name}/>
            </div>
        )
    }
}*/

//context API 

import React,{Component} from 'react'
import Comp from './comp'
export const myContext=React.createContext();
export default class App  extends Component{
    state={
        name : "Chinu",
        value: 10
    }
     render(){
         return (<myContext.Provider value={this.state}>
                      <Comp/>
                </myContext.Provider>);
     }
}























