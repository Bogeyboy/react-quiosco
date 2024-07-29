import useQuiosco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";
import ResumenProducto from "./ResumenProducto";
import {formatearDinero} from "../helpers";

export default function Resumen() {
    const {pedido, total, handleSubmitNuevaOrden} = useQuiosco();
    const {logout} = useAuth({});

    const comprobarPedido = () => pedido.length === 0;

    const handleSubmit = e => {
        e.preventDefault();
        handleSubmitNuevaOrden(logout);
    };

    console.log(comprobarPedido());

    return (
        <aside className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-3xl font-black">
                Mi pedido
            </h1>
            <p className="text-lg my-5">
                Aquí verás el resúmen y total de tu pedido
            </p>
            {/* Resúmen del pedido */}
            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">
                        Todavía no hay nada en el pedido
                    </p>
                ) : (
                    pedido.map(producto =>(
                        <ResumenProducto
                            key={producto.id}
                            producto = {producto}
                        />
                    ))
                )}
            </div>
            <p className="text-xl mt-10">
                Total a pagar: {''}
                {formatearDinero(total)}
            </p>
            {/* Botón de confirmar pedido */}
            <form
                className="w-full"
                onSubmit={handleSubmit}
            >
                <div className="mt-5">
                    <input 
                        type="submit"
                        className={`${comprobarPedido() ? 
                            'bg-indigo-100' :
                            'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'}
                            px-5 py-2 uppercase rounded-lg font-bold text-white text-center w-full`}
                        value="Confirmar pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </aside>
    )
}
