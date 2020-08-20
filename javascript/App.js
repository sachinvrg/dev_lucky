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

import React, { Component } from 'react'

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
}














