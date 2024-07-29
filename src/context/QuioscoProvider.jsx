import { createContext, useState, useEffect } from "react"
import { toast, Zoom } from "react-toastify";
//import { categorias as categoriasDB} from "../data/categorias";
import clienteAxios from "../config/axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    //const [categorias, setCategorias] = useState(categoriasDB);
    const [categorias, setCategorias] = useState([]);
    //const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total,producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal);
    },[pedido])

    const obtenerCategorias = async () => {
        try {
            /* const respuesta = await axios('http://localhost:8000/api/categorias');
            console.log(respuesta); */
            //const varenv = import.meta.env.VITE_API_URL;
            //const {data} = await axios('http://localhost:8000/api/categorias');
            const {data} = await clienteAxios('/api/categorias');
            //const {data} = await axios(`${/* import.meta.env.VITE_API_URL */varenv}/api/categorias`);
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        obtenerCategorias();
    },[])

    //Cuando hay un evento, se somienza con handle seguido del nombre del evento y después lo que va a cambiar
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }
    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, /* imagen, */ ...producto}) => {

        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Pedido actualizado correctamente',{
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Zoom,
            });
        } else {
            setPedido([...pedido,producto]);
            toast.success('Agregado correctamente al pedido',{
                position: "top-right",
                autoClose: 2500,
                theme: "colored",
                transition: Zoom,
            });
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    };

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Producto eliminado correctamente del pedido.',{
                position: "top-right",
                autoClose: 2500,
                theme: "colored",
                transition: Zoom,
            });
    }

    const handleSubmitNuevaOrden = async () =>{
        
        const token = localStorage.getItem('AUTH_TOKEN');//Obtenemos el token de localStorage
        try {
            await clienteAxios.post('/api/pedidos',
                {
                    total,//Pasamos estas variables para que está disponible en la parte de Laravel
                    productos: pedido.map(producto => {
                        return {
                            id: producto.id,
                            cantidad: producto.cantidad
                        }
                    })
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden
            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}

export default QuioscoContext