import SpinnerLoad from "./SpinnerLoad"

const OnLoadingPage = ({ textLoaidng="Cargando..." }) => {
    return <div className=" flex items-center justify-center h-56"><SpinnerLoad/> {textLoaidng}</div>
}

export default OnLoadingPage
