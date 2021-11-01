import { useMutation, useQuery, useQueryClient } from "react-query"
import { useHistory } from "react-router"
import apiClient from "../auth/apiClient"

export const useCardProducts = () => {
    return useQuery(
        ["PRODUCTS_CART"],
        async () => {
            const response = await apiClient.get("api/card-products").then((res) => res.data)
            return response
        },
        {
            staleTime: Infinity,
            notifyOnChangePropsExclusions: ["isStale"],
        }
    )
}

export const useAddProductToCart = () => {
    const queryClient = useQueryClient()
    const history = useHistory()

    return useMutation(
        async (params) => {
            const response = await apiClient.post("api/card-products", { ...params })
            return response
        },
        {
            onSuccess: function (response) {
                history.push("/shopping-carts")
                queryClient.setQueryData("PRODUCTS_CART", () => {
                    return response.data
                })
            },
        }
    )
}

export const useRemoveProductToCart = () => {
    const queryClient = useQueryClient()

    return useMutation(
        async (product_id) => {
            const response = await apiClient.delete("api/card-products/" + product_id)
            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("PRODUCTS_CART", () => {
                    return response.data
                })
            },
        }
    )
}
