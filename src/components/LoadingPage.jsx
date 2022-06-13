import Loading from "./Loading"
import useAuth from "../hooks/useAuth"

const LoadingPage = () => {
    const { logout } = useAuth()

    return <Loading isLoading={logout.isLoading} />
}

export default LoadingPage
