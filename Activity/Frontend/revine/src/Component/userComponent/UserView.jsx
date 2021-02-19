import axios from 'axios';
import React, { Component } from 'react';
import Profile from './Profile';
import ProfileList from './ProfileList';

class UserView extends Component {

    state = {
        currentMenu: "Suggestion",
        listForProfileList: []
    }

    // suggestion
    componentDidMount(){
        // api => suggestions
    }   

    updateCurrentMenu = (cMenu) => {
        console.log(cMenu);
        this.setState({ currentMenu: cMenu });
        
        // Followers
        let isFollowers = cMenu == "Followers";

        if(isFollowers){
            axios.get("/api/v1/user/request/ce5dbe3c-036f-4743-aa84-637ef032508c")
                .then((res) => {
                    let allFollowers = res.data.message;
                    let myFollowers = allFollowers.filter(follower => follower.is_accepted === 1);
                    let followersDetailsPArray = myFollowers.map((follower) => {
                        return axios.get(`/api/v1/user/${follower.follower_id}`);
                    });
                    return Promise.all(followersDetailsPArray);
                }).then((fDRArray) => {
                    let listForProfileList = [];
                    fDRArray.map((follower) => {
                        const { name, handle, uid } = follower.data.user;
                        listForProfileList.push({ name, handle, uid });
                    });
                    // console.log(listForProfileList);
                    this.setState({
                    listForProfileList,
                    currentMenu: cMenu
                });

                })
        }
    }

    render() { 
        let {listForProfileList} = this.state;
        return ( 
            <React.Fragment>
            <div className="user-view">
                <Profile updateCurrentMenu={this.updateCurrentMenu}></Profile>
                <ProfileList list={listForProfileList}></ProfileList>
            </div>
            </React.Fragment>
         );
    }
}
 
export default UserView;