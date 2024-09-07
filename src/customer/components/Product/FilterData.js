import { Label } from "@headlessui/react";
import { queries } from "@testing-library/react";

export const color = [
    "White", 
    "Black",
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Gray",
    "Beige",
    "Purple"
];

export const filter = [
    {
        id: "color",
        name: "Màu sắc",
        options: [
            { value: "white", label: "Trắng" },
            { value: "black", label: "Đen" },
            { value: "red", label: "Đỏ" },
            { value: "green", label: "Xanh lá" },
            { value: "blue", label: "Xanh dương" },
            { value: "yellow", label: "Vàng" },
            { value: "gray", label: "Xám" },
            { value: "beige", label: "Be" },
            { value: "purple", label: "Tím" },
            { value: "brown", label: "Nâu" },
        ]
    },
    {
        id: "size",
        name: "Kích cỡ",
        options: [
            { value: "S", label: "Nhỏ" },
            { value: "M", label: "Vừa" },
            { value: "L", label: "Lớn" },
        ],
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Mức giá",
        options: [
            { value: "59-199", label: "59$ - 199$" },
            { value: "199-499", label: "199$ - 499$" },
            { value: "499-999", label: "499$ - 999$" },
            { value: "999-1999", label: "999$ - 1999$" },
            { value: "1999-3999", label: "1999$ - 3999$" },
            { value: "3999-5999", label: "3999$ - 5999$" },
            { value: "5999-9999", label: "5999$ - 9999$" },
        ]
    },
    {
        id: "discount",
        name: "Giảm giá",
        options: [
            { value: "10", label: "10% And Above " },
            { value: "20", label: "20% And Above " },
            { value: "30", label: "30% And Above " },
            { value: "40", label: "40% And Above " },
            { value: "50", label: "50% And Above " },
            { value: "60", label: "60% And Above " },
            { value: "70", label: "70% And Above " },
        ]
    },
    {
        id: "stock",
        name: "Số lượng ",
        options: [
            { value: "in stock", label: "Còn hàng"},
            { value: "out of stock", label: "Hết hàng"},
           ,
        ]
    },
];

export const sortOptions = [
    { name: 'Price: Low to High', query: "price_low", current: false },
    { name: 'Price: High to Low', query: "price_high", current: false },
];