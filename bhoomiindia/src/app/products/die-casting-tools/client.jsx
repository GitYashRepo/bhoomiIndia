"use client"

import Image from "next/image"
import { useState } from "react"
import { ProductModal } from "./product-model"

export function DieCastingToolsClient({ products }) {
   const [selectedProduct, setSelectedProduct] = useState(null)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleProductClick = (product) => {
      setSelectedProduct(product)
      setIsModalOpen(true)
   }

   return (
      <>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
               <div
                  key={product._id}
                  onClick={() => handleProductClick(product)}
                  className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
               >
                  <div className="relative overflow-hidden bg-gray-100 h-40">
                     {product.image && (
                        <Image
                           src={`/api/images/${encodeURIComponent(product.image)}`}
                           alt={product.productName}
                           width={300}
                           height={200}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     )}
                  </div>

                  <div className="p-3">
                     <h3 className="text-md font-semibold text-gray-900 line-clamp-2 group-hover:text-[#0d4f8b] transition-colors">
                        {product.productName}
                     </h3>
                     <p className="text-sm font-normal text-gray-900 line-clamp-2 group-hover:text-[#0d4f8b] transition-colors">
                        {product.description}
                     </p>
                     <p className="pt-4 hover:text-blue-600 transition-all">View Details</p>
                  </div>
               </div>
            ))}
         </div>

         <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
      </>
   )
}
