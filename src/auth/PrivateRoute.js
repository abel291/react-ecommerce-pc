import { Route, Redirect, useLocation } from "react-router-dom"
import OnLoadingPage from "../components/OnLoadingPage"
import useAuth from "../hooks/useAuth"


//import { useEffect, useState } from "react"

const PrivateRoute = (props) => {
    
    const location = useLocation()
    const { userData } = useAuth()
    const { isLoading, error, data: user }=userData

    if (isLoading) return <OnLoadingPage />

    if (error) return "An error has occurred: " + error.message

    return user ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/login",
                state: { from: location },
            }}
        />
    )
}
export default PrivateRoute
