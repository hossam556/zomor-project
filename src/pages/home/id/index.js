import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import {HeaderContext} from '../../../App'

const HomeId = () => {
  const text = useContext(HeaderContext);

  return (
    <div className=''>
        <div className='p-4 text-lg text-red-500 '>header inner section {text}</div>
        <Link to="/nav" className='p-3 bg-green-500 rounded-lg '>go to nav</Link>
    </div>
  )
}

export default HomeId