import { Route, Switch } from "react-router"
import { NavLink } from "react-router-dom"
import SpinnerLoad from "../../components/SpinnerLoad"
import useAuth from "../../hooks/useAuth"

import AccountDetails from "./AccountDetails"
import ChangePassword from "./ChangePassword"
import Dashboard from "./Dashboard"
import Order from "./Order"

const MyAccount = () => {
    const { logout } = useAuth()

    const handleClickLogout = () => {
        logout.mutate()
    }
    return (
        <div className="container py-content">
            <div className="grid grid-cols-6 md:gap-6 gap-y-10">
                <div className="col-span-6 md:col-span-2">
                    <div className="flex flex-col space-y-1">
                        <NavLink exact to="/my-account"
                            className={({ isActive }) =>
                            ("block px-4 py-3 rounded-md" + isActive
                                ? "bg-gray-100 font-semibold"
                                : ""
                            )}>
                            Dashboard
                        </NavLink>

                        <NavLink to="/my-account/order"
                            className={({ isActive }) =>
                            ("block px-4 py-3 rounded-md" + isActive
                                ? "bg-gray-100 font-semibold"
                                : ""
                            )}

                        >
                            Ordenes
                        </NavLink>

                        <NavLink
                            to="/my-account/account-details"
                            className={({ isActive }) =>
                            ("block px-4 py-3 rounded-md" + isActive
                                ? "bg-gray-100 font-semibold"
                                : ""
                            )}
                        >
                            Detalles de cuenta
                        </NavLink>
                        <NavLink
                            to="/my-account/change-password"
                            className={({ isActive }) =>
                            ("block px-4 py-3 rounded-md" + isActive
                                ? "bg-gray-100 font-semibold"
                                : ""
                            )}
                        >
                            Cambiar contraseña
                        </NavLink>

                        <button
                            onClick={handleClickLogout}
                            className="w-full text-left block px-4 py-3 rounded-md"
                            disabled={logout.isLoaidng}
                        >
                            {logout.isLoading ? <SpinnerLoad /> : "Salir"}
                        </button>
                    </div>
                </div>
                <div className="col-span-6 md:col-span-4">

                    <Route path="/my-account" element={Dashboard}></Route>
                    <Route path="/my-account/order" element={Order}></Route>
                    <Route path="/my-account/account-details" element={AccountDetails}></Route>
                    <Route path="/my-account/change-password" element={ChangePassword}></Route>

                </div>
            </div>
        </div>
    )
}

export default MyAccount
