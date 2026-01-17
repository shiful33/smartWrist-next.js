import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME; 

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 10000, 
  socketTimeoutMS: 45000,
});

export const dbConnect = (cname) => {
    return client.db(dbname).collection(cname);
};

export const COLLECTIONS = {
    PRODUCTS: "products",
};

export default client;