import React, { useEffect } from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { Link, useNavigate } from 'react-router-dom'
import './FirstPage.css'

function FirstPage() {
  const navigate = useNavigate()

  useEffect(()=>{
    let user = localStorage.getItem('todoUser')
   if(!user || user!=''){
       localStorage.setItem('todoUser',[]) 
   }
  },[])


  return (
    <div className='firstPage-layout'>
    <ContentWrapper>
      <div className='logo-tagLine'>
      <span className='firsHeading'><span style={{color
      :'black'}}>
        todo
        </span> gives you focus, from work to play</span>
      </div>


      <img src='./CasualLife.png' className='girlPng' alt='girl-png'/>

      <div className="register">
        <button className='registerButton' onClick={()=>navigate('./register')}>register</button>
        <div>already have an account? <Link to={'./login'}>login</Link></div>
      </div>


    
    </ContentWrapper>
      <img src='./limeGreenCircle.png' alt='halfCircle' className='halfCircle'/>
    </div>
  )
}

export default FirstPage