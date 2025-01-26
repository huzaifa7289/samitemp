import React from 'react';
import Image from "next/image";

interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image1.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image2.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image3.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image4.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image5.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image6.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image7.png' },
  { name: 'Library Stool Chair', price: 20, imageUrl: '/images/image8.png' },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded p-2 relative">
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-1 rounded">New</div>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
            <div className="mt-2">
              <h3 className="text-sm font-medium">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


