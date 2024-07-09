import { Link } from 'react-router-dom'
export default function Registro() {
    return (
        /* <div>
            <h1 className="text-4xl font-black">Crea tu cuenta de usuario</h1>
            <p>Crea tu cuenta llenando el formulario</p>
        </div> */
        <>{/* Esto es un fragment, una manera de no añadir html extra al código */}
            <h1 className="text-4xl font-black">Crea tu cuenta de usuario</h1>
            <p>Crea tu cuenta llenando el formulario</p>
            <div className="bg-whit shadow-md rounded-md mt-10 px-5 py-10">
                <form>
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