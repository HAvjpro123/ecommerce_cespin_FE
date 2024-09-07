import Admin from "../customer/Auth/Admin";
import Cart from "../customer/components/Cart/Cart";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import NotFoundPage from "../customer/NotFoundPage/NotFoundPage";
import HomePage from "../customer/pages/HomePage/HomePage";
import PaymentCancel from "../customer/components/Payment/PaymentCancel";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/login',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/register',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: Cart,
        isShowHeader: true
    },
    {
        path: '/:lavelOne/:lavelTwo/:lavelThree',
        page: Product,
        isShowHeader: true
    },
    {
        path: '/product/:productId',
        page: ProductDetails,
        isShowHeader: true
    },
    {
        path: '/checkout',
        page: Checkout,
        isShowHeader: true
    },
    {
        path: '/account/order',
        page: Order,
        isShowHeader: true
    },
    {
        path: '/account/order/:orderId',
        page: OrderDetails,
        isShowHeader: true
    },
    {
        path: '/payment/:orderId',
        page: PaymentSuccess,
        isShowHeader: true
    },
    {
        path: '/payment/cancel/:orderId',
        page: PaymentCancel,
        isShowHeader: true
    },
    {
        path: '/admin',
        page: Admin,
        isShowHeader: true,
        isPrivate: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: true
    },
    
]