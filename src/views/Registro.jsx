import { createRef,useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios'

export default function Registro() {
    
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([]);
    
    //Evento creado para cuando se envía el formulario
    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        try {
            const respuesta = await clienteAxios.post('/api/registro', datos);
            console.log(respuesta);
        } catch (error) {
            setErrores(Object.values(error.response.data.errors));
        }
    }

    return (
        <>{/* Esto es un fragment, una manera de no añadir html extra al código */}
            <h1 className="text-4xl font-black">Crea tu cuenta de usuario</h1>
            <p>Crea tu cuenta llenando el formulario</p>
            
            {/* Formulario de registro en la aplicación */}
            <div className="bg-whit shadow-md rounded-md mt-10 px-5 py-10">
                <form
                    onSubmit={handleSubmit}
                    noValidate //Se usa novalidate para que no se aplique la validación HTML
                >
                    {errores ? errores.map((error,i) => <Alerta key={i}>{error}</Alerta>) : null}
                    {/* Nombre del usuario */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="text-slate-800"
                        >Nombre:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Tu nombre"
                            ref={nameRef}
                        />
                    </div>
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
                    {/* Confirmación de Password del usuario */}
                    <div className="mb-4">
                        <label
                            htmlFor="password_confirmation"
                            className="text-slate-800"
                        >Confirmar password:</label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Repetir password"
                            ref={passwordConfirmationRef}
                        />
                    </div>
                    {/* Botón para crear cuenta */}
                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                            uppercase font-bold cursor-pointer"
                        />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">
                    Si ya tienes cuenta, inicia sesión
                </Link>
            </nav>
        </>
    )
}