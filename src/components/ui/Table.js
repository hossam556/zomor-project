import * as React from 'react';
import {useEffect , useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 90,
  },
  // { field: 'action', headerName: 'Actions', width: 130 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  
  const [users , setUsers] = useState(null);
  const [number , setNum] = useState(1);

  useEffect(()=>{
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
       console.log(res.data)
      setUsers(res.data)
    })
    .catch(err => console.log(err))
    
  }, [])

  useEffect(()=>{
    if(number === 1) return
    
    axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)
    .then(res => {
       console.log(res.data)
       let newUser = [res.data]
      setUsers(newUser)
    })
    .catch(err => console.log(err))
    
  }, [number])

  const userHandler = () => {
    setNum(prev => prev + 1)
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users || [{id:'1'}]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        filterMode='server'
        onCellClick={val => console.log(val.row)}
        onPageChange={userHandler}
      />
    </div>
  );
}
