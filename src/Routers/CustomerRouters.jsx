import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <div className='pt-28'>
                <Routes >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product />} />
                    <Route path='/product/:productId' element={<ProductDetails />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/account/order' element={<Order />} />
                    <Route path='/account/order/:orderId' element={<OrderDetails />} />
                    {/* <Order/> */}
                    {/* <OrderDetails/> */}
                </Routes>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters