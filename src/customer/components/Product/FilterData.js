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
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
            { value: "yellow", label: "Yellow" },
            { value: "gray", label: "Gray" },
            { value: "beige", label: "Beige" },
            { value: "purple", label: "Purple" },
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "Small" },
            { value: "M", label: "Medium" },
            { value: "L", label: "Large" },
        ],
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "59-199", label: "59$ To 199$" },
            { value: "199-499", label: "199$ To 499$" },
            { value: "499-999", label: "499$ To 999$" },
            { value: "999-1999", label: "999$ To 1999$" },
            { value: "1999-3999", label: "1999$ To 3999$" },
            { value: "3999-5999", label: "3999$ To 5999$" },
            { value: "5999-9999", label: "5999$ To 9999$" },
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
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
        name: "Availability",
        options: [
            { value: "in stock", label: "In Stock"},
            { value: "out of stock", label: "Out Of Stock"},
           ,
        ]
    },
];

export const sortOptions = [
    { name: 'Price: Low to High', query: "price_low", current: false },
    { name: 'Price: High to Low', query: "price_high", current: false },
];