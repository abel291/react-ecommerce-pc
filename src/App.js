import "./index.css"
import Footer from "./layouts/Footer"
import Navbar from "./layouts/navbar/Navbar"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import Search from "./pages/search/Search"
import ShoppingCarts from "./pages/shoppingCart/ShoppingCarts"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Offers from "./pages/offers/Offers"
import Assemblies from "./pages/assemblies/Assemblies"
import Combos from "./pages/combos/Combos"
import ContactUs from "./pages/contact/ContactUs"
import FAQPage from "./pages/FAQPage"
import ShippingDelivery from "./pages/ShippingDelivery"
import ReturnExchanges from "./pages/returnExchanges"
import ScrollToTop from "./components/ScrollToTop"
import Login from "./auth/Login"
import PrivateRoute from "./auth/PrivateRoute"
import Register from "./auth/Register"
import MyAccount from "./auth/MyAccount/MyAccount"
import Checkout from "./pages/checkout/Checkout"
import OrderComplete from "./pages/checkout/OrderComplete"
import { QueryClient, QueryClientProvider } from "react-query"
//import { ReactQueryDevtools } from "react-query/devtools"
const routes = [
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

    { type: "private", path: "/my-account/:user?", Component: MyAccount },
    { type: "private", path: "/shopping-carts", Component: ShoppingCarts },
    { type: "private", path: "/checkout", Component: Checkout },
    { type: "private", path: "/order-complete", Component: OrderComplete },
]
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 0,
            refetchOnWindowFocus: false,
        },
    },
})

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <ScrollToTop />
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <div className="flex-grow">
                            <Switch>
                                {routes.map(({ path, Component, type }, key) =>
                                    type === "public" ? (
                                        <Route key={path} exact path={path} component={Component} />
                                    ) : (
                                        <PrivateRoute key={path} exact path={path} component={Component} />
                                    )
                                )}
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default App
