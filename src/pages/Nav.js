import React , {useEffect} from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  // useEffect(()=>{
  //   console.log('entered Nav useEffect')
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))

  // }, [])

  return (
    <div className=''>
        <div className='p-4 text-lg text-red-500 '>nav section</div>
        <Link to="/" className='p-3 bg-purple-500 rounded-lg '>go to home</Link>
    </div>
  )
}

export default Nav