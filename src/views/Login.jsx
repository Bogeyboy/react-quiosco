import { createRef,useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });
    
    //Evento creado para cuando se envía el formulario
    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        login(datos,setErrores);
    }

    return (
        <>{/* Esto es un fragment, una manera de no añadir html extra al código */}
            <h1 className="text-4xl font-black">Inicia sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>
            <div className="bg-whit shadow-md rounded-md mt-10 px-5 py-10">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errores ? errores.map((error,i) => <Alerta key={i}>{error}</Alerta>) : null}
                    {/* Email del usuario */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="text-slate-800"
                        >Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Tu email"
                            ref={emailRef}
                        />
                    </div>
                    {/* Password del usuario */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="text-slate-800"
                        >Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Tu password"
                            ref={passwordRef}
                        />
                    </div>
                    {/* Botón para iniciar sesion */}
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                            uppercase font-bold cursor-pointer"
                        />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/registro">
                    ¿No tienes cuenta? Crea una.
                </Link>
            </nav>
        </>
    )
}