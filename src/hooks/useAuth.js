import { useMutation, useQuery, useQueryClient } from "react-query"

import apiClient from "../auth/apiClient"

const useAuth = (dispatch) => {
    const queryClient = useQueryClient()
    const userData = useQuery(
        ["USER"],
        async () => {
            await apiClient.get("/sanctum/csrf-cookie")
            const response = await apiClient
                .get("api/user")
                .then((res) => res.data)
                .catch((res) => null)
            return response
        },
        { staleTime: Infinity }
    )

    const login = useMutation(
        async (dataLogin) => {
            const response = await apiClient.post("/login", { ...dataLogin })

            return response
        },
        {
            onSuccess: function (res) {
                queryClient.setQueryData("USER", () => {
                    return res.data.user
                })
            },
        }
    )
    const register = useMutation(
        async (registerData) => {
            const response = await apiClient.post("/register", {
                ...registerData,
            })

            return response
        },
        {
            onSuccess: function (res) {
                queryClient.setQueryData("USER", () => {
                    return res.data.user
                })
            },
        }
    )

    const logout = useMutation(
        async () => {
            await apiClient.get("/sanctum/csrf-cookie")
            const response = await apiClient.post("/logout")
            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("USER", null)
            },
        }
    )

    const updateUser = useMutation(
        async (dataUser) => {
            await apiClient.get("/sanctum/csrf-cookie")
            const response = await apiClient.put("/user/profile-information", { ...dataUser })
            return response
        },
        {
            onSuccess: function (data, variables, context) {
                console.log(data, variables, context)
                queryClient.setQueryData("USER", { ...userData.data, ...variables })
            },
        }
    )

    const updatePassword = useMutation(async (dataPassword) => {
        await apiClient.get("/sanctum/csrf-cookie")
        const response = await apiClient.put("/user/password", { ...dataPassword })
        return response
    })

    return {
        user: userData.data,
        isLogged: userData.data ? true : false,
        userData,
        login,
        register,
        logout,
        updateUser,
        updatePassword,
    }
}

export default useAuth
