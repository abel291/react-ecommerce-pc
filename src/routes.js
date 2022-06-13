import Offers from "./pages/offers/Offers"
import Assemblies from "./pages/assemblies/Assemblies"
import Combos from "./pages/combos/Combos"
import ContactUs from "./pages/contact/ContactUs"
import FAQPage from "./pages/FAQPage"
import ShippingDelivery from "./pages/ShippingDelivery"
import ReturnExchanges from "./pages/returnExchanges"
import Login from "./auth/Login"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import Search from "./pages/search/Search"
import ShoppingCarts from "./pages/shoppingCart/ShoppingCarts"
import Register from "./auth/Register"
import MyAccount from "./auth/MyAccount/MyAccount"
import Checkout from "./pages/checkout/Checkout"
import OrderComplete from "./pages/checkout/OrderComplete"

const routesPublic = [
    { type: "public", path: "/", Component: Home },
    { type: "public", path: "/search", Component: Search },
    { type: "public", path: "/product/:id/:slug", Component: Product },
    { type: "public", path: "/offers", Component: Offers },
    { type: "public", path: "/assemblies", Component: Assemblies },
    { type: "public", path: "/combos", Component: Combos },
    { type: "public", path: "/contact-us", Component: ContactUs },
    { type: "public", path: "/faq", Component: FAQPage },
    { type: "public", path: "/shipping-delivery", Component: ShippingDelivery },
    { type: "public", path: "/return-exchanges", Component: ReturnExchanges },
    { type: "public", path: "/login", Component: Login },
    { type: "public", path: "/register", Component: Register },
]

const routePrivate = [
    { type: "private", path: "/my-account/:user?", Component: MyAccount },
    { type: "private", path: "/shopping-carts", Component: ShoppingCarts },
    { type: "private", path: "/checkout", Component: Checkout },
    { type: "private", path: "/order-complete", Component: OrderComplete },
]

export default {
    routesPublic: routesPublic,
    routePrivate: routePrivate
}