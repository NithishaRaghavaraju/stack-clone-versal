import React from 'react'
import {Slide , handleUserInput} from "./ChatBot.js"
import { useState } from 'react';
import robot from "../../assets/robot-solid.svg"
import "./ChatBot.css"





const Answers = () => {
    
    const [Ans,setAns] = useState("")

    const prog_ans = (event) => {
      event.preventDefault();
      console.log(Ans)
      handleUserInput(Ans);
      setAns("");
    }
    
    return (
        
        <div className='container'>
          <script src="https://smtpjs.com/v3/smtp.js"></script>
          <div className="chat-box" style={{display:"none"}}>
              <div className="client">
                <div className="client-info">
                  <h4>Stack over flow</h4>
                  <p>online</p>
                </div>
                  
              </div>
              <div className="chats">
                      <div class="client-chat"><p>Hiii ! How can i help you</p></div>
                  <div style={{display: "none"}}>
                  </div>
              </div>
                 <div className="chat-input">
                   <input className='input-chat' type="text" value={Ans} placeholder="Enter the question" onChange={(event) =>setAns(event.target.value)} />
                    {/* <Link to="/OTP">Submit</Link> */}
                    <button className='send-btn' onClick={prog_ans}>Submit</button>
             
              </div>

          </div>
          <div className="chat-btn" onClick={Slide}>
                <img src={robot} alt="chat-bot" />
          </div>
     
        </div>
        
      )
    }   
export default Answers
