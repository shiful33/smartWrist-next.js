import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import React from "react";
import ProductSection from "../components/ProductSection";

const AllProduct = async () => {
  const productCollection = dbConnect(COLLECTIONS.PRODUCTS);
  const products = await productCollection.find({}).toArray();

  const plainProducts = products.map(p => ({
    ...p,
    _id: p._id.toString() 
  }));

  return <ProductSection initialProducts={plainProducts} />;
};

export default AllProduct;