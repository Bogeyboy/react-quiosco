import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';
import AdminLayout from './layouts/AdminLayout';
import Ordenes from './views/Ordenes';
import Productos from './views/Productos';

const router = createBrowserRouter([
    //Ruta de la página principal
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                index:true,
                element: <Inicio />
            }
        ]
    },
    //Ruta para la autenticación y el registro
    {
        path: '/auth',
        element: <AuthLayout />, //Componente que va a cargar
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    //Ruta para el panel de administración lateral
    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
]);

export default router;