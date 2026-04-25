import { createBrowserRouter } from "react-router-dom"
import HomePage from "../../features/home/pages/HomePage"
import UserSignIn from "../../features/auth/pages/user/UserSignIn"
//import OtpVerification from "../../features/auth/pages/user/OtpVerification"

export const router=createBrowserRouter([
  {
    path:"/",element:<HomePage/>,
    
  },
    {
   // path:"/userlogin",element:<UserSignIn/>,
    
  },
  //  {
  //   path:"userSignUp",element:<UserSignUp/>,
    
  // },
  {
    //path:"verify-otp",element:<OtpVerification/>
  }
])

