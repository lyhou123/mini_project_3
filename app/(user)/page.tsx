import Image from "next/image";
import HeroSectionComponent from "@/components/hero/HeroSectionComponent";
import '@/app/globals.css'
import CarouselComponent from "@/components/hero/courolsel";
import Products from "@/components/product/products";
export default function Home() {
  return (
    <main>
      <HeroSectionComponent/>
        <CarouselComponent/>
        <section>
          <p className="text-xl font-bold container mx-auto my-9">Popular Products</p>
          <Products/>
        </section>
  
    </main>
  );
}
