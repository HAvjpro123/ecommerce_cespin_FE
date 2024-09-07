import React, { Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../customer/components/Footer/Footer'
import { routes } from '../Routers/index'
import Default from '../customer/components/Default/Default';
import { useSelector } from 'react-redux';
const CustomerRouters = () => {
    const { auth } = useSelector(store => store)

    return (
        <div>
            <div className='pt-28'>
                {/* <Routes >
                    <Route path='/login' element={<HomePage />} />
                    <Route path='/register' element={<HomePage />} />   
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} />
                    <Route path='/product/:productId' element={<ProductDetails/>} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/account/order' element={<Order />} />
                    <Route path='/account/order/:orderId' element={<OrderDetails />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes> */}
{/* 
                <Router>
                    <Routes>
                        {routes.map((route) => {
                            const Page = route.page
                            const ischeckAuth = !route.isPrivate || auth.user.role==="admin"
                            const Layout = route.isShowHeader ? Default : Fragment
                            return (
                                <Route key={route.path} path={ischeckAuth ? route.path : undefined} element={(
                                    <Layout>
                                        <Page />
                                    </Layout>
                                )} />
                            )
                        })}
                    </Routes>
                </Router> */}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters