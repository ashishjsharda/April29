import React, { Component } from 'react';
class Welcome extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <h1> Hello World</h1>
            <h1>{this.props.name}</h1>
            </div>
          );
    }
}
 
export default Welcome;
