import { createContext, useState } from "react"
import { toast, Zoom } from "react-toastify";
import { categorias as categoriasDB} from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);


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

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {

        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Pedido actualizado correctamente',{
                position: "top-right",
                autoClose: 3000,
                /* hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, */
                theme: "colored",
                transition: Zoom,
            });
        } else {
            setPedido([...pedido,producto]);
            toast.success('Agregado correctamente al pedido',{
                position: "top-right",
                autoClose: 2500,
                /* hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, */
                theme: "colored",
                transition: Zoom,
            });
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
                handleAgregarPedido
            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}

export default QuioscoContext