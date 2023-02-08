import React from 'react'
import "./RightSidebar.css"
import comment from "../../assets/comment-alt-solid.svg"
import pen from "../../assets/pen-solid.svg"
import blacklogo from "../../assets/blacklogo.svg"


const WidgetTags = () => {
  return (
    <div class = "widget" id="widget">
        <h4>The overflow Blog</h4>
        <div className='right-sidebar-div-1'>
         <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width="18" />
            <p>From CS side project to the C-suite (Ep. 525)</p>
          </div>
          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width="18" />
            <p>Taming multiple design systems with a single plugin (Ep. 526)</p>
          </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
         <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width="18" />
            <p>The shipping tag is being burninated see allCollectives</p>
          </div>
          <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width="18" />
            <p>Temporary policy: ChatGPT is banned</p>
          </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
         <div className='right-sidebar-div-2'>
            <p>38</p>
            <p>2022 Community-a-thon Recap</p>
          </div>
          <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>Taming multiple design systems with a single plugin (Ep. 526)</p>
          </div>
        </div>
        
    </div>
  )
}

export default WidgetTags
