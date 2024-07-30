import useSWR from "swr";
//import clienteAxios from '..config/axios';
import useQuiosco from "../hooks/useQuiosco"
import clienteAxios from "../config/axios";
import {formatearDinero} from "../helpers";

export default function Ordenes() {

    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/pedidos',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
<<<<<<< HEAD
    const {data, error, isLoading} =  useSWR('/api/pedidos', fetcher, {refreshInterval:1000});

    const {handleClickCompletarPedido} = useQuiosco();
=======
    const {data, error, isLoading} =  useSWR('/api/pedidos', fetcher/* , {refreshInterval:1000} */);

    console.log(data?.data);
    console.log(error);
    console.log(isLoading);
>>>>>>> 58b10dd481c244e7d76f53679b295952b55f896d

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
            {/* <div className="grid grid-cols-3"> */}
            <div className="grid grid-cols-2 gap-5">
                {/* Mostrando los productos de los pedidos */}
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className="p-5 bg-white shawod space-y-2 border-b">
                        <p className="text-xl font-bold text-slate-600">
                            Pedido número: {pedido.id}
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
                        {/* Nombre del cliente */}
                        <p className="text-lg font-bold text-slate-600">
                            Cliente: 
                            <span className="font-normal">
                                {''} {pedido.user.name}
                            </span>
                        </p>
                        {/* Total a pagar */}
                        <p className="text-lg font-bold text-amber-600">
                            Total a pagar: 
                            <span className="font-normal text-slate-600">
                                {''} {formatearDinero(pedido.total)}
                            </span>
                        </p>
                        {/* Botón para completar orden */}
                        <button 
                            type="button"
                            className='bg-indigo-600 hover:bg-indigo-800 cursor-pointer
                                px-5 py-2 uppercase rounded-lg font-bold text-white text-center w-full'
                            onClick={() => handleClickCompletarPedido(pedido.id)}
                        >
                            Completar orden
                        </button>
                    </div>
                ))}
            </div>
        </div>
        //Div donde vamos a mostrar las ordenes
        
    )
}
