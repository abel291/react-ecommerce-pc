import { useHistory } from "react-router-dom"

import { useRef } from "react"
import MenuMovil from "./movil/MenuMovil"
import MenuDesktop from "./desktop/MenuDesktop"
const Navbar = () => {
    const inputSearchRef = useRef()
    const history = useHistory()

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        if (!inputSearchRef.current.value) {
            return
        }
        history.push({ pathname: "/search", state: { q: inputSearchRef.current.value } })
        inputSearchRef.current.value = ""
    }

    return (
        <>
            <div className="md:hidden ">
                <MenuMovil handleSubmitSearch={handleSubmitSearch} inputSearchRef={inputSearchRef} />
            </div>
            <div className="hidden md:block ">
                <MenuDesktop handleSubmitSearch={handleSubmitSearch} inputSearchRef={inputSearchRef} />
            </div>
        </>
    )
}

export default Navbar
