import React, { useContext } from 'react'
import {  Contextprovider,useStoredContext } from './contextapi/contextapi'

const user = () => {
  const {token} = useStoredContext();
  console.log("token after sucessfull login"+token);
  return (
    <div>
      
    </div>
  )
}

export default user