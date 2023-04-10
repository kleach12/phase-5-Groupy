import { Navigate } from 'react-router-dom';
import './DeleteAccount.css'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
export default function DeleteAccount({deleteUser,setDeleteUser}){

  if (deleteUser === false){
    return <Navigate to = "/Dashboard"/>
  }

  return(
    <div  id = 'delete_account'> <BsFillArrowLeftSquareFill id ="back_btn"  onClick={() => setDeleteUser(false)}/> </div>
  )
}