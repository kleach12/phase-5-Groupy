import { Navigate } from 'react-router-dom';
import './DeleteAccount.css'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
export default function DeleteAccount({deleteUser,setDeleteUser,signedIn, setSignedIn}){

  function handleDeleteUser() {
    fetch(`/delete_user`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
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