import ViewDetails from "@/app/components/ViewDetails";
import { Suspense } from "react";
import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function Page(props) {
  const params = await props.params;
  const id = params.id;

  if (!id || !ObjectId.isValid(id)) {
    return <div className="py-20 text-center">Invalid Product ID</div>;
  }

  let product = null;
  try {
    const productCollection = await dbConnect(COLLECTIONS.PRODUCTS);
    const data = await productCollection.findOne({ _id: new ObjectId(id) });

    if (data) {
      product = JSON.parse(JSON.stringify(data));
    }
  } catch (error) {
    console.error("Database Error in Details Page:", error);
    return (
      <div className="flex items-center justify-center min-h-screen font-bold text-red-500">
        Database connection failed! Please check your connection.
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-xl font-bold text-center">
        Product Not Found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
          </div>
        }
      >
        <ViewDetails product={product} />
      </Suspense>
    </div>
  );
}
