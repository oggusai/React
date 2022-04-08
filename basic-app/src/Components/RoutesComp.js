import React from 'react'
import {Router,Routes,Route} from 'react-router-dom';
import ClassComponent from '../ClassComponent';
import Home from '../Home';
import Albums from './Albums';
// import ListsAndKeys from './ListsAndKeys';
import Contactus  from './ContactUs';
import Entertainment from './Entertainment';
import Pagination from './Pagination';
import TodoAppUseEffect from './TodoAppUseEffect';
import User from './User';
import UseStateHook from './UseStateHook';

const RoutesComp = () => {
  return (
    <div>
        <Routes>
        <Route  path='/home' element={<Home />}  exact/>
        <Route  path='/classComp' element={<ClassComponent />}/>
        {/* <Route  path='listkeys' element={<ListsAndKeys />}/> */}
         <Route path='/contactus' element={<Contactus />} />
         <Route  path='/user' element={<User/>}/>
         <Route path='/Albums' element={<Albums/>}/>
           <Route path='/pagination' element={<Pagination/>}/>
           <Route path='/Entertainment' element={<Entertainment/>}/>
           <Route path='/UseStateHook' element={<UseStateHook/>} />
            <Route path='/TodoAppUseEffect' element={<TodoAppUseEffect/>}/>

      

        </Routes>





    </div>
  )
}

export default RoutesComp