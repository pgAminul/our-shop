import FlashDeals from "./Components/FlashDeals/FlashDeals";
import Header from "./Components/Header/Header";
import HomeProducts from "./Components/HomeProducts/HomeProducts";
import Category from "./Components/CategoryHome/Category"
import BestProductsHome from "./Components/BestProducts/BestProductsHome";
import NewArrival from "./Components/NewArrival/NewArrivalDepthCarousel";
export default function Home() {
  return (
    <div>
      <div className="min-h-[640px]">
<Header/>
      </div>
      <Category/>
      <HomeProducts/>
      <BestProductsHome/>
      <FlashDeals/>
    <div className=''>
      <NewArrival/>
    </div>
    </div>
  )
}