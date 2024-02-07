import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    useEffect( () => {
        navigate('/reset-password', {replace:true});
    },[])

  return (
    <div>

    </div>
  )
}

export default Home