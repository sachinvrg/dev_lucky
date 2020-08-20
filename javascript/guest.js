
//conditional rendering
/*import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>hello Guest</h1>
                <button>sign up</button>           
            </div>
        )
    }
}*/

import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return <React.Fragment>
            <h1>Welcome Guest</h1>
            <button onClick={this.props.clickhandle}>Login</button>
            <button>sign up</button>
        </React.Fragment>
    }
}



