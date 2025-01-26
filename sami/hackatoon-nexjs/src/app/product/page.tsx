import Product from "@/components/Product"
import Subscribe from "@/components/Subscribe"



const Page = () => {
  return (
        <div className="w-full px-4 sm:px-8 lg:px-32 py-8 mb-48">
          <h1 className='text-[#272343] text-center text-[32px] font-inter mb-8'>Our Products</h1>
            <Product/>
            <Subscribe/>

        </div>
  )
}

export default Page