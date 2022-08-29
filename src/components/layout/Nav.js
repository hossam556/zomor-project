// import React , {useEffect , useCallback} from 'react'
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
// import {increment , decrement , incrementByAmount} from '../../store/reducers/home'

// const Home = () => {
//   const homeState = useSelector((state) => state.home.value)
//   const dispatch = useDispatch();

//   const increaseHanlder = useCallback(()=> {
//     dispatch(incrementByAmount(7))
//   }, [dispatch])

//   useEffect(()=>{
    
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//       // console.log('first time')
//     })
//     .catch(err => console.log(err))

//     increaseHanlder()
    
//   }, [increaseHanlder])
    
//   return (
//     <div className=''>
//         <div className='p-4 text-lg text-red-500 '>header section</div>
//         <Link to="/nav" className='p-3 bg-green-500 rounded-lg '>go to nav</Link>
//         <Link to="/2" className='p-3 bg-green-500 rounded-lg '>go to id</Link>
//     </div>
//   )
// }

// export default Home