import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = { 
        src: "",
        name: "....",
        handle: "....",
        noOfPosts: "",
        followersCount: "",
        followingCount: ""
     }

     componentDidMount(){
        //  Get User
         axios.get("/api/v1/user/ce5dbe3c-036f-4743-aa84-637ef032508c")
         .then((res) => {
            console.log(res.data);
            const { name,handle } = res.data.user;
            this.setState({
                name: name,
                handle: handle
                })
            })
            .then(() =>
            // Get Followers of user from user_follower Table  
            axios.get("/api/v1/user/request/count/ce5dbe3c-036f-4743-aa84-637ef032508c"
            )).then((res) => {
                console.log(res.data);
                let count = res.data.message[0].followersCount;
                // console.log(followers);
                this.setState({followersCount: count})
            }) 
            
         .catch(function(err){
             console.log(err);
         })
     }

    render() { 
        let {src, name,handle,noOfPosts,followersCount,followingCount} = this.state;
        let {updateCurrentMenu} = this.props;
        return ( 
            <React.Fragment>
            <div className="profile-parent">
            <div className="profile">
                <div className="profile-details">
                    <img src={src} alt="Profile-img"/>
                    <p>{name} </p>
                    <p>{handle}</p>
                </div>
                <div className="profile-stats">
                    <div className="stat">
                        <div className="Post">{noOfPosts}</div>
                        <div>Post</div>
                    </div>
                    <div className="stat">
                        <div className="Followers">{followersCount}</div>
                        <div>Followers</div>
                    </div>
                    <div className="stat">
                        <div className="Following">{followingCount}</div>
                        <div>Following</div>
                    </div>
                </div>
                </div>
                <div className="menu">
                    <div className="menu-list">
                        <div onClick={ () => updateCurrentMenu("Suggestion") }>Suggestion</div>

                        <div onClick={ () => updateCurrentMenu("Request") }>Request</div>
                        
                        <div onClick={ () => updateCurrentMenu("Followers") }>Followers</div>
                        
                        <div onClick={ () => updateCurrentMenu("Following") }>Following</div>
                    </div>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Profile;