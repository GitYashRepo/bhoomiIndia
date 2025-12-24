"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Trash2, Plus } from "lucide-react"

export default function AdminDashboard() {
   const [form, setForm] = useState({
      name: "",
      subheading: "",
      category: "",
      image: "",
      features: [],
      products: [],
   })

   const [isSubmitting, setIsSubmitting] = useState(false)

   const handleFeatureChange = (i, value) => {
      const updated = [...form.features]
      updated[i] = value
      setForm({ ...form, features: updated })
   }

   const handleProductChange = (i, field, value) => {
      const updated = [...form.products]
      updated[i][field] = value
      setForm({ ...form, products: updated })
   }

   const addFeature = () => setForm({ ...form, features: [...form.features, ""] })

   const removeFeature = (i) => {
      const updated = form.features.filter((_, index) => index !== i)
      setForm({ ...form, features: updated })
   }

   const addProduct = () =>
      setForm({
         ...form,
         products: [...form.products, { productName: "", use: "", solidContent: "", graphite: "" }],
      })

   const removeProduct = (i) => {
      const updated = form.products.filter((_, index) => index !== i)
      setForm({ ...form, products: updated })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (!form.name.trim() || !form.subheading.trim()) {
         alert("Heading and Subheading are required")
         return
      }

      if (form.products.length === 0) {
         alert("Please add at least one product")
         return
      }

      const cleanForm = {
         ...form,
         features: form.features.filter((f) => f.trim() !== ""),
         products: form.products.filter((p) => p.productName.trim() !== ""),
      }

      if (cleanForm.products.length === 0) {
         alert("Each product must have a Product Name")
         return
      }

      setIsSubmitting(true)

      try {
         const res = await fetch("/api/services", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(cleanForm),
         })

         const data = await res.json()

         if (!res.ok) {
            alert(data.error || "Failed to create service")
            return
         }

         alert("Service Created Successfully!")

         setForm({
            name: "",
            subheading: "",
            category: "",
            image: "",
            features: [],
            products: [],
         })
      } finally {
         setIsSubmitting(false)
      }
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50">
         <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
               <div>
                  <h1 className="text-3xl font-bold text-slate-900">Product Services</h1>
                  <p className="text-sm text-slate-500 mt-1">Create and manage your service offerings</p>
               </div>
               <button
                  onClick={() => signOut({ callbackUrl: "/admin/login" })}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors duration-200"
               >
                  Logout
               </button>
            </div>
         </header>

         <main className="max-w-6xl mx-auto px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-8">
               <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow duration-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                     <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                     </span>
                     Basic Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Service Heading *</label>
                        <input
                           type="text"
                           placeholder="Enter service heading"
                           value={form.name}
                           onChange={(e) => setForm({ ...form, name: e.target.value })}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Subheading *</label>
                        <input
                           type="text"
                           placeholder="Enter service subheading"
                           value={form.subheading}
                           onChange={(e) => setForm({ ...form, subheading: e.target.value })}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Category</label>
                        <input
                           type="text"
                           placeholder="Enter category"
                           value={form.category}
                           onChange={(e) => setForm({ ...form, category: e.target.value })}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">Image URL</label>
                        <input
                           type="url"
                           placeholder="https://example.com/image.jpg"
                           value={form.image}
                           onChange={(e) => setForm({ ...form, image: e.target.value })}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900"
                        />
                     </div>
                  </div>
               </section>

               <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow duration-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                     <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        2
                     </span>
                     Key Features
                  </h2>
                  <div className="space-y-3">
                     {form.features.map((f, i) => (
                        <div key={i} className="flex gap-3 items-start">
                           <input
                              type="text"
                              placeholder={`Feature ${i + 1}`}
                              value={f}
                              onChange={(e) => handleFeatureChange(i, e.target.value)}
                              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900"
                           />
                           <button
                              type="button"
                              onClick={() => removeFeature(i)}
                              className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 mt-0"
                           >
                              <Trash2 size={18} />
                           </button>
                        </div>
                     ))}
                  </div>
                  <button
                     type="button"
                     onClick={addFeature}
                     className="mt-4 flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors duration-200"
                  >
                     <Plus size={18} />
                     Add Feature
                  </button>
               </section>

               <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow duration-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                     <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        3
                     </span>
                     Products *
                  </h2>
                  <div className="space-y-4">
                     {form.products.length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg">
                           <p className="text-slate-500 mb-3">No products added yet</p>
                           <p className="text-sm text-slate-400">Click "Add Product" to get started</p>
                        </div>
                     ) : (
                        form.products.map((p, i) => (
                           <div
                              key={i}
                              className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
                           >
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                                 <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-2">Product Name *</label>
                                    <input
                                       type="text"
                                       placeholder="Product name"
                                       value={p.productName}
                                       onChange={(e) => handleProductChange(i, "productName", e.target.value)}
                                       className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900 text-sm"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-2">Use</label>
                                    <input
                                       type="text"
                                       placeholder="Usage"
                                       value={p.use}
                                       onChange={(e) => handleProductChange(i, "use", e.target.value)}
                                       className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900 text-sm"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-2">Solid Content %</label>
                                    <input
                                       type="text"
                                       placeholder="Percentage"
                                       value={p.solidContent}
                                       onChange={(e) => handleProductChange(i, "solidContent", e.target.value)}
                                       className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900 text-sm"
                                    />
                                 </div>
                                 <div className="flex items-end gap-2">
                                    <div className="flex-1">
                                       <label className="block text-xs font-semibold text-slate-600 mb-2">Graphite</label>
                                       <input
                                          type="text"
                                          placeholder="Graphite"
                                          value={p.graphite}
                                          onChange={(e) => handleProductChange(i, "graphite", e.target.value)}
                                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 text-slate-900 text-sm"
                                       />
                                    </div>
                                    <button
                                       type="button"
                                       onClick={() => removeProduct(i)}
                                       className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                    >
                                       <Trash2 size={18} />
                                    </button>
                                 </div>
                              </div>
                           </div>
                        ))
                     )}
                  </div>
                  <button
                     type="button"
                     onClick={addProduct}
                     className="mt-4 flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors duration-200"
                  >
                     <Plus size={18} />
                     Add Product
                  </button>
               </section>

               <div className="flex justify-end gap-4">
                  <button
                     type="button"
                     onClick={() =>
                        setForm({
                           name: "",
                           subheading: "",
                           category: "",
                           image: "",
                           features: [],
                           products: [],
                        })
                     }
                     className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg font-semibold transition-colors duration-200"
                  >
                     Clear Form
                  </button>
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                     {isSubmitting ? "Saving..." : "Save Service"}
                  </button>
               </div>
            </form>
         </main>
      </div>
   )
}
