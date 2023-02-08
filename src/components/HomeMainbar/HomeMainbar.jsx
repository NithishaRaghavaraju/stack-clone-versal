import React from 'react'
import {useLocation,useNavigate} from "react-router-dom"
import {useSelector } from "react-redux"
import "./HomeMainbar.css"
import QuestionList from './QuestionList'

const HomeMainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()
    const questionList = useSelector(state => state.questionsReducer)


//     var questionList = [{
//         _id: 1,
//         upVotes : 3,
//         downVotes : 2,
//         noOfAnswers : 2,
//         questionTitle : "what is a function",
//         questionBody : "it meant to be",
//         questionTags : ["java","node js","react js","mongo db","HTML"],
//         userPosted : "mano",
//         userId : 1,
//         askedOn :"jan 1",
//         answer : [{
//          answerBody : "Answer",
//          userAnswered : "kumar",
//          answeredOn : "jan 2",
//          userId : 2,
         
//         }]
    
//     },{
//         _id: 2,
//         upVotes : 3,
//         downVotes : 2,
//         noOfAnswers : 2,
//         questionTitle : "what is a function",
//         questionBody : "it meant to be",
//         questionTags : ["java","node js","react js","mango db"],
//         userPosted : "mano",
//         userId : 1,
//         askedOn :"jan 1",
//         answer : [{
//          answerBody : "Answer",
//          userAnswered : "kumar",
//          answeredOn : "jan 2",
//          userId : 2,
//         }]
        




//     },
//     {
//         _id: 3,
//         upVotes : 3,
//         downVotes : 2,
//         noOfAnswers : 2,
//         questionTitle : "what is a function",
//         questionBody : "it meant to be",
//         questionTags : ["java","node js","react js","mango db"],
//         userPosted : "mano",
//         userId : 1,
//         askedOn :"jan 1",
//         answer : [{
//          answerBody : "Answer",
//          userAnswered : "kumar",
//          answeredOn : "jan 2",
//          userId : 2,
//         }]
//     }





// ]
  


  const checkauth = () =>{
    if(user===null){
        alert("login or signup to ask a question")
        navigate("/Auth")

    }else{
        navigate("/AskQuestion")
    }
  }
 
  return (
    <div className="main-bar" id="main-bar">
        <div className='main-bar-header'>
             {
                location.pathname === "/" ? <h1> Top Question</h1> : <h1>All Question</h1>


             }
             <button onClick={checkauth} className='ask-btn'>Ask Question</button>

        </div>
        <div>
            {
                questionList.data === null ?
                <h1>Loading ...</h1>:
                <>
                   <p>{questionList.data.length} questions</p>
                   <QuestionList questionList={questionList.data} />
                   
                </>

            }
        </div>
      
      
    </div>
  )
}

export default HomeMainbar
