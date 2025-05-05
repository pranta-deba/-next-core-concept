import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type TProductDetailsProps = {
  params: { id: string };
};

type Props = {
  params: Promise<{ id: string }>;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await getProduct(id);
  return {
    title: product.title,
    description: product.description,
  };
}



const ProductDetails = async ({ params }: TProductDetailsProps) => {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="text-center text-red-500 py-10">Product not found</div>
    );
  }
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center p-5">
      <div className="p-6 max-w-md w-full shadow-2xl bg-orange-700 text-white rounded-2xl space-y-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
          priority
          className="rounded-xl w-auto h-auto object-cover"
        />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-sm text-white/80">{product.description}</p>
        <p className="text-lg">Price: ${product.price}</p>
        <p className="text-sm">Brand: {product.brand}</p>
        <p className="text-sm">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
