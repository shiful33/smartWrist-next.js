import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const productCollection = await dbConnect(COLLECTIONS.PRODUCTS);
    
    const result = await productCollection.insertOne(body);

    return NextResponse.json({ 
      success: true, 
      message: "Product added!", 
      id: result.insertedId 
    }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}