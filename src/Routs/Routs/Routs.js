import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import Error404 from "../../Pages/ErrorPage/Error404";
import Home from "../../Pages/Home/Home/Home";
import ProductCategory from "../../Pages/Home/ProductCategory/ProductCategory";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product-categories/:id',
                element: <ProductCategory></ProductCategory>
            },
            {
                path: '/categories/:id',
                element: <CategoryPage></CategoryPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
]);

export default router;