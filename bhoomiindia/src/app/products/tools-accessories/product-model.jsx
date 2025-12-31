"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ProductModal({ isOpen, onClose, product }) {
   if (!product) return null

   const handleGetMoreInfo = () => {
      const whatsappNumber = "919430918956"
      const productName = encodeURIComponent(product.productName)
      const message = encodeURIComponent(`Hi, I'm interested in ${product.productName}. Can you provide more details?`)

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
   }

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="max-w-2xl">
            <DialogHeader>
               <DialogTitle className="text-2xl font-bold text-gray-900">{product.productName}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 max-h-[70vh] overflow-y-scroll">
               {/* Product Image */}
               <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                  {product.image && (
                     <Image
                        src={`/api/images/${encodeURIComponent(product.image)}`}
                        alt={product.productName}
                        fill
                        className="object-cover"
                     />
                  )}
               </div>

               {/* Product Details */}
               <div className="space-y-4">
                  {product.heading && (
                     <div>
                        <p className="text-sm font-semibold text-[#0d4f8b] uppercase tracking-wide mb-2">{product.heading}</p>
                     </div>
                  )}

                  {product.description && (
                     <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{product.description}</p>
                     </div>
                  )}
               </div>

               {/* Get More Info Button */}
               <Button
                  onClick={handleGetMoreInfo}
                  className="w-full bg-[#0d4f8b] hover:bg-[#0a3a66] text-white py-6 text-lg font-semibold rounded-lg transition-colors"
               >
                  Get More Info on WhatsApp
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   )
}
