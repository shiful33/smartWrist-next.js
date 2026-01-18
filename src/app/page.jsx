
import Image from "next/image";
import { dbConnect, COLLECTIONS } from "@/lib/dbConnect";
import Banner from "./components/layouts/Banner";
import Brand from "./components/Brand";
import AllProducts from "./components/home/AllProducts";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";
import Testimonial from "./components/Testimonial";
import FAQSection from "./components/FAQSection";
import Newsletter from "./components/Newsletter";

export default async function Home() {
  let products = [];
  
  try {
    const productCollection = await dbConnect(COLLECTIONS.PRODUCTS);
    const data = await productCollection.find({}).toArray();
    products = JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Home Page DB Error:", error);
  }

  return (
    <main>
      <section>
        <Banner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <AllProducts products={products} />
      </section>

      <section>
        <Features />
      </section>

      <section>
        <AboutSection />
      </section>

      <section>
        <Testimonial />
      </section>
       
      <section>
        <FAQSection />
      </section>

      <section>
        <Newsletter />
      </section>
    </main>
  );
}
