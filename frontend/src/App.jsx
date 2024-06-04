import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom"

import { AuthContext } from "./authentications/authContext"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

function App() {
  return <div>

    <BrowserRouter>

      <Routes>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<AuthContext><Signin></Signin></AuthContext>}/>
        <Route
        path="/dashboard"
        element={<Dashboard/>}/>
        <Route
        path="*" element={<Navigate to={"/dashboard"}/>}/>
        <Route path="/sendmoney" element={<SendMoney></SendMoney>}/>
      </Routes>
    </BrowserRouter>
</div>
    
  
}

export default App
