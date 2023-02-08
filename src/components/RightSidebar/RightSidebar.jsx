import React from 'react'
import "./RightSidebar.css"
import Widget from './Widget'
// import WidgetTags from './WidgetTags'
import ChatBot from "./ChatBot.jsx"

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>

        <ChatBot/>
      
    </aside>
  )
}

export default RightSidebar
