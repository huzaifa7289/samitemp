"use client";
// app/products/[id]/page.tsx
import { useParams } from "next/navigation";
import { products } from "../../lib/productData"; // Import the product data
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { id } = useParams(); // Get the 'id' from the URL params

  // Find the product that matches the 'id'
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found!</div>; // In case the product is not found
  }

  // Slice the products array to show only the first 5 products
  const displayedProducts = products.slice(0, 5);

  return (
    <div className="sm:px-6 lg:px-12 py-8 mb-48">
      <div className="max-w-7xl mx-20">
        {/* Dynamic Product Single Details */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Product Image */}
          <Image
            width={500}
            height={500}
            alt={product.name}
            src={product.imagelink}
            className="w-full lg:w-[480px] h-auto object-contain cursor-pointer hover:border-2"
          />

          {/* Product Details */}
          <div className="flex-1 space-y-6">
            {/* Product Name and Price */}
            <div className="space-y-4">
              <h1 className="text-[32px] lg:text-[50px] font-bold break-words">
                {product.name}
              </h1>
              <div className="bg-[#029fae] hover:border-2 w-max h-[44px] flex items-center justify-center rounded-3xl px-6">
                <span className="text-[20px] text-white">{product.amount}.00 USD</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-300 pt-4">
              <h2 className="text-[18px]">{product.detail}</h2>
            </div>

            {/* Add to Cart Button */}
            <div className="bg-[#029fae] hover:border-2 w-full lg:w-[212px] h-[63px] flex items-center justify-center rounded-lg">
              <Link href={"/"}>
                <span className="text-[20px] text-white">Add To Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-36">
          <div className="flex justify-between items-center">
            <h1 className="text-[#272343] text-[24px] lg:text-[32px] font-semibold">
              Featured Products
            </h1>
            <Link href="/product" className="text-[18px] hover:underline">
              View All
            </Link>
          </div>

          {/* Featured Products Grid */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {displayedProducts.map((product) => (
              <li key={product.id} className="flex flex-col items-center">
                {/* Featured Product Image */}
                <Link href={`/product/${product.id}`}>
                  <Image
                    width={500}
                    height={500}
                    alt={product.name}
                    src={product.imagelink}
                    className=" object-contain hover:border-2"
                  />
                </Link>
                {/* Product Name and Price */}
                <div className="flex justify-between items-center w-full mt-2">
                  <h1 className="text-[#272343] text-[14px]">{product.name}</h1>
                  <span className="font-bold text-[14px]">${product.amount}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
