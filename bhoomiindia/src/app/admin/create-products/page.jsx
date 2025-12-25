"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Trash2 } from "lucide-react"

export default function AdminCreateProducts() {
   const [file, setFile] = useState(null);
   const [form, setForm] = useState({
      productName: "",
      image: "",
      heading: "",
      description: "",
   })

   const [isSubmitting, setIsSubmitting] = useState(false)


   // Function to upload image
   async function uploadImage(file) {
      const fd = new FormData();
      fd.append("image", file);

      const res = await fetch("/api/upload", {
         method: "POST",
         body: fd,
      });

      const data = await res.json();
      return data.filename;
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (!form.productName.trim()) {
         alert("Product Name is required")
         return
      }

      setIsSubmitting(true)

      try {
         let filename = form.image; // fallback if URL already present

         if (file) {
            filename = await uploadImage(file);
         }
         const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, image: filename }),
         })

         const data = await res.json();
         if (!res.ok) return alert(data.error || "Failed to create product");

         alert("Product Created Successfully!")
         setForm({
            productName: "",
            image: "",
            heading: "",
            description: "",
         })
         setFile(null);
      } finally {
         setIsSubmitting(false)
      }
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50">
         {/* Header */}
         <header className="bg-white border-b border-slate-200 top-0 z-0">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
               <div>
                  <h1 className="text-3xl font-bold text-slate-900">Products</h1>
                  <p className="text-sm text-slate-500 mt-1">
                     Create and manage your products
                  </p>
               </div>
            </div>
         </header>

         {/* Main */}
         <main className="max-w-5xl mx-auto px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-8">
               <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">
                     Product Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Product Name */}
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                           Product Name *
                        </label>
                        <input
                           type="text"
                           placeholder="Enter product name"
                           value={form.productName}
                           onChange={(e) =>
                              setForm({ ...form, productName: e.target.value })
                           }
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                     </div>

                     {/* Image */}
                     <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                           Image *
                        </label>
                        <input
                           type="file"
                           accept="image/*"
                           onChange={(e) => setFile(e.target.files[0])}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                     </div>


                     {/* Heading */}
                     <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                           Heading
                        </label>
                        <input
                           type="text"
                           placeholder="Product heading"
                           value={form.heading}
                           onChange={(e) =>
                              setForm({ ...form, heading: e.target.value })
                           }
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                     </div>

                     {/* Description */}
                     <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                           Description
                        </label>
                        <textarea
                           rows={5}
                           placeholder="Product description"
                           value={form.description}
                           onChange={(e) =>
                              setForm({ ...form, description: e.target.value })
                           }
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                     </div>
                  </div>
               </section>

               {/* Actions */}
               <div className="flex justify-end gap-4">
                  <button
                     type="button"
                     onClick={() =>
                        setForm({
                           productName: "",
                           image: "",
                           heading: "",
                           description: "",
                        })
                     }
                     className="px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold"
                  >
                     Clear Form
                  </button>

                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold shadow-md"
                  >
                     {isSubmitting ? "Saving..." : "Save Product"}
                  </button>
               </div>
            </form>
         </main>
      </div>
   )
}
