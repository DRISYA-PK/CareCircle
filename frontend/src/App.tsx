import { router } from "./app/router/AppRouter"
import { RouterProvider } from "react-router-dom"

function App()
{
  return(
    <RouterProvider router={router}/>

    
  )
}

export default App