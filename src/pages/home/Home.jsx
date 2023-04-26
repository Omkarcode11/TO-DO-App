import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Home.css'
import Todos from '../../components/todos/Todos'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [showCompleteTodo , setShowCompleteTodo] = useState(true)
  const {isAuthenticated} = useSelector((state)=>state.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated==false){
      navigate('/login')
    }
  },[isAuthenticated])

  return (
    <div className='home-layout'>
        <Header/>
        <Todos showCompleteTodo={showCompleteTodo}/>
        <Footer setShowCompleteTodo={setShowCompleteTodo}  />
    </div>
  )
}

export default Home