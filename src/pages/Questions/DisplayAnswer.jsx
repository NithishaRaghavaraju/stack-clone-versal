import React from 'react'
import { useParams,Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import QuestionDetails from './QuestionDetails'
import Avatar from '../../components/Avatar/avatar'
import { deleteAnswer } from "../../actions/question"
import moment from 'moment'

const DisplayAnswer = ({question,handleShare}) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers -1))
  }
  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className='display-ans' key={ans._id}>
                <p>{ans.answerBody}</p>
                <div className="question-action-user">
                    <div>
                        <button type="button" onClick={handleShare}>Share</button>
                        {
                            User?.result?._id === ans?.userId && (
                                <button type="button" onClick={() => handleDelete(ans._id,question.noOfAnswers)}>Delete</button>
                            )
                        }
                    </div>
                    <div>
                        <p>answered {moment(ans.answerOn).fromNow()}</p>
                        <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="green" px="8px" py="5py">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                         {ans.userAnswered}
                                    </div>
                        </Link>
                    </div>
                </div>
            </div>
         
        
            ))
      }
    </div>
  )
}

export default DisplayAnswer
