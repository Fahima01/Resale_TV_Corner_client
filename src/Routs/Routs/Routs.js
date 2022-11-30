import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MyOrderPageLayout from "../../Layout/MyOrderPageLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../Pages/Dashboard/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Sellers from "../../Pages/Dashboard/Sellers";
import Error404 from "../../Pages/ErrorPage/Error404";
import Home from "../../Pages/Home/Home/Home";
import ProductCategory from "../../Pages/Home/ProductCategory/ProductCategory";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/products/:id',
                element: <PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
            {
                path: '/addproducts',
                element: <AddProduct></AddProduct>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>
            },

        ]
    },
    {
        path: '/myorders',
        element: <PrivateRoute> <MyOrderPageLayout></MyOrderPageLayout>  </PrivateRoute>,
        children: [
            {
                path: '/myorders',
                element: <MyOrders></MyOrders>,
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
]);

export default router;