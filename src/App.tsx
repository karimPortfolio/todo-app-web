import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ResetPassword from "./pages/ResetPassword"


function App() {

  return (
    <>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/reset-password" Component={ResetPassword} />
        </Routes>
    </>
  )
}

export default App
