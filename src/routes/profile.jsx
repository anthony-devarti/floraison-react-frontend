import React from "react"
import { useGlobalState } from "../components/GlobalState";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router";

const Profile = () => {
    let navigate = useNavigate()
  const [ state, dispatch ] = useGlobalState();

  const id = state.user_id

  function stateChecker() {
      console.log("current user: ", state.currentUser)
  }

  function logoutHandler() {
    localStorage.removeItem("user");
    //navigate to home
    navigate("/home")
  }

  return (
    <div>
      <h1>Hey there, {state.currentUser.username}</h1>
      <h2>Welcome back!  What are we looking to do today?</h2>
      <Button onClick={() => stateChecker()}>View State</Button>
      <Button className="custom-buttons" onClick={logoutHandler}>Log Out</Button>
    </div>
  )
}

export default Profile