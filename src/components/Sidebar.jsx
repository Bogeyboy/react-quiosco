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
                    alt=""
                />
            </div>

            <div className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        categoria={categoria}  //Estamos pasando este prop como JS
                    />
                ))}
            </div>

        </aside>
    )
}
