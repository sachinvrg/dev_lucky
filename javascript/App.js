import React, { Component } from "react";
import Pt, { string } from "prop-types"



//class component
/*class App extends Component{
    render(){

        return(
        
        <React.Fragment>
            <h1>LuckyWorld</h1>
            <h2>chinuChinu</h2>
        </React.Fragment>);
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

const Student = props => {
    return <h1>hello {props.children}</h1>;
    }
    export default Student;





