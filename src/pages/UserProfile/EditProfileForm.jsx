import React,{useState} from 'react'
import "./UsersProfile.css"
import {useDispatch  } from "react-redux"
import { updateProfile } from '../../actions/users'


const EditProfileForm = ({currentUser, setSwitch}) => {
    
  const [name,setName] = useState(currentUser?.result?.name)  
  const [about,setabout] = useState(currentUser?.result?.about)  
  const [tags, setTags] = useState(' ')  
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(tags.length === 0){
      dispatch(updateProfile(currentUser?.result?._id,{name,about,tags: currentUser?.result?.tags}))
    }else{
      dispatch(updateProfile(currentUser?.result?._id,{name, about,tags}))
    }
    setSwitch(false)
  }
  


  return (
    <div>
      <h4 className='edit-profile-title'>
        Edit Your Profile
      </h4>
      <h5 className='edit-profile-title-2'>
        Public information
      </h5>
      <form className='edit-profile-form' onSubmit={handleSubmit}>
        <label htmlFor="name" id="element">
            <h5>Display name</h5>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="name" id="element">
            <h5> About me</h5>
            <textarea id="about" cols="60" rows="5" value={about} onChange={(e) => setabout(e.target.value)}/>
        </label>
        <label htmlFor="name" id="element">
            <h5>Watched tags</h5>
            <p>Add tags seperated by 1 space</p>
            <input type="text" id="tags" onChange={(e) => setTags(e.target.value.split(' '))}/>
        </label><br></br>
        <input type="submit" value="save profile" className='user-submit-btn' />
        <button type="button" className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
      </form>
      
    </div>
  )
}

export default EditProfileForm
