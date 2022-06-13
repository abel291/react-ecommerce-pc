import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './navbar/Navbar'

const Layout = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route
                        key={"/"}
                        path={"/"}
                        element={<Home />}
                    />
                    {/* {routes.routesPublic.map((item) => (
                                    <Route
                                        key={item.path} exact
                                        path={item.path}
                                        component={item.Component}

                                    />
                                ))}  */}
                </Routes>

            </div>
            <Footer />
        </div>
    )
}

export default Layout