import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
       <div className='h-[63px] lg:h-[79px] '>
               <Navbar/>
             </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}