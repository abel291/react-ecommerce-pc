import Button from "../../components/Button"

const Order = () => {
    return (
        <div className="space-y-2">
            <h3 className="font-bold text-2xl mb-6">Ordenes</h3>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th className="bg-gray-100 p-4 text-heading font-semibold text-start">Order</th>
                        <th className="bg-gray-100 p-4 text-heading font-semibold text-start">Fecha</th>
                        <th className="bg-gray-100 p-4 text-heading font-semibold text-start">Status</th>
                        <th className="bg-gray-100 p-4 text-heading font-semibold text-start">Total</th>
                        <th className="bg-gray-100 p-4 text-heading font-semibold text-start">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-5 text-start">#3203</td>
                        <td className="px-4 py-5 text-start">March 18, 2021</td>
                        <td className="px-4 py-5 text-start">Completed</td>
                        <td className="px-4 py-5 text-start">$16,950.00 for 93 items</td>
                        <td className="px-4  text-start">
                        <Button>detalles</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-5 text-start">#3203</td>
                        <td className="px-4 py-5 text-start">March 18, 2021</td>
                        <td className="px-4 py-5 text-start">Completed</td>
                        <td className="px-4 py-5 text-start">$16,950.00 for 93 items</td>
                        <td className="px-4  text-start">
                            <Button>detalles</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Order
