import Image from "next/image";
import React from "react";

interface Props {
  params: { id: string };
}

export const getProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

const ProductDetails = async ({ params }: Props) => {
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
