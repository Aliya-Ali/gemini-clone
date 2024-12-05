import React, { useContext, useState } from 'react'
import './Sidebar.css'
import menu_icon from '../../assets/assets/menu_icon.png'
import message_icon from '../../assets/assets/message_icon.png'
import question_icon from '../../assets/assets/question_icon.png'
import history_icon from '../../assets/assets/history_icon.png'
import setting_icon from '../../assets/assets/setting_icon.png'
import plus_icon from '../../assets/assets/plus_icon.png'
import { Context } from '../../context/Context'




const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div>
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={menu_icon} alt="" />
                <div onClick={()=> newChat()} className="new-chat">
                    <img src={plus_icon} alt="" />
                    {extended?<p>New Chat</p>: null}
                </div>
                {extended 
                    ?<div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return(
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                <img src={message_icon} alt="" />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        );
                    })}
                    
                </div>
                : null
                }
            
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={question_icon} alt="" />
                    {extended ? <p>help</p>: null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={history_icon} alt="" />
                    {extended ? <p>Activity</p>: null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={setting_icon} alt="" />
                    {extended ? <p>Settings</p>: null}
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
