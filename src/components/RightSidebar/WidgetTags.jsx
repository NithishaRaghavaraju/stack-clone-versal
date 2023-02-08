import React from 'react'
import "./RightSidebar.css"

const WidgetTags = () => {
  
  const tags = ["c","css","express","mysql","mongodb","node js","Python","React","Dom","firebase","reactjs","java","html"]
  return (
    <div class="widget-tags">
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                   <p key = {tag}>{tag}</p>
                ))
            }
        </div>
      
    </div>
  )
}

export default WidgetTags
