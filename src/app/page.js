import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import AllProducts from "./components/home/AllProducts";

export default async function Home() {
  const productCollection = await dbConnect(COLLECTIONS.PRODUCTS);
  const data = await productCollection.find({}).toArray();
  const products = JSON.parse(JSON.stringify(data));

  return (
    <main>
      <AllProducts />
    </main>
  );
}