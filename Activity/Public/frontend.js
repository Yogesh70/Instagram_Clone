const button = document.querySelector(".search");
const input = document.querySelector('input');
const profile = document.querySelector('.profile');
const follower = document.querySelector('.follower');
const request = document.querySelector('.request');

button.addEventListener('click', function(e){
    e.preventDefault();
    populateUI(input.value);
    input.value = '';
})

async function populateUI(id){
    let user = await axios.get(`/api/v1/user/${id}`);
    let allFollowers = await axios.get(`/api/v1/user/request/${id}`);
    
    let userDataObj = user.data.user;
    let allFollowersArr = allFollowers.data.message;

    let allFollower = allFollowersArr.filter(function(entry){
        return entry.is_accepted == 1;
    })

    let request = allFollowersArr.filter(function(entry){
        return entry.is_accepted == 0;
    })

    addToProfile(userDataObj);
    addToFollowers(allFollower);
    addToRequest(request);
}

function addToProfile(userObj){
    let details = document.createElement('div');
    details.innerText = JSON.stringify(userObj);
    profile.appendChild(details);
}

function addToFollowers(followerArr){
    let ul = document.createElement('ul');
    for(let i=0; i < followerArr.length; i++){
        let li = document.createElement('li');
        li.textContent = followerArr[i].follower_id;
        ul.appendChild(li);
    }
    follower.appendChild(ul);
}

function addToRequest(requestArr){
    let ul = document.createElement('ul');
    for(let i=0; i < requestArr.length; i++){
        let li = document.createElement('li');
        li.textContent = requestArr[i].follower_id;
        ul.appendChild(li);
    }
    request.appendChild(ul);
}
