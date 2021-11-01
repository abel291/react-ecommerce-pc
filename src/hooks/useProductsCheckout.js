import { useMutation, useQuery, useQueryClient } from "react-query"
import { useHistory } from "react-router"
import apiClient from "../auth/apiClient"

export const useProductsCheckout = () => {
    return useQuery(["PRODUCTS_CHECKOUT"], () => null, {
        staleTime: Infinity,
    })
}

export const useMutationProductsCheckout = (product) => {
    const queryClient = useQueryClient()
    const history = useHistory()

    return useMutation(
        async (product) => {
            const response = await apiClient.post("/product-checkout", product)
            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("PRODUCTS_CHECKOUT", () => {
                    return response.data
                })
                history.push("/checkout")
            },
        }
    )
}
export const useAddProductsToCheckout = (product) => {
    const queryClient = useQueryClient()
    const history = useHistory()

    return useMutation(
        async () => {
            const response = await apiClient.get("/product-checkout-cart")
            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("PRODUCTS_CHECKOUT", () => {
                    return response.data
                })
                history.push("/checkout")
            },
        }
    )
}
