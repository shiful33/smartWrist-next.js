import Image from "next/image";
import Banner from "./components/layouts/Banner";
import Brand from "./components/Brand";
import AllProducts from "./components/home/AllProducts";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <AllProducts />
      </section>

      <section>
        
      </section>

      <section>
        
      </section>

      <section>
        
      </section>
    </div>
  );
}
