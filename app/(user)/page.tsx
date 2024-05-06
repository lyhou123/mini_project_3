
import HeroSectionComponent from "@/components/hero/HeroSectionComponent";
import '@/app/globals.css'
import CarouselComponent from "@/components/hero/courolsel";
import Products from "@/components/product/products";
import SectionComponent from "@/components/section/section";
import FeatureProduct from "@/components/productFeature/featureProduct";
export default function Home() {
  return (
    <main>
      <HeroSectionComponent/>
	   <SectionComponent/>
        <CarouselComponent/>
        <section>
          <p className="text-xl font-bold container mx-auto my-9">Popular Products</p>
          <Products/>
        </section>
        <section>
        <FeatureProduct/>
        </section>
		</main>
		  );
		}
