import React ,{useState} from 'react'
import { useParams,Link } from "react-router-dom"
import {useLocation,useNavigate} from "react-router-dom"
import {useSelector,useDispatch } from "react-redux"
import moment from "moment"

import upvote from "../../assets/sort-up.svg"
import downvote from "../../assets/sort-down.svg"
import "./Questions.css"
import Avatar from "../../components/Avatar/avatar"
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'

import copy from "copy-to-clipboard"

const QuestionDetails = () => {
   const {id} = useParams()
   const questionList = useSelector(state => state.questionsReducer)
   
    // var questionList = [{
    //     _id: '1',
    //     upVotes : 3,
    //     downVotes : 2,
    //     noOfAnswers : 2,
    //     questionTitle : "what is a function",
    //     questionBody : "it meant to be",
    //     questionTags : ["java","node js","react js","mango db","HTML"],
    //     userPosted : "mano",
    //     userId : 1,
    //     askedOn :"jan 1",
    //     answer : [{
    //      answerBody : "Answer",
    //      userAnswered : "kumar",
    //      answeredOn : "jan 2",
    //      userId : 2,
         
    //     }]
    
    // },{
    //     _id: '2',
    //     upVotes : 3,
    //     downVotes : 2,
    //     noOfAnswers : 2,
    //     questionTitle : "what is a function",
    //     questionBody : "it meant to be",
    //     questionTags : ["java","node js","react js","mango db"],
    //     userPosted : "mano",
    //     userId : 1,
    //     askedOn :"jan 1",
    //     answer : [{
    //      answerBody : "Answer",
    //      userAnswered : "kumar",
    //      answeredOn : "jan 2",
    //      userId : 2,
    //     }]
        




    // },
    // {
    //     _id: '3',
    //     upVotes : 3,
    //     downVotes : 2,
    //     noOfAnswers : 2,
    //     questionTitle : "what is a function",
    //     questionBody : "it meant to be",
    //     questionTags : ["java","node js","react js","mango db"],
    //     userPosted : "mano",
    //     userId : 1,
    //     askedOn :"jan 1",
    //     answer : [{
    //      answerBody : "Answer",
    //      userAnswered : "kumar",
    //      answeredOn : "jan 2",
    //      userId : 2,
    //     }]
//     }

// ]
  const [Answer, setAnswer] = useState("")
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const location = useLocation()
  const url = "http://localhost:5000/"

  const handlePostAns = (e, answerLength) => {
         e.preventDefault()
         if(User===null){
            alert("Login or Signup to answer the question")
            Navigate("/Auth")
         }else{
            if(Answer === "" ){
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
            }
         }

  }
  const handleShare = ()=>{
    copy(url+location.pathname)
    alert("copied url : "+url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id,Navigate))
  }
  const hanndleUpVote = () => {
    dispatch(voteQuestion(id,"upVote",User.result._id))
  }
  const hanndleDownVote = () => {
    dispatch(voteQuestion(id,"downVote",User.result._id))
  }
  return (
    <div className='question-details-page' id="question-details-page">
       {
        questionList.data === null ?
        <h1>Loading .....</h1>:
        <>
           {
             questionList.data.filter( question => question._id === id ).map(question => (
                <div key={question._id}>
                    {console.log(question)}
                    <section className='question-details-container'>
                         <h3>{question.questionTitle} ?</h3>
                         <div className='question-details-container-2'>
                            <div className="question-votes">
                                <img src={upvote} alt="upvote" width="18" className='votes-icon' onClick={hanndleUpVote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                                <img src={downvote} alt="downvote" width= "18" className='votes-icon'onClick={hanndleDownVote}/>
                            </div>
                            <div style={{width: "100%"}} >
                                <p className='questionBody'>{question.questionBody}</p>
                                <div className='question-details-tags'>
                                    {
                                        question.questionTags.map((tag)=> (
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }

                                </div>
                                <div className='question-action-user'>
                                    <div>
                                        <button type="button" onClick={handleShare}>Share</button>
                                        {
                                            User?.result?._id === question?.userId && (
                                                <button type="button" onClick={handleDelete}>Delete</button>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                            <Avatar backgroundColor="Orange" px="8px" py="5py">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>

                                    </div>

                                </div>
                            </div> 
                         </div>
                    </section>
                    {
                        question.noOfAnswers !==0 && (
                            <section>
                                <h5>{question.noOfAnswers} answers</h5>
                                <DisplayAnswer key={question._id} question = {question} handleShare={handleShare}/>
                            </section>
                        )
                    }
                    <section className='post-ans-container'>
                          <h4>Your Answer</h4>
                          <form onSubmit={ (e) => { handlePostAns(e, question.answer.length)}}>
                            <textarea name="" cols="30" rows="7" onChange={ (e) => setAnswer(e.target.value)}></textarea><br/>
                            <input type="Submit" className='post-ans-btn' value="Post your answer" />
                          </form>
                          <p>
                            Browser other Question tagged
                              {
                                question.questionTags.map((tag) => (
                                <Link to="/Tags" key="{tag}" className='ans-tags'> { tag } </Link>
                                ))
                              } or 
                                <Link to="/AskQuestion" style={{textDecoration : "none", color : "#009dff"}}> ask your question.</Link>
                              
                          </p>
                    </section>
                </div>
             ))
           }
        </>
       }

    </div>
  )
}

export default QuestionDetails
