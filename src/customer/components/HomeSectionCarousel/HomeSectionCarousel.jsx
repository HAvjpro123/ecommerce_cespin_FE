import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../../State/Product/Action';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const HomeSectionCarousel = ({title, category}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const param = useParams()
    const dispatch = useDispatch()
    const { products } = useSelector(store => store)
    // console.log("pages: ", product.products.totalpages)

    const decodedQueryString = decodeURIComponent(location.search);
    const searchParams = new URLSearchParams(decodedQueryString);
    const colorValue = searchParams.get("color")
    const sizeValue = searchParams.get("size");
    const priceValue = searchParams.get("price")
    const discount = searchParams.get("discount")
    const sortValue = searchParams.get("sort");
    const pageNumber = searchParams.get("page") || 1;
    const stock = searchParams.get("stock");

    useEffect(() => {

        const [minPrice, maxPrice] = priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);
        const data = {
            category: category,
            colors: colorValue || [],
            sizes: sizeValue || [],
            minPrice,
            maxPrice,
            minDiscount: discount || 0,
            sort: sortValue || "price_low",
            pageNumber: pageNumber - 1,
            pageSize: 8,
            stock: stock
        }
        dispatch(findProducts(data))
        console.log("data", data)

    }, [param.lavelThree, colorValue, sizeValue, priceValue, discount, sortValue, pageNumber, stock, category, dispatch])

    // Nút Next tùy chỉnh với Tailwind CSS
    const NextArrow = ({ onClick }) => {
        return (
            <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2  bg-gray-200 p-2 shadow-md hover:text-green-600 focus:outline-none z-10"
                onClick={onClick}
            >
                <ArrowForwardIosIcon />
            </button>
        );
    };

    // Nút Prev tùy chỉnh với Tailwind CSS
    const PrevArrow = ({ onClick }) => {
        return (
            <button
                className="absolute left top-1/2 transform -translate-y-1/2  p-2 bg-gray-200 shadow-md hover:text-green-600 focus:outline-none z-10"
                onClick={onClick}
            >
                <ArrowBackIosIcon />
            </button>
        );
    };

    // Cấu hình cho carousel
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,  // Nút Next tùy chỉnh
        prevArrow: <PrevArrow />,  // Nút Prev tùy chỉnh
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            {/* Div tiêu đề HomeSectionCarousel */}
            <div className='flex border-b border-stone-300'>
                <div className='py-2 mx-3 border-b-2 border-green-700'>
                    <span className='px-1 text-xl'>{title}</span>
                </div>
                <div className='py-2 mx-2'>
                    <button onClick={() => navigate("/Nội_thất/Bàn/Bàn_ăn")} className='px-2 text-stone-500'>xem tất cả<KeyboardArrowRightIcon className='mb-1 ' /></button>
                </div>
            </div>
            <div className="relative w-full mx-auto ">
                <Slider className='' {...settings}>

                    {products.products && products.products?.content?.map((item) => (
                        <HomeSectionCard key={item.id} product={item} />
                    ))}

                </Slider>
            </div>
        </div>


    );
};

export default HomeSectionCarousel