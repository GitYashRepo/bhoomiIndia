import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { Droplet } from "lucide-react";

// ✅ ISR
export const revalidate = 60;

// 🔹 Fetch ONE service directly from DB
async function getOilBasedGraphiteService() {
   await dbConnect();

   return Service.findOne({
      name: "Oil Based Forging Lubricants",
   }).lean();
}

export default async function ProductsPage() {
   const service = await getOilBasedGraphiteService();

   if (!service) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl">Service not found</p>
         </div>
      );
   }

   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20">
            <div className="container mx-auto px-4 max-w-4xl">
               <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {service.name}
               </h1>
               <p className="text-xl md:text-2xl text-blue-100">
                  {service.subheading}
               </p>
            </div>
         </section>

         {/* Content */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">

               {/* Heading */}
               <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center">
                     <Droplet className="w-7 h-7 text-[#0d4f8b]" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                     {service.name}
                  </h2>
               </div>

               {/* Features */}
               {service.features?.length > 0 && (
                  <div className="bg-blue-50 p-6 rounded-xl mb-10">
                     <h3 className="text-xl font-bold mb-4">Key Features</h3>
                     <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                        {service.features.map((feature, index) => (
                           <li key={index} className="flex gap-2">
                              <span className="font-bold text-[#0d4f8b]">✓</span>
                              {feature}
                           </li>
                        ))}
                     </ul>
                  </div>
               )}

               {/* Products Table */}
               {service.products?.length > 0 && (() => {
                  const hasUse = service.products.some(p => p.use);
                  const hasSolid = service.products.some(p => p.solidContent);
                  const hasGraphite = service.products.some(p => p.graphite);

                  return (
                     <div className="overflow-x-auto">
                        <table className="w-full bg-white shadow-sm rounded-lg">
                           <thead className="bg-[#0d4f8b] text-white">
                              <tr>
                                 <th className="px-6 py-4 text-left">Product</th>
                                 {hasUse && <th className="px-6 py-4 text-left">Use</th>}
                                 {hasSolid && <th className="px-6 py-4 text-left">Solid Content %</th>}
                                 {hasGraphite && <th className="px-6 py-4 text-left">Graphite</th>}
                              </tr>
                           </thead>

                           <tbody>
                              {service.products.map((p, i) => (
                                 <tr key={i} className="border-t">
                                    <td className="px-6 py-4 font-semibold">
                                       {p.productName}
                                    </td>

                                    {hasUse && (
                                       <td className="px-6 py-4">
                                          {p.use || "-"}
                                       </td>
                                    )}

                                    {hasSolid && (
                                       <td className="px-6 py-4">
                                          {p.solidContent || "-"}
                                       </td>
                                    )}

                                    {hasGraphite && (
                                       <td className="px-6 py-4">
                                          {p.graphite || "-"}
                                       </td>
                                    )}
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  );
               })()}
            </div>
         </section>
      </div>
   );
}
