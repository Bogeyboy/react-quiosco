import Categoria from "./Categoria"
import { categorias } from "../data/categorias"

export default function Sidebar() {
    return (
        <aside className="md:w-72">
            {/* Logotipo */}
            <div className="p-4">
                <img
                    className="w-40"
                    src="img/logo.svg"
                    alt="Imagen Logotipo"
                />
            </div>

            {/* Categorías de productos */}
            <div className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        categoria={categoria}  //Estamos pasando este prop como JS
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded-lg"
                >
                    Cancelar orden
                </button>
            </div>
        </aside>
    )
}
