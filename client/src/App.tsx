import React from 'react'
import { useNavigate } from 'react-router'

export default function App() {
  const navigate = useNavigate();
  return (
    <>
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <h1>This is the website for the project <b>lytics.ai</b></h1> <br />
      <p>Gives ai insights for a webpage, using ml models to predict the data as well.</p>
      <button className='border-2 p-2 mt-4 cursor-pointer rounded-md text-white bg-black'
      onClick={()=>{
        navigate("/signin")
      }}
      >Use the page</button>
    </div>
    </>
  )
}
