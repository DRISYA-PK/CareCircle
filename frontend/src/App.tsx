import { router } from "./app/router/appRouter"
import { RouterProvider } from "react-router-dom"

function App()
{
  return(
    <RouterProvider router={router}/>

    
  )
}

export default App