import React , {useEffect , useCallback} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {increment , decrement , incrementByAmount} from '../../store/reducers/home'
import Table from '../../components/ui/Table'
import CreateButton from '../../components/ui/CreateButton'

const Home = () => {
  // const homeState = useSelector((state) => state.home.value)
  // const dispatch = useDispatch();

  // const increaseHanlder = useCallback(()=> {
  //   dispatch(incrementByAmount(7))
  // }, [dispatch])

  // useEffect(()=>{
    
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     // console.log('first time')
  //   })
  //   .catch(err => console.log(err))

  //   increaseHanlder()
    
  // }, [increaseHanlder])
    
  return (
    <div className=''>
        <Table/>
        <CreateButton/>
    </div>
  )
}

export default Home