
import * as React from 'react';
import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import PropTypes from 'prop-types';
import { Rating, Grid, LinearProgress, Box, Tab, Tabs, Button } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action';
import HomeSectionCarousel2 from '../HomeSectionCarousel/HomeSectionCarousel2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: false },
        { name: 'L', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ProductDetails() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [openAddToCart, setopenAddToCart] = useState();
    const [showAlert, setShowAlert] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store);

    console.log("---", params.productId);
    // console.log("category",products.product?.category?.name)
    useEffect(() => {
        const data = { productId: params.productId };
        dispatch(findProductsById(data));
        console.log("data product", data)
    }, [params.productId]);

    const handleAddToCart = () => {
        setOpen(true);
        const data = { productId: params.productId, size: selectedSize.name }
        console.log("data _ ", data)

        dispatch(addItemToCart(data))
        setTimeout(() => {
            setOpen(false);
        }, 1000);
        // navigate("/cart")
    }
    const handleNotAddToCart = () => {
        setShowAlert("Vui lòng chọn kích thước sản phẩm!!")
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const hadleOpenAddToCart = () => {
        setopenAddToCart(true)
    };

    return (
        <div>

            <div className="bg-white lg:px-20 z-0 pt-28">
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div className="pt-6 ">
                    {/* breadcumb */}
                    <nav aria-label="Breadcrumb">
                        <ol className="mx-2 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                            <li >

                                <div className="flex items-center space-x-2">
                                    <a className=" text-sm font-medium text-gray-900">
                                        Trang chủ
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                    <a className="mr-2 text-sm font-medium text-gray-900">
                                        {products.product?.category?.parentCategory?.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                    <a className="mr-2 text-sm font-medium text-gray-900">
                                        {products.product?.category?.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li className="text-sm">
                                <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {products.product?.title}
                                </a>
                            </li>
                        </ol>
                    </nav>
                    {/* product option */}
                    <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

                        {/* Image gallery */}
                        <div className="flex flex-col items-center">
                            <div className="overflow-hidden rounded-none max-w-[30rem] max-h-[35rem]">
                                <img
                                    src={products.product?.imageUrl}
                                    alt={product.images[0].alt}

                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-wrap space-x-5 justify-center">
                                {product.images.map((item, index) => <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">

                                </div>)}
                            </div>

                        </div>

                        {/* Product info */}
                        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
                    lg:pb-24">
                            <div className="lg:col-span-2 ">
                                <h1 className=" text-3xl font-semibold text-gray-900">{products.product?.title}</h1>

                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0 " >
                                <h2 className="sr-only">Product information</h2>
                                {/* Reviews */}
                                <div className="mt-4 ">
                                    <div className='flex items-center space-x-3'>
                                        <Rating className='-mx-1 z-100' value={5} readOnly ></Rating >
                                        <p className='text-gray-500 text-sm'>4234 Đánh giá |</p>
                                        <p className='ml-3 text-sm font-medium text-indigo-600
                                     hover:text-indigo-500'>345 Bình luận</p>
                                    </div>
                                </div>

                                {/* Giá & vật liệu & danh mục */}
                                <div className='space-y-8 pt-4'>
                                    <div className=' flex space-x-5 items-center   text-gray-900 mt-8'>
                                        <p className='font-semibold  text-3xl '>{products.product?.discountedPrice}$</p>
                                        <p className='text-gray-500  lg:text-xl line-through'>{products.product?.price}$</p>
                                        <p className='text-green-600 lg:text-xl font-semibold'>{products.product?.discountPresent}%off</p>
                                    </div>

                                    <div className='flex space-x-3 '>
                                        <h1 className='text-lg lg:text-xl text-gray-800 font-semibold pt-1'>Vật liệu: </h1>
                                        <h1 className='border border-gray-300 text-lg lg:text-xl text-gray-800  px-3 py-1'>{products.product?.brand}</h1>
                                    </div>

                                    <div className='flex space-x-3'>
                                        <h1 className='text-lg lg:text-xl text-gray-800 font-semibold pt-1'>Danh mục: </h1>
                                        <h1 className='text-lg lg:text-xl text-gray-800  py-1'>{products.product?.category.name}</h1>
                                    </div>
                                </div>


                                <form className="mt-10">

                                    {/* Sizes */}
                                    <div className="mt-10 ">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900">Kích thước:</h3>

                                        </div>

                                        <fieldset aria-label="Choose a size" className="mt-4">
                                            <RadioGroup
                                                value={selectedSize}
                                                onChange={setSelectedSize}
                                                className="flex gap-4"
                                                onClick={hadleOpenAddToCart}

                                            >
                                                {products.product?.sizes.map((size, index) => (
                                                    <Radio
                                                        key={size.id}
                                                        value={size}
                                                        disabled={!size.quantity === 0}
                                                        className={classNames(
                                                            size.quantity
                                                                ? 'cursor-pointer bg-white rounded-none text-gray-900 shadow-sm '
                                                                : 'cursor-not-allowed hidden bg-gray-50 text-gray-200 z-10',
                                                            'group relative flex items-center justify-center rounded-none border p-4 lg:p-2 text-md font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                        )}
                                                    >
                                                        <span>{size.name}</span>
                                                        {size.quantity ? (
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none rounded-none absolute -inset-px  border-2 border-transparent
                                                             group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                            >
                                                                <svg
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                >
                                                                    <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </Radio>
                                                ))}
                                            </RadioGroup>
                                        </fieldset>

                                    </div>
                                    <div className='mx-auto mt-2 text-xl '>
                                        {showAlert && (
                                            <p style={{ color: 'red' }}>
                                                {showAlert}
                                            </p>
                                        )}
                                    </div>
                                    {openAddToCart ? (

                                        <button className="mt-10 flex w-full items-center justify-center  border border-transparent
                                        bg-green-600 px-8 py-3 text-lg font-medium text-white hover:bg-green-700  rounded-none"
                                            onClick={handleAddToCart}>THÊM VÀO GIỎ HÀNG
                                        </button>
                                    ) : (
                                        <div onClick={handleNotAddToCart}>
                                            <button className="mt-10 flex w-full items-center justify-center  border border-transparent
                                        bg-green-600 px-8 py-3 text-lg font-medium text-white hover:bg-green-700  rounded-none"
                                            >Add To Cart
                                            </button>
                                        </div>

                                    )

                                    }


                                    <div className='py-4     '>
                                        <p className='text-md'>Liên hệ tư vấn và đặt mua:<span className='text-red-500'> 1800 9998</span></p>
                                    </div>

                                    {/* box thông tin */}
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="MÔ TẢ" {...a11yProps(0)} />
                                                <Tab label="BẢO HÀNH" {...a11yProps(1)} />
                                                <Tab label="VẬN CHUYỂN" {...a11yProps(2)} />
                                            </Tabs>
                                        </Box>
                                        <CustomTabPanel className='-mx-6 text-gray-800' value={value} index={0}>
                                            {products.product?.description}
                                        </CustomTabPanel >
                                        <CustomTabPanel value={value} index={1}>
                                            Item Two
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={2}>
                                            Item Three
                                        </CustomTabPanel>
                                    </Box>
                                </form>
                            </div>



                        </div>

                    </section>

                    {/* rating & reviews */}
                    <section className='mx-6'>
                        <div className='flex '>
                            <div className='py-2 mx-3 border-b-2 border-green-600'>
                                <span className='px-1 text-2xl'>RECENT REVIEWS & RATINGS</span>
                            </div>
                        </div>
                        <div className='border p-5'>
                            <Grid container spacing={7}>
                                <Grid item xs={12} md={7}>
                                    <div className='space-y-5'>
                                        {[1, 1, 1].map((item, index) => <ProductReviewCard key={index} />)}
                                    </div>
                                </Grid>
                                <Grid item md={5} xs={12} >
                                    <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
                                    <div className='flex items-center space-x-2'>
                                        <Rating className='-mx-1' name='read-only' value={4.6} precision={.5} readOnly />
                                        <p className='text-gray-600'>54676 Ratings</p>
                                    </div>
                                    <Box className="mt-6 space-y-3">
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={3} md={3}>
                                                <p>Excellent</p>
                                            </Grid>
                                            <Grid item xs={7} md={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={40} color='success' />
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={3} md={3}>
                                                <p>Very Good</p>
                                            </Grid>
                                            <Grid item xs={7} md={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={30} color='success' />
                                            </Grid>
                                        </Grid><Grid container alignItems="center" gap={2}>
                                            <Grid item xs={3} md={3}>
                                                <p>Good</p>
                                            </Grid>
                                            <Grid item xs={7} md={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={25} />
                                            </Grid>
                                        </Grid><Grid container alignItems="center" gap={2}>
                                            <Grid item xs={3} md={3}>
                                                <p>Avarage</p>
                                            </Grid>
                                            <Grid item xs={7} md={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={20} color='warning' />
                                            </Grid>
                                        </Grid><Grid container alignItems="center" gap={2}>
                                            <Grid item xs={3} md={3}>
                                                <p>Poor</p>
                                            </Grid>
                                            <Grid item xs={7} md={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={15} color='error' />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    </section>

                    {/* simalar product */}
                    <section className='py-10 mx-6 ' >
                        <HomeSectionCarousel2 title={"SẢN PHẨM TƯƠNG TỰ"} category={products.product?.category.name} />
                    </section>


                </div>
            </div>
        </div>

    )
}

