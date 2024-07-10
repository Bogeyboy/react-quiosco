import { formatearDinero } from "../helpers";

export default function Producto({producto}) {
    
    const {nombre,imagen,precio} = producto;

    return (
        <div className="border p-3 shadow bg-white">
            <img 
                alt={`imagen {$nombre}`}
                src={`/img/${imagen}.jpg`}
                className="w-full"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">
                    {nombre}
                </h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white w-full mt-5 p-3 uppercase font-bold rounded-lg"
                >
                    Agregar al pedido
                </button>
            </div>
        </div>
    )
}
