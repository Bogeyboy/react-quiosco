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
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="text-slate-800"
                        >Nombre:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50 border border-gray-400 rounded-lg"
                            placeholder="Tu nombre"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}