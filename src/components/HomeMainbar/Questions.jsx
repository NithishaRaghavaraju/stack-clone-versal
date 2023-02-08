import React from 'react'
import {Link,useLocation} from "react-router-dom"
import moment from "moment"

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='very-sm-ques' style={{display : "flex"}}>
        <div className='display-votes-ans'>
            <p style={{paddingRight : "5px"}}>{question.upVote.length - question.downVote.length}</p> 
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p style={{paddingRight : "5px"}}>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        </div>
        <div className='display-votes-details'>
            <Link to={`/Questions/${question._id}`} className="question-title-link">{question.questionTitle}</Link>
            <div className='display-tags-time'>
               <div className='display-tags'> 
                {
                    question.questionTags.map((tag)=> (
                        <p key={tag}>{tag}</p>

                    ))
                }
                </div>
                <p className='display-time'>
                    asked {moment(question.askedOn).fromNow()} {question.userPosted}

                </p>

            </div>
        </div>


      
    </div>
  )
}

export default Questions
