"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, Trash2, Package } from "lucide-react"

export default function ViewProducts() {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetch("/api/products")
         .then((res) => res.json())
         .then((data) => {
            setProducts(data || [])
            setLoading(false)
         })
         .catch(() => setLoading(false))
   }, [])

   const handleDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this product?")) return

      const res = await fetch(`/api/products/${id}`, {
         method: "DELETE",
      })

      if (!res.ok) {
         alert("Failed to delete product")
         return
      }

      setProducts((prev) => prev.filter((p) => p._id !== id))
   }

   if (loading) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
               <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
               <p className="text-muted-foreground">Loading products...</p>
            </div>
         </div>
      )
   }

   return (
      <div className="min-h-screen bg-background">
         {/* Header */}
         <div className="bg-card border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  <h1 className="text-3xl font-bold">Created Products</h1>
               </div>

               <Link
                  href="/admin/create-products"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90"
               >
                  <Plus className="w-5 h-5" />
                  Add New Product
               </Link>
            </div>
         </div>

         {/* Content */}
         <div className="max-w-7xl mx-auto px-6 py-12">
            {products.length === 0 ? (
               <div className="text-center py-16">
                  <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-muted mb-4">
                     <Package className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                     No products created yet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                     Start by creating your first product
                  </p>
                  <Link
                     href="/admin/dashboard"
                     className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
                  >
                     <Plus className="w-5 h-5" />
                     Create Product
                  </Link>
               </div>
            ) : (
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                     <div
                        key={product._id}
                        className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                     >
                        {/* Image */}
                        <div className="relative h-48 bg-muted">
                           {product.image ? (
                              <img
                                 src={`/api/images/${encodeURIComponent(product.image)}`}
                                 alt={product.productName}
                                 className="w-full h-full object-cover"
                                 onError={(e) => {
                                    if (!e.currentTarget.dataset.fallback) {
                                       e.currentTarget.dataset.fallback = "true";
                                       e.currentTarget.src = "/product-placeholder.png";
                                       e.currentTarget.style.objectFit = "contain";
                                    }
                                 }}
                              />
                           ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                 <Package className="w-16 h-16 text-muted-foreground opacity-50" />
                              </div>
                           )}

                           <button
                              onClick={() => handleDelete(product._id)}
                              className="absolute top-4 right-4 bg-destructive text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 hover:cursor-pointer"
                           >
                              <Trash2 className="w-4 h-4" />
                              Delete
                           </button>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                           <h2 className="text-xl font-bold mb-2">
                              {product.productName}
                           </h2>

                           {product.heading && (
                              <p className="text-primary font-medium mb-2">
                                 {product.heading}
                              </p>
                           )}

                           {product.description && (
                              <p className="text-muted-foreground mb-4">
                                 {product.description}
                              </p>
                           )}

                           <p className="text-xs text-muted-foreground">
                              Created:{" "}
                              {new Date(product.createdAt).toLocaleString()}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}
