import Button from "../../components/Button.js"

import OnLoadingPage from "../../components/OnLoadingPage.js"
import PageError from "../../components/PageError.js"
import TitleContent from "../../components/TitleContent.js"
import { useCardProducts } from "../../hooks/useCardProducts.js"
import { useAddProductsToCheckout } from "../../hooks/useProductsCheckout.js"

import OrderSummary from "./OrderSummary.js"
import ProductsCart from "./ProductsCart.js"
const ShoppingCarts = () => {
    const addProductsToCheckout = useAddProductsToCheckout()

    const handleClickAddProductToCart = () => {
        addProductsToCheckout.mutate()
    }

    const cartProducts = useCardProducts()
    if (cartProducts.isFetching) return <OnLoadingPage />

    if (cartProducts.error) return <PageError/>

    return (
        <div className="container py-content relative">
            <div className=" space-y-4">
                <TitleContent text={"Carrito de compra (" + cartProducts.data.products.length + ")"} />
                <div className=" divide-y divide-gray-200">
                    {cartProducts.data.products.map((product, index) => (
                        <ProductsCart product={product} key={product.id} />
                    ))}
                </div>
                
                {cartProducts.data.products.length ? (
                    <>
                        <div>
                            <OrderSummary />
                        </div>
                        <div className="text-right ">
                            <Button
                                isLoading={addProductsToCheckout.isLoading}
                                styleClass="bg-orange-500 text-white "
                                onClick={handleClickAddProductToCart}
                            >
                                {"Comprar ahora"}
                            </Button>
                        </div>
                    </>
                ) : (
                    <span>No hay productos en el carrito de compra</span>
                )}
            </div>
        </div>
    )
}

export default ShoppingCarts
