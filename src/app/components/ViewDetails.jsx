import React from 'react';
import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { RiShoppingCartLine, RiStarFill, RiShieldCheckLine, RiTruckLine } from "react-icons/ri";

const ViewDetails = async ({ id }) => {
    let product = null;
    console.log("ID:", id);

    try {
        if (!id || !ObjectId.isValid(id)) {
            return <div className="py-20 font-bold text-center text-red-500">Invalid Product ID!</div>;
        }

        const productCollection = dbConnect(COLLECTIONS.PRODUCTS);
        product = await productCollection.findOne({ _id: new ObjectId(id) });

    } catch (error) {
        console.error("View Details Error:", error);
        return <div className="py-20 text-center">Database connection failed!</div>;
    }

    if (!product) {
        return <div className="py-20 text-2xl font-bold text-center">Product not found!</div>;
    }

    return (
        <div className="container px-4 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-12 p-8 bg-white border border-gray-100 shadow-sm lg:grid-cols-2 rounded-3xl">

                <div className="flex flex-col items-center">
                    <div className="flex justify-center w-full p-10 border border-gray-100 bg-gray-50 rounded-2xl">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                </div>

                {/* ইনফরমেশন সেকশন */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-black leading-tight text-secondary">{product.title}</h1>
                        <p className="mt-1 text-lg font-semibold text-primary">{product.bangla || "Premium Smart Watch"}</p>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center text-yellow-500">
                            <RiStarFill className="mr-1" />
                            <span className="font-bold text-gray-700">{product.ratings}</span>
                            <span className="ml-1 text-gray-400">({product.reviews || 0} Reviews)</span>
                        </div>
                        <div className="text-gray-400">|</div>
                        <div className="font-medium text-gray-600">{product.sold || 0} Sold</div>
                    </div>

                    <div className="text-4xl font-black text-secondary">
                        ৳{product.price?.toLocaleString()}
                    </div>

                    <div className="pt-4 space-y-2 text-sm border-t">
                        <p><span className="font-bold text-gray-800">Sizes:</span> {product.sizes || "All Sizes Available"}</p>
                        <p><span className="font-bold text-gray-800">Colors:</span> {product.color || "Default Color"}</p>
                    </div>

                    <p className="leading-relaxed text-gray-600">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {product.info?.map((item, index) => (
                            <div key={index} className="flex items-center p-3 text-sm text-gray-700 border border-gray-100 bg-gray-50 rounded-xl">
                                <RiShieldCheckLine className="mr-2 text-lg text-primary shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="flex items-center justify-center flex-1 min-w-[160px] gap-2 py-4 font-bold text-white transition-all shadow-lg bg-secondary rounded-2xl hover:bg-black active:scale-95 cursor-pointer">
                            <RiShoppingCartLine className="text-xl" />
                            Add To Cart
                        </button>
                        <button className="flex-1 min-w-[160px] py-4 font-bold text-white transition-all shadow-lg bg-primary rounded-2xl hover:opacity-90 active:scale-95 cursor-pointer">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;