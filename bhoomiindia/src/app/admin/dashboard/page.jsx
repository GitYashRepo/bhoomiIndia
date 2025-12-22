"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export default function AdminDashboard() {
   const [form, setForm] = useState({
      name: "",
      subheading: "",
      category: "",
      image: "",
      features: [],
      products: [],
   });

   const handleFeatureChange = (i, value) => {
      const updated = [...form.features];
      updated[i] = value;
      setForm({ ...form, features: updated });
   };

   const handleProductChange = (i, field, value) => {
      const updated = [...form.products];
      updated[i][field] = value;
      setForm({ ...form, products: updated });
   };

   const addFeature = () =>
      setForm({ ...form, features: [...form.features, ""] });

   const addProduct = () =>
      setForm({
         ...form,
         products: [
            ...form.products,
            { productName: "", use: "", solidContent: "", graphite: "" },
         ],
      });
   const handleSubmit = async (e) => {
      e.preventDefault();

      // Basic required checks
      if (!form.name.trim() || !form.subheading.trim()) {
         alert("Heading and Subheading are required");
         return;
      }

      if (form.products.length === 0) {
         alert("Please add at least one product");
         return;
      }

      // Keep only valid products (productName required)
      const cleanForm = {
         ...form,
         features: form.features.filter(f => f.trim() !== ""),
         products: form.products.filter(p => p.productName.trim() !== ""),
      };

      if (cleanForm.products.length === 0) {
         alert("Each product must have a Product Name");
         return;
      }

      const res = await fetch("/api/services", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(cleanForm),
      });

      const data = await res.json();

      if (!res.ok) {
         alert(data.error || "Failed to create service");
         return;
      }

      alert("Service Created Successfully!");

      // Optional: reset form
      setForm({
         name: "",
         subheading: "",
         category: "",
         image: "",
         features: [],
         products: [],
      });
   };






   return (
      <div className="p-8 max-w-5xl mx-auto">
         <div className="flex justify-between mb-6 items-center">
            <h2 className="text-2xl font-bold">Create Product Service</h2>
            <button onClick={() => signOut({ callbackUrl: "/admin/login" })}>
               Logout
            </button>
         </div>

         <form onSubmit={handleSubmit} className="space-y-6">
            <input placeholder="Heading" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Subheading" onChange={(e) => setForm({ ...form, subheading: e.target.value })} />
            <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
            <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />

            {/* Features */}
            <div>
               <h3 className="font-semibold mb-2">Key Features</h3>
               {form.features.map((f, i) => (
                  <input
                     key={i}
                     placeholder="Feature"
                     value={f}
                     onChange={(e) => handleFeatureChange(i, e.target.value)}
                  />
               ))}
               <button type="button" onClick={addFeature}>+ Add Feature</button>
            </div>

            {/* Product Table */}
            <div>
               <h3 className="font-semibold mb-2">Products</h3>
               {form.products.map((p, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                     <input placeholder="Product" onChange={(e) => handleProductChange(i, "productName", e.target.value)} />
                     <input placeholder="Use" onChange={(e) => handleProductChange(i, "use", e.target.value)} />
                     <input placeholder="Solid Content %" onChange={(e) => handleProductChange(i, "solidContent", e.target.value)} />
                     <input placeholder="Graphite" onChange={(e) => handleProductChange(i, "graphite", e.target.value)} />
                  </div>
               ))}
               <button type="button" onClick={addProduct}>+ Add Product</button>
            </div>

            <button type="submit">Save Service</button>
         </form>
      </div>
   );
}
