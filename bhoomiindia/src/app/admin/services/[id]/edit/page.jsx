"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Trash2, Plus } from "lucide-react";

export default function EditServicePage() {
   const { id } = useParams();
   const router = useRouter();

   const [file, setFile] = useState(null);
   const [loading, setLoading] = useState(true);

   const [form, setForm] = useState({
      name: "",
      subheading: "",
      category: "",
      image: "",
      features: [],
      products: [],
   });

   /* ---------------- FETCH EXISTING SERVICE ---------------- */
   useEffect(() => {
      fetch(`/api/services`)
         .then(res => res.json())
         .then(data => {
            const service = data.find(s => s._id === id);
            if (!service) {
               alert("Service not found");
               router.push("/admin/products");
               return;
            }
            setForm(service);
            setLoading(false);
         });
   }, [id, router]);

   /* ---------------- IMAGE UPLOAD ---------------- */
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

   /* ---------------- FORM HELPERS ---------------- */
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

   const removeFeature = (i) =>
      setForm({
         ...form,
         features: form.features.filter((_, index) => index !== i),
      });

   const addProduct = () =>
      setForm({
         ...form,
         products: [...form.products, { productName: "", use: "", solidContent: "", graphite: "" }],
      });

   const removeProduct = (i) =>
      setForm({
         ...form,
         products: form.products.filter((_, index) => index !== i),
      });

   /* ---------------- UPDATE SUBMIT ---------------- */
   const handleSubmit = async (e) => {
      e.preventDefault();

      let filename = form.image;

      if (file) {
         filename = await uploadImage(file);
      }

      const res = await fetch(`/api/services/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            ...form,
            image: filename,
            features: form.features.filter(f => f.trim()),
            products: form.products.filter(p => p.productName.trim()),
         }),
      });

      if (!res.ok) {
         alert("Update failed");
         return;
      }

      alert("Service updated successfully");
      router.push("/admin/view-services");
   };

   if (loading) return <p className="p-10">Loading service...</p>;

   /* ---------------- UI ---------------- */
   return (
      <div className="min-h-screen bg-slate-50">
         <main className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Edit Service</h1>

            <form onSubmit={handleSubmit} className="space-y-8">

               {/* BASIC INFO */}
               <section className="bg-white p-8 rounded-xl border">
                  <h2 className="font-semibold text-xl mb-4">Basic Info</h2>

                  <input
                     value={form.name}
                     onChange={e => setForm({ ...form, name: e.target.value })}
                     className="w-full mb-4 p-3 border rounded"
                     placeholder="Service Name"
                  />

                  <input
                     value={form.subheading}
                     onChange={e => setForm({ ...form, subheading: e.target.value })}
                     className="w-full mb-4 p-3 border rounded"
                     placeholder="Subheading"
                  />

                  <input
                     value={form.category}
                     onChange={e => setForm({ ...form, category: e.target.value })}
                     className="w-full mb-4 p-3 border rounded"
                     placeholder="Category"
                  />

                  {/* IMAGE */}
                  {form.image && (
                     <img
                        src={`/api/images/${form.image}`}
                        className="h-40 object-contain mb-4 border rounded"
                     />
                  )}

                  <input
                     type="file"
                     accept="image/*"
                     onChange={e => setFile(e.target.files[0])}
                     className="w-full p-3 border rounded"
                  />
               </section>

               {/* FEATURES */}
               <section className="bg-white p-8 rounded-xl border">
                  <h2 className="font-semibold text-xl mb-4">Features</h2>

                  {form.features.map((f, i) => (
                     <div key={i} className="flex gap-2 mb-2">
                        <input
                           value={f}
                           onChange={e => handleFeatureChange(i, e.target.value)}
                           className="flex-1 p-3 border rounded"
                        />
                        <button type="button" onClick={() => removeFeature(i)}>
                           <Trash2 />
                        </button>
                     </div>
                  ))}

                  <button type="button" onClick={addFeature} className="mt-2 flex gap-2">
                     <Plus /> Add Feature
                  </button>
               </section>

               {/* PRODUCTS */}
               <section className="bg-white p-8 rounded-xl border">
                  <h2 className="font-semibold text-xl mb-4">Products</h2>

                  {form.products.map((p, i) => (
                     <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                        {["productName", "use", "solidContent", "graphite"].map(field => (
                           <input
                              key={field}
                              value={p[field]}
                              onChange={e => handleProductChange(i, field, e.target.value)}
                              className="p-2 border rounded"
                              placeholder={field}
                           />
                        ))}
                        <button type="button" onClick={() => removeProduct(i)}>
                           <Trash2 />
                        </button>
                     </div>
                  ))}

                  <button type="button" onClick={addProduct} className="mt-2 flex gap-2">
                     <Plus /> Add Product
                  </button>
               </section>

               <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
                  Update Service
               </button>
            </form>
         </main>
      </div>
   );
}
