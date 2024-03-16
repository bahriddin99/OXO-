import { Routes,Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { mainrouter } from "./router"
import { nanoid } from "@reduxjs/toolkit"



function App() {
  

  return (
   <div>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
   {mainrouter.map((item)=>(
    <Route index = {item.path ? false:true} key={nanoid()}  element = {item.componet} path={item.path} />
   ))}
      </Route>
    </Routes>
   </div>
  )
}

export default App
