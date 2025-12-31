import dbConnect from "@/lib/mongodb"
import Product from "@/models/Product"
import { Wrench } from "lucide-react"
import { DieCastingToolsClient } from "./client"

// ✅ ISR
export const revalidate = 60

// 🔹 Fetch products directly from DB
async function getDieCastingTools() {
   await dbConnect()

   const products = await Product.find({
      categories: "Die Casting Tools",
   }).lean()

   return JSON.parse(JSON.stringify(products))
}

export default async function DieCastingToolsPage() {
   const products = await getDieCastingTools()

   if (!products || products.length === 0) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">No products found</p>
         </div>
      )
   }

   return (
      <div className="min-h-screen flex flex-col bg-gray-50">
         <section className="bg-gradient-to-r from-[#0d4f8b] to-[#1e5a9e] text-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
               <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Wrench className="w-8 h-8 text-white" />
                  </div>
               </div>
               <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pretty">Die Casting Tools</h1>
               <p className="text-lg md:text-xl text-blue-50 max-w-2xl">
                  Premium precision-engineered tools designed for high-performance die casting operations. Engineered for
                  durability and excellence.
               </p>
            </div>
         </section>

         <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
               <DieCastingToolsClient products={products} />
            </div>
         </section>
      </div>
   )
}
