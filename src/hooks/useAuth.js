import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import clienteAxios from "../config/axios";

export const useAuth = ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN');//Obtenemos el token de localStorage
    const navigate = useNavigate();
    
    //Llamada a cliente Axios
    const {data: user, error, mutate} = useSWR('/api/user', ()=>
        clienteAxios('/api/user',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors);
        })
    );
    
    /* Función para el login del usuario */
    const login = async (datos, setErrores) => {
        try {
            const {data} = await clienteAxios.post('/api/login', datos);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await mutate(); 
        } catch (error) {
            setErrores(Object.values(error.response.data.errors));
        }
    }
    
    /* Función para el registro de usuarios */
    const registro = async(datos,setErrores) => {
        try {
            const {data} = await clienteAxios.post('/api/registro', datos);
            //console.log(data.token);
            localStorage.setItem('AUTH_TOKEN',data.token);
            setErrores([]);
            await mutate();
        } catch (error) {
            setErrores(Object.values(error.response.data.errors));
        }
    }
    
    /* Función para cerrar sesión */
    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout',null,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }

    useEffect(() => {
        if(middleware === 'guest' && url && user){
            navigate(url);
        }
        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    },[user, error]);

    return {
        login,
        registro,
        logout,
        user,
        error
    }
}