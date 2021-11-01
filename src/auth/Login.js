import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from "../components/Button"
import InputLabel from "../components/InputLabel"
import Notifications from "../components/Notifications"
import OnLoadingPage from "../components/OnLoadingPage"



import useAuth from "../hooks/useAuth"
//import Input from "../components/Input"

const Login = () => {
    const [notification, setNotifications] = useState({})
    const history = useHistory()
    const location = history.location

    let { from } = location.state || { from: { pathname: "/" } }

    const { userData, login, isLogged } = useAuth()

    const [dataLogin, setDataLogin] = useState({
        email: "example@exmaple.com",
        password: "123123",
        remember: true,
    })
    useEffect(() => {
        if (isLogged) history.replace(from)
    }, [isLogged, history, from])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNotifications({ type: "hidden" })
        login.mutate(dataLogin, {
            //onSuccess: () => history.replace(from),
            onError: (error, variables, contexto) => {
                setNotifications({
                    type: "error",
                    responseError: error,
                })
            },
        })
    }

    const handleChangle = (e) => {
        let target = e.target
        let value = target.type === "checkbox" ? target.checked : target.value
        setDataLogin({ ...dataLogin, [target.name]: value })
    }

    if (userData.isLoading) return <OnLoadingPage />

    return (
        <div className="py-content flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-lg font-bold">Inicie sesión con su correo electrónico y contraseña</h2>
                </div>
                <Notifications {...notification} />
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <InputLabel
                                require={true}
                                onChange={handleChangle}
                                name="email"
                                value={dataLogin.email}
                                label={"Email *"}
                                type="email"
                            />
                        </div>
                        <div>
                            <InputLabel
                                require={true}
                                onChange={handleChangle}
                                type="password"
                                name="password"
                                value={dataLogin.password}
                                label={"Contraseña *"}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4"
                                checked={dataLogin.remember}
                                onChange={handleChangle}
                            />
                            <label htmlFor="remember" className="ml-2 block ">
                                Recordarme
                            </label>
                        </div>

                        <div className="">
                            <a href="/" className="font-medium text-orange-600 hover:text-orange-500">
                                Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <Button 
                            height="h-9"
                            isLoading={login.isLoading}
                            textLoading="Iniciando..."
                            styleClass="lg:w-full text-white bg-orange-600 "
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                    <div>
                        <p className="mt-2 text-center text-sm ">
                            <span>¿No tienes cuenta? </span>
                            <Link to="/register" className="font-bold text-orange-600 hover:text-orange-500">
                                Registrarte
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
