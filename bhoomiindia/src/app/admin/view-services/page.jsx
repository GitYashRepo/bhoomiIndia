"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight, Plus, Trash2, Package } from "lucide-react"

export default function AdminProducts() {
   const [services, setServices] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetch("/api/services")
         .then((res) => res.json())
         .then((data) => {
            setServices(data)
            setLoading(false)
         })
   }, [])

   const handleDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this service?")) return
      const res = await fetch(`/api/services/${id}`, {
         method: "DELETE",
      })
      if (!res.ok) {
         alert("Failed to delete service")
         return
      }
      setServices((prev) => prev.filter((s) => s._id !== id))
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
         <div className="top-0 bg-card border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-6">
               <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                     <Package className="w-8 h-8 text-primary" />
                     <h1 className="text-3xl font-bold text-foreground">Created Services</h1>
                  </div>
                  <Link
                     href="/admin/dashboard"
                     className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                     <Plus className="w-5 h-5" />
                     Add New Product
                  </Link>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-6 py-12">
            {services.length === 0 ? (
               <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                     <Package className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">No products created yet</h3>
                  <p className="text-muted-foreground mb-6">Start by creating your first product service</p>
                  <Link
                     href="/admin/dashboard"
                     className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                     <Plus className="w-5 h-5" />
                     Create Product
                  </Link>
               </div>
            ) : (
               <div className="space-y-6">
                  {services.map((service) => (
                     <div
                        key={service._id}
                        className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                     >
                        <div className="relative h-48 bg-muted overflow-hidden">
                           {service.image ? (
                              <img
                                 src={`/api/images/${encodeURIComponent(service.image)}`}
                                 alt={service.name}
                                 className="w-full h-full object-contain bg-red-100"
                                 onError={(e) => {
                                    if (!e.currentTarget.dataset.fallback) {
                                       e.currentTarget.dataset.fallback = "true";
                                       e.currentTarget.src = "/product-placeholder.png";
                                       e.currentTarget.style.objectFit = "contain";
                                    }
                                 }}
                              />
                           ) : (
                              <div className="w-full h-full flex items-center justify-center bg-muted">
                                 <Package className="w-16 h-16 text-muted-foreground opacity-50" />
                              </div>
                           )}
                           <button
                              onClick={() => handleDelete(service._id)}
                              className="absolute top-4 right-4 inline-flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
                           >
                              <Trash2 className="w-4 h-4" />
                              Delete
                           </button>
                           <Link
                              href={`/admin/services/${service._id}/edit`}
                              className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm"
                           >
                              Edit
                           </Link>

                        </div>

                        <div className="p-8">
                           <h2 className="text-2xl font-bold text-foreground mb-2">{service.name}</h2>
                           <p className="text-muted-foreground text-lg mb-6">{service.subheading}</p>

                           {service.features?.length > 0 && (
                              <div className="mb-8 pb-8 border-b border-border">
                                 <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded"></span>
                                    Key Features
                                 </h3>
                                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.features.map((f, i) => (
                                       <li key={i} className="flex items-start gap-3 text-foreground">
                                          <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                          <span>{f}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           )}

                           {service.products?.length > 0 && (
                              <div className="mb-8">
                                 <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded"></span>
                                    Product Details
                                 </h3>
                                 <div className="overflow-x-auto rounded-lg border border-border">
                                    <table className="w-full">
                                       <thead>
                                          <tr className="bg-muted border-b border-border">
                                             <th className="px-6 py-4 text-left font-semibold text-foreground">Product</th>
                                             <th className="px-6 py-4 text-left font-semibold text-foreground">Use</th>
                                             <th className="px-6 py-4 text-left font-semibold text-foreground">Solid Content %</th>
                                             <th className="px-6 py-4 text-left font-semibold text-foreground">Graphite</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {service.products.map((p, i) => (
                                             <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                                                <td className="px-6 py-4 text-foreground font-medium">{p.productName}</td>
                                                <td className="px-6 py-4 text-foreground">{p.use}</td>
                                                <td className="px-6 py-4 text-foreground">{p.solidContent}</td>
                                                <td className="px-6 py-4 text-foreground">{p.graphite}</td>
                                             </tr>
                                          ))}
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           )}

                           <p className="text-xs text-muted-foreground">
                              Created: {new Date(service.createdAt).toLocaleString()}
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
