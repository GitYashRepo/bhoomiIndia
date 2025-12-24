import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { Droplet, Beaker, Package, Settings } from "lucide-react";

// ✅ ISR – cached & instant
export const revalidate = 60;

async function getServices() {
   await dbConnect();
   return Service.find().lean();
}

export default async function ProductsPage() {
   const services = await getServices(); // SERVER FETCH

   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     Comprehensive range of metal forming lubricants, die casting solutions,
                     and industrial equipment for all your manufacturing needs.
                  </p>
               </div>
            </div>
         </section>

         {/* Prilube Products Section */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               {services.map((service) => (
                  <div key={service._id} className="mb-20">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center">
                           <Droplet className="w-7 h-7 text-[#0d4f8b]" />
                        </div>
                        <div>
                           <h3 className="text-3xl font-bold text-gray-900">{service.name}</h3>
                           <p className="text-gray-600">{service.subheading}</p>
                        </div>
                     </div>

                     <div className="bg-blue-50 p-6 rounded-xl mb-8">
                        <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                           {service.features.map((f, i) => (
                              <li key={i} className="flex gap-2">
                                 <span className="font-bold text-[#0d4f8b]">✓</span>
                                 {f}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {service.products?.length > 0 && (
                        <div className="overflow-x-auto">
                           <table className="w-full bg-white shadow-sm rounded-lg">
                              <thead className="bg-[#0d4f8b] text-white">
                                 <tr>
                                    <th className="px-6 py-4 text-left">Product</th>
                                    <th className="px-6 py-4 text-left">Use</th>
                                    <th className="px-6 py-4 text-left">Solid Content %</th>
                                    <th className="px-6 py-4 text-left">Graphite</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {service.products.map((p, i) => (
                                    <tr key={i} className="border-t">
                                       <td className="px-6 py-4 font-semibold">{p.productName}</td>
                                       <td className="px-6 py-4">{p.use}</td>
                                       <td className="px-6 py-4">{p.solidContent}</td>
                                       <td className="px-6 py-4">{p.graphite}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     )}
                  </div>
               ))}

               {/* Static sections BELOW stay untouched */}
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-green-50 p-8 rounded-xl">
                     <Beaker />
                     <h3 className="text-xl font-bold mt-4">Cleaners</h3>
                  </div>

                  <div className="bg-purple-50 p-8 rounded-xl">
                     <Package />
                     <h3 className="text-xl font-bold mt-4">Dry Lubricants</h3>
                  </div>

                  <div className="bg-red-50 p-8 rounded-xl">
                     <Settings />
                     <h3 className="text-xl font-bold mt-4">Equipment</h3>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="bg-[#0d4f8b] text-white py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <a href="/contact" className="bg-white text-[#0d4f8b] px-8 py-4 rounded-lg">
               Get in Touch
            </a>
         </section>
      </div>
   );
}
