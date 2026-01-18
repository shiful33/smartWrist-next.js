import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  try {
    await client.connect();
    
    const dbName = process.env.DBNAME || "smartWristDB"; 
    const db = client.db(dbName); 
    
    return db.collection(collectionName);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
};

export const COLLECTIONS = {
  PRODUCTS: "products",
};