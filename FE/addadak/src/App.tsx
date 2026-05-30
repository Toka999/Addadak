import RootHome from './pages/RootHome'
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage'
import RootBody from './components/RootHomeComp/RootBody'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import type { ReactElement } from 'react'

function App() {
  interface routings{
    path:string
    element:ReactElement
  } 

  const routings:any=[
    {path:'/user/register',element:<Register></Register> },
    {path:'/user/login',element:<Login></Login> }

  ]

  return (
    <>
      <Routes>
        <Route path='/' element={<RootHome/>}>
          <Route index element={<RootBody></RootBody>}/>
          {
            routings.map((ele:any,index:number)=>{
            return(
            <Route path={ele.path} key={index} element={ele.element}/>
          )
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
