import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>{/* Esto es un fragment, una manera de no añadir html extra al código */}
            <h1 className="text-4xl font-black">Inicia sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>
            <div className="bg-whit shadow-md rounded-md mt-10 px-5 py-10">
                <form>
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
