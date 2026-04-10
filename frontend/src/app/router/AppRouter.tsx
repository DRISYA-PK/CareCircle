import { createBrowserRouter } from "react-router-dom"
import HomePage from "../../features/home/pages/HomePage"
import SignIn from "../../features/auth/pages/user/UserSignIn"
import UserSignUp from "../../features/auth/pages/user/UserSignUp"

export const router=createBrowserRouter([
  {
    path:"/",element:<HomePage/>,
    
  },
    {
    path:"userlogin",element:<SignIn/>,
    
  },
   {
    path:"userSignUp",element:<UserSignUp/>,
    
  },
])

