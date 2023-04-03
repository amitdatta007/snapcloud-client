import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Auth from "../Layouts/Auth";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [

        ]
    },
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'create-account',
                element: <SignUp />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            }
        ]
    }
]);

export default router;