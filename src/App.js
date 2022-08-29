import './App.css';
import './assets/styles/global.css'
import React from 'react'
import Home from './pages/home/index'
import HomeId from './pages/home/id/index'
import Nav from './pages/Nav'
import {Routes ,Route} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import Test from './pages/Test'

export const HeaderContext = React.createContext();

function App() {

  return (
    <div className="App">
      <HeaderContext.Provider value='hossam'>
        <MainLayout>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="/:id" element={<HomeId/>}/>
            </Route>
            <Route path="/nav" element={<Nav />}/>
          </Routes>
        </MainLayout>
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
