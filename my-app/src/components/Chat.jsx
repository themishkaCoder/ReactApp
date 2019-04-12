import React from 'react'
import "./css/Chat.scss"

const Chat = ()=>{
    return (
        <div className="content">
            <div className="chat">
                <div className="chat-container">
                    <ul className="chat-area">
                        <li>Hello</li>
                        <li>Hi</li>
                        <li>How are you?</li>
                    </ul>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message"></textarea>
                <button>Send</button>
            </div>
        </div>
        
    )
}

export default Chat