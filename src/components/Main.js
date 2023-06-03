import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import data from './data';

function Main() {
  const [userId, setuserId] = useState(1);
  const [chats, setchats] = useState([]);
  const users = data;
  const filteredArray = users.filter(function(itm){
    return (itm.uid == userId);
  });

  const handleChat = ()=>{
    console.log(userId,"userId");
    setchats(filteredArray);
  };
  useEffect(() => {
    setchats(filteredArray);
  }, []);
  return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <Sidebar setuserId={setuserId} userId={userId} handleChat={handleChat}/>
                <Chat chats={chats}/>
            </div>
        </div>
    </div>
  )
}

export default Main