export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('es-EU',{
        style:'currency',
        currency: 'EUR'
    })
}