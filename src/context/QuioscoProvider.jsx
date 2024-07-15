import { createContext, useState } from "react"
import { categorias as categoriasDB} from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});


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

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto
            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}

export default QuioscoContext