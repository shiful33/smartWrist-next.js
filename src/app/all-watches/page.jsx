import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import React from "react";
import ProductSection from "../components/ProductSection";

const AllProduct = async () => {
  let plainProducts = [];

  try {
    const productCollection = await dbConnect(COLLECTIONS.PRODUCTS);
    
    if (productCollection && typeof productCollection.find === 'function') {
      const products = await productCollection.find({}).toArray();
      
      plainProducts = JSON.parse(JSON.stringify(products));
    }
  } catch (error) {
    console.error("Database Error in all-watches:", error);
  }

  return <ProductSection initialProducts={plainProducts} />;
};

export default AllProduct;