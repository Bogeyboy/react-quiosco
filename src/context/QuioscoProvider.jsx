import { createContext, useState } from "react"
import { categorias as categoriasDB} from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    //Cuando hay un evento, se somienza con handle seguido del nombre del evento y después lo que va a cambiar
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategoriaActual(categoria);
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria    
            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}

export default QuioscoContext