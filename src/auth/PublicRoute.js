import { Redirect, Route } from "react-router-dom"
import useAuth from "../hooks/useAuth"




export default function PublicRoute(props) {
   const{isLogged}=useAuth()

    return isLogged ? <Redirect to="/my-account" /> : <Route {...props} />
}
