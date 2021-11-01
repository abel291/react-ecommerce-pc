import { Transition } from "@headlessui/react"

import { CheckCircleIcon, XCircleIcon, XIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
const Notifications = ({ type = "hidden", errors, title = "Operacion exitosa", subTitle = "", scrollUp = true }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (type === "ok" || type === "error") {
            setShow(true)
            if (scrollUp) {
                document.getElementById("root").scrollIntoView({ behavior: "smooth" })
            }
        }

    }, [type,scrollUp])
    return (
        <Transition
            show={show}
            enter="transform transition duration-150"
            enterFrom="opacity-0  scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            {type === "ok" && (
                <div className="bg-green-100 p-2 md:p-4 flex items-start space-x-2 rounded-md">
                    <div>
                        <CheckCircleIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="text-green-700 flex-grow">
                        <span className="font-semibold block text-green-600">{title}</span>
                        <span className="text-green-600">
                            {subTitle}
                        </span>
                    </div>

                    <button type="button" onClick={(e) => setShow(false)} className="outline-none focus:outline-none">
                        <XIcon className="h-5 w-5 text-green-500" />
                    </button>
                </div>
            )}
            {type === "error" && (
                <div className="flex bg-red-100 rounded-md p-4 text-sm my-4">
                    <div>
                        <XCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="px-4 flex-grow">
                        <span className="text-red-700 font-semibold">Tienes Errores por revisar </span>
                        <ul className="list-disc text-red-600 list-inside">
                            {Array.isArray(errors) ? errors.map((msg, i) => <li key={i}>{msg}</li>) : <li>{errors}</li>}
                        </ul>
                    </div>
                    <div>
                        <button type="button" onClick={(e) => setShow(false)} className="outline-none focus:outline-none">
                            <XIcon className="h-4 w-4 text-red-500" />
                        </button>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Notifications
