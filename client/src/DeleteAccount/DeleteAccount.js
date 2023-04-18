import { Navigate } from 'react-router-dom';
import './DeleteAccount.css'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useContext } from 'react';
import { AllContext } from '../AllContext';
export default function DeleteAccount(){
const {deleteUser, setDeleteUser, signedIn, setSignedIn, setTheme, setUserGroups} = useContext(AllContext)
  function handleDeleteUser() {
    fetch(`/api/delete_user`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setUserGroups([])
      setTheme('light')
      setSignedIn(false);
      setDeleteUser(false)
    });
  }
  if (deleteUser === false){
    return <Navigate to = "/Dashboard"/>
  }

  if (signedIn === false){
    return <Navigate to = "/"/>
  }

  return(
    <div  id = 'delete_account'> 
    <BsFillArrowLeftSquareFill id ="back_btn"  onClick={() => setDeleteUser(false)}/>
    <div className='center'>
    <h2 id = "delete_text"> Sorry to see you leave </h2>
    <button className='delete_account_btn' onClick={() => handleDeleteUser()}> Delete Account </button>
    </div>
     </div>
  )
}