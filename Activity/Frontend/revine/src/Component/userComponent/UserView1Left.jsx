import React, { Component } from 'react';
class UserView1Left extends Component {
    state = { 
        src: "",
        handle: ""
     }
    render() { 
        let {src, handle} = this.state.src;
        return ( 
            <React.Fragment>
                <img src={src} alt="Profile-img"/>
                <p>{handle} </p>
            </React.Fragment>
         );
    }
}
 
export default UserView1Left;