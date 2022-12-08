import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>404 NOT FOUNT</h1>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            
        ]
    }
])

export default router;