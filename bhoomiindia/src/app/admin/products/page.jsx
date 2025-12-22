"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminProducts() {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("/api/services")
         .then((res) => res.json())
         .then((data) => {
            setServices(data);
            setLoading(false);
         });
   }, []);

   const handleDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this service?")) return;

      const res = await fetch(`/api/services/${id}`, {
         method: "DELETE",
      });

      if (!res.ok) {
         alert("Failed to delete service");
         return;
      }

      setServices(prev => prev.filter(s => s._id !== id));
   };

   if (loading) {
      return <div className="p-8">Loading products...</div>;
   }

   return (
      <div className="p-8">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Created Products</h1>
            <Link
               href="/admin/dashboard"
               className="bg-blue-600 text-white px-4 py-2 rounded"
            >
               + Add New
            </Link>
         </div>

         {services.length === 0 ? (
            <p>No products created yet.</p>
         ) : (
            <div className="space-y-6">
               {services.map((service) => (
                  <div
                     key={service._id}
                     className="border rounded-lg p-6 bg-white shadow-sm"
                  >
                     <button
                        onClick={() => handleDelete(service._id)}
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                     >
                        Delete
                     </button>
                     <div>
                        <img src={service.image} alt={service.name} />
                     </div>
                     {/* Heading */}
                     <h2 className="text-xl font-semibold">
                        {service.name}
                     </h2>
                     <p className="text-gray-600 mb-3">
                        {service.subheading}
                     </p>

                     {/* Features */}
                     {service.features?.length > 0 && (
                        <div className="mb-4">
                           <h3 className="font-semibold mb-2">Key Features</h3>
                           <ul className="list-disc list-inside text-gray-700">
                              {service.features.map((f, i) => (
                                 <li key={i}>{f}</li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {/* Product Table */}
                     {service.products?.length > 0 && (
                        <div className="overflow-x-auto">
                           <table className="w-full border mt-4">
                              <thead className="bg-gray-100">
                                 <tr>
                                    <th className="border px-3 py-2 text-left">
                                       Product
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                       Use
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                       Solid Content %
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                       Graphite
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {service.products.map((p, i) => (
                                    <tr key={i}>
                                       <td className="border px-3 py-2">
                                          {p.productName}
                                       </td>
                                       <td className="border px-3 py-2">
                                          {p.use}
                                       </td>
                                       <td className="border px-3 py-2">
                                          {p.solidContent}
                                       </td>
                                       <td className="border px-3 py-2">
                                          {p.graphite}
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     )}

                     <p className="text-xs text-gray-400 mt-3">
                        Created: {new Date(service.createdAt).toLocaleString()}
                     </p>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
