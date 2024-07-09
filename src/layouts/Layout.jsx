import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
    <div className="font-bold text-3xl">
        Mostrando desde el layout
        <Outlet />
    </div>
    )
}