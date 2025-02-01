import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Cart({ cart, handleInc, handleDec, handleRemove }) {
    // Calculate total price of all items in the cart
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingCost = 10; // For example, assuming standard shipping is $10.00
    const totalCost = totalPrice + shippingCost; // Total cost includes shipping

    return (
        <>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar />
            <div className="container mx-auto mt-10 px-4 ">
                <div className="flex flex-col md:flex-row shadow-md my-10 bg-white rounded-lg overflow-hidden  dark:bg-gray-900 dark:text-white duration-200">
                    {/* Left Section (Cart Items) */}
                    <div className="w-full md:w-3/4 p-6">
                        <div className="flex justify-between border-b pb-4">
                            <h1 className="font-semibold text-lg md:text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-lg md:text-2xl uppercase">{cart.length} Items</h2>
                        </div>

                        {/* Headings */}
                        <div className="hidden md:flex mt-6 mb-4 text-gray-600 text-xs uppercase">
                            <h3 className="w-2/5">Product Details</h3>
                            <h3 className="w-1/5 text-center">Quantity</h3>
                            <h3 className="w-1/5 text-center">Price</h3>
                            <h3 className="w-1/5 text-center">Total</h3>
                        </div>

                        {/* Cart Items */}
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row items-center md:items-start hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-md"
                            >
                                {/* Image & Details */}
                                <div className="flex w-full md:w-2/5 ">
                                    <img className="h-20 w-32 md:h-24 rounded-md object-cover" src={item.img} alt={item.name} />
                                    <div className="ml-4 flex flex-col items-start justify-between">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-red-500 text-xs flex">{item.rating1}</p>
                                        <button className="text-sm text-gray-500 hover:text-red-500 border py-0 px-2 rounded-sm" onClick={() => handleRemove(item.id)}>Remove</button>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex justify-center w-full md:w-1/5 mt-4 md:mt-0">
                                    <button className="border px-2 py-1 text-gray-600 hover:bg-gray-200" onClick={() => handleDec(item.id)}>-</button>
                                    <button className="mx-2 text-center w-8 border">{item.quantity}</button>
                                    <button className="border px-2 py-1 text-gray-600 hover:bg-gray-200" onClick={() => handleInc(item.id)}>+</button>
                                </div>

                                {/* Price & Total */}
                                <span className="w-1/5 text-center font-semibold text-sm">Rs.{item.price }</span>
                                <span className="w-1/5 text-center font-semibold text-sm">Rs.{item.price * item.quantity}</span>
                            </div>
                        ))}

                        {/* Continue Shopping */}
                        <Link to="/" className="flex text-indigo-600 text-sm mt-6">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Right Section (Order Summary) */}
                    <div className="w-full md:w-1/4 p-6 bg-gray-100  dark:bg-gray-900 dark:text-white duration-200">
                        <h1 className="font-semibold text-lg border-b pb-4">Order Summary</h1>
                        <div className="flex justify-between mt-6 mb-4">
                            <span className="font-semibold text-sm uppercase">item {cart.length}</span>
                            <span className="font-semibold text-sm">Rs.{totalPrice}</span>
                        </div>

                        <div>
                            <label className="font-medium text-sm">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm border rounded mt-2  dark:bg-gray-900 dark:text-white duration-200">
                                <option>Standard shipping - Rs.10.00</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label className="font-semibold text-sm">Promo Code</label>
                            <input type="text" placeholder="Enter your code" className="p-2 text-sm w-full border rounded mt-2  dark:bg-gray-900 dark:text-white duration-200" />
                        </div>
                        <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 text-sm rounded">
                            Apply
                        </button>

                        <div className="border-t mt-6 pt-4">
                            <div className="flex justify-between text-sm font-semibold">
                                <span>Total cost</span>
                                <span>Rs.{totalCost}</span>
                            </div>
                            <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-sm rounded">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cart;
