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
    
    const registro = () => {
        
    }
    
    const logout = () => {
        
    }

    console.log(user);
    console.log(error);
    console.log(middleware);
    console.log(url);

    useEffect(() => {
        if(middleware === 'guest' && url && user){
            navigate(url);
        }
    },[user, error]);

    return {
        login,
        registro,
        logout
    }
}