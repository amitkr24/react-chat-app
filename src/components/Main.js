import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import data from '../data';

function Main() {
  // set state
  const [userId, setuserId] = useState(1);
  const [chats, setchats] = useState([]);
  const [message, setMessage] = useState('');
  const [signOut, setsignOut] = useState(false); // show logout popup
  
  const users = data;
  const filteredArray = users.filter(function(itm){
    return (itm.uid == userId);
  });

  // uses use effect 
  useEffect(() => {
    setchats(filteredArray);
  }, [userId]);

  // handle chats
  const handleChat = ()=>{
    setchats(filteredArray);
  };

  // click on send message button 
  const handleClick = ()=>{
    let currentChats = filteredArray[0].chats;
    currentChats.push({sender: '', receiver: message})
    filteredArray[0].chats = currentChats;
    setchats(filteredArray);
    setMessage("");
  }
 
  const handleKeyPress = e => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
        <div className="container-fluid h-100 chat-box-container">
            <div className="row justify-content-center h-100">
                <Sidebar setuserId={setuserId} userId={userId} handleChat={handleChat}/>
                <Chat chats={chats} setMessage={setMessage} handleClick={handleClick} handleKeyPress={handleKeyPress} message={message}
                setsignOut={setsignOut} signOut={signOut}/>
            </div>
        </div>
    </div>
  )
}

export default Main