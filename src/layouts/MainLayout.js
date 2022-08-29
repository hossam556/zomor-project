import React from 'react'
import SideBar from '../components/layout/SideBar'

const MainLayout = ({children}) => {
  return (
    <div>
        <SideBar>
           {children}
        </SideBar>
    </div>
  )
}

export default MainLayout