import React from 'react';

const ProfileList = (props) => {
    const { list } = props;
    return ( 
        <React.Fragment>
            <div className="list">
                {list.map((follower) => {
                    return(
                        <div className="card" key={follower.uid}>
                            <div className="name">{follower.name}</div>
                            <div className="handle">{follower.handle}</div>
                            <div className="handle">{follower.uid}</div>
                        </div>
                    )
                })}
            </div>
            
        </React.Fragment>
     );
}

export default ProfileList;