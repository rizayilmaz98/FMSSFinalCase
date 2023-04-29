import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import SingleShipPage from "../pages/SingleShipPage";
import LoginSignupPage from "../pages/LoginSignupPage";
import ForumPage from "../pages/ForumPage";
const router = createBrowserRouter([
    {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ":name",
            element: <SingleShipPage />,
          },
        ],
      },
      {
        path: "/loginSignup",
        element: <LoginSignupPage/>
      },
      {
        path: "/forum",
        element: <ForumPage/>
      }
])
export default router;