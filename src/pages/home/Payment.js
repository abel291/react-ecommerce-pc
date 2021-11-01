const Payment = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between border border-gray-200 divide-y md:divide-y-0  rounded-md md:divide-x divide-gray-200">
            <div className="py-3 md:py-6 px-3 md:px-6">
                <div className="font-bold text-orange-500 text-lg">Entrega Gratis</div>
                <div className=" font-light text-gray-600">Desde $30</div>
            </div>

            <div className="py-3 md:py-6 px-3 md:px-6">
                <div className="font-bold text-orange-500 text-lg">Atencion al cliente</div>
                <div className=" font-light text-gray-600">Servicio 24/7</div>
            </div>

            <div className="py-3 md:py-6 px-3 md:px-6">
                <div className="font-bold text-orange-500 text-lg">10 Dias</div>
                <div className=" font-light text-gray-600">Para devolución gratuita</div>
            </div>

            <div className="py-3 md:py-6 px-3 md:px-6">
                <div className="font-bold text-orange-500 text-lg">Trasferencias</div>
                <div className=" font-light text-gray-600">Desde tu banco</div>
            </div>

            <div className="py-3 md:py-6 px-3 md:px-6">
                <div className="font-bold text-orange-500 text-lg">Pagos</div>
                <div className=" font-light text-gray-600">Seguros y confiables</div>
            </div>
        </div>
    )
}

export default Payment
