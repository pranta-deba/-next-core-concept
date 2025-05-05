import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

export const metadata: Metadata = {
  title: "All Product",
  description: "Loading JSON placeholder data",
};

const ProductsPage = async () => {
  const { products } = await getProducts();

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((ele: TProduct) => (
        <div
          key={ele.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <Image
            src={ele.thumbnail}
            alt={ele.title}
            className="w-full h-48 object-cover"
            width={400}
            height={400}
            priority
          />
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-bold text-gray-800 truncate">
              {ele.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-2">
              {ele.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span className="font-semibold">${ele.price.toFixed(2)}</span>
              <span className="flex items-center gap-1">
                ⭐ {ele.rating.toFixed(1)}
              </span>
            </div>
            <Link
              href={`/products/${ele.id}`}
              className="block mt-2 text-center bg-orange-700 hover:bg-orange-700 text-white py-1.5 rounded-lg font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export default ProductsPage;
