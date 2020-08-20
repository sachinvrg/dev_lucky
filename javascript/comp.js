//import React, { Component } from "react";
//import ReactDOM from "react-dom";

/*class Comp extends Component{
   render(){
    return(

        <div>
           <h1>Hello {this.props.name}</h1>
        </div>    );
}
}
export default Comp;*/

//updating
/*export default class Marks extends Component {
    constructor(props){
        super(props);
        this.state={
            mroll: this.props.roll
        }
    }
    clickhandler=()=>{
        console.log("button clicked");
        this.setState({mroll:102})
    }
    render() {
        console.log("marks renderd");
        return (
            <div>
                <h1>roll no:{this.state.mroll}</h1>
                <button onClick={this.clickhandler}>change</button>
            </div>
        );
    }
}*/


//unmount


/*export default class comp extends Component {
    componentDidMount(){
        console.log("comp did mount");
    }
    render() {
        return (
            <div>
                <h1>Hello Comp component</h1>
            </div>
        )
    }
}*/

//custom hook

/*import {useState} from 'react'

function Comp() {
    const [count,setCount] = useState(0);
    const clickhandle=()=>{
        setCount(count+1);
    }
    return (
        
            count,
            clickhandle
        
    );
}

export default Comp;*/

//conditional rendering

/*import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Hello Lucky</h1>
                <button>logout</button>
            </div>
        )
    }
}*/

/*import React, { Component } from 'react'

export default class Comp extends Component {
    render() {
        return (
            <div>
                <h2>Prime member</h2>
            </div>
        )
    }
}*/

import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcom Lucky</h1>
                <button onClick={this.props.clickhandle}>logout</button>
            </React.Fragment>
        )
    }
}



