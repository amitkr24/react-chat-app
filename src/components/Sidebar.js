import React, {useState} from 'react'
import data from '../data'
function Sidebar({setuserId,userId,handleChat}) {
    // use state
   const [search, setSearch] = useState('');

   // filter users 
   let filteredPeople = data.filter(p => {
        return p.displayName.toLowerCase().startsWith(search.toLowerCase());
    });
    let users = data;

    // if search box have value filter result
    if(search.length > 0){
        users = filteredPeople;
    }
    //on click handle user id
    const handleClick = (id) => {
        setuserId(id);
        handleChat();
    }

   // show user list in sidebar
    const userList = users.map((user, index) => (
        <li className={user.uid == userId ? "active" : ""} key={user.uid} onClick={(e) => handleClick(user.uid)} style={{cursor:'pointer'}} >
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img src={user.photoURL} className="rounded-circle user_img" />
                    <span className={user.isOnline ? "online_icon" : "online_icon offline"}></span>
                </div>
                <div className="user_info">
                    <span>{user.displayName}</span>
                    <p>{user.status}</p>
                </div>
            </div>
        </li>
    ));
    return (
        <div className="col-md-4 col-xl-3 chat">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search" onChange={(e) => setSearch(e.target.value)}/>
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="card-body contacts_body">
                    <ul className="contacts">
                        {userList}
                    </ul>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
}

export default Sidebar