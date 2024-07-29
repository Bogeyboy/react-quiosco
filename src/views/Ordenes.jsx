import useSWR from "swr";
//import clienteAxios from '..config/axios';
import clienteAxios from "../config/axios";

export default function Ordenes() {

    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/pedidos',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const {data, error, isLoading} =  useSWR('/api/pedidos', fetcher/* , {refreshInterval:1000} */);

    if (isLoading) return 'Cargando las órdenes......'
    
    return (
        
        <div>
            {/* Div de cabecera con texto */}
            <h1 className="text-4xl font-black">
                Órdenes
            </h1>
            <p className="text-2xl my-10">
                Administra las órdenes desde aquí
            </p>
            {/* Div en el que se mostrarán las órdenes */}
            <div>
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className="p-5 bg-white shawod space-y-2 border-b">
                        <p className="text-xl font-bold text-slate-600">
                            Contenido del pedido: {pedido.id}
                        </p>

                        {/* {if} */}
                        {pedido.productos.map(producto => (
                            <div
                                key={producto.id}
                                className="border-b border-b-slate-200 last-of-type:border-none py-4"
                            >
                                {/* <p className="text-sm">
                                    ID: {producto.id}
                                </p> */}
                                <p>
                                    {producto.nombre}
                                </p>
                                <p className="text-sm">
                                    Cantidad: {''}
                                    <span className="font-bold">
                                        {producto.pivot.cantidad}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        //Div donde vamos a mostrar las ordenes
        
    )
}
