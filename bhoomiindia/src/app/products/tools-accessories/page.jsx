import dbConnect from "@/lib/mongodb"
import Product from "@/models/Product"
import { DoorClosed as ToolCase } from "lucide-react"
import { ToolsAndAccessoriesClient } from "./client"

// ✅ ISR
export const revalidate = 60

// 🔹 Fetch products directly from DB
async function getToolsAndAccessories() {
   await dbConnect()

   return Product.find({
      categories: "Tools And Accessories",
   }).lean()
}

export default async function ToolsAndAccessoriesPage() {
   const products = await getToolsAndAccessories()

   const serializedProducts = JSON.parse(JSON.stringify(products || []))

   if (!serializedProducts || serializedProducts.length === 0) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">No products found</p>
         </div>
      )
   }

   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20">
            <div className="container mx-auto px-4 max-w-5xl">
               <h1 className="text-5xl font-bold mb-4">Tools & Accessories</h1>
               <p className="text-xl text-blue-100">Reliable tools and accessories for industrial applications</p>
            </div>
         </section>

         {/* Content */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               {/* Heading */}
               <div className="flex items-center gap-4 mb-10">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center">
                     <ToolCase className="w-7 h-7 text-[#0d4f8b]" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
               </div>

               <ToolsAndAccessoriesClient products={serializedProducts} />
            </div>
         </section>
      </div>
   )
}
