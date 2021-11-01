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
                        <NavLink exact to="/my-account" activeClassName="bg-gray-100 font-semibold" className="block px-4 py-3 rounded-md">
                            Dashboard
                        </NavLink>

                        <NavLink to="/my-account/order" activeClassName="bg-gray-100 font-semibold" className="block px-4 py-3 rounded-md">
                            Ordenes
                        </NavLink>

                        <NavLink
                            to="/my-account/account-details"
                            activeClassName="bg-gray-100 font-semibold"
                            className="block px-4 py-3 rounded-md"
                        >
                            Detalles de cuenta
                        </NavLink>
                        <NavLink
                            to="/my-account/change-password"
                            activeClassName="bg-gray-100 font-semibold"
                            className="block px-4 py-3 rounded-md"
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
                    <Switch>
                        <Route exact path="/my-account" component={Dashboard}></Route>
                        <Route exact path="/my-account/order" component={Order}></Route>
                        <Route exact path="/my-account/account-details" component={AccountDetails}></Route>
                        <Route exact path="/my-account/change-password" component={ChangePassword}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
