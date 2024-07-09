import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';

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
            /* {
                index: true,
                element: <Login />
            } */
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    }
]);

export default router;