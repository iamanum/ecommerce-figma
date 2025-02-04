import EditorsPics from "./components/editors-pics";
import FeatureProducts from "./components/feature-products";
import FeaturesPosts from "./components/features-posts";
import Hero from "./components/hero";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductCards from "./components/product/page"


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <EditorsPics />
    <FeatureProducts />
    <ProductCards/>
    <FeaturesPosts /> 
    <Footer />
    </>
  );
}