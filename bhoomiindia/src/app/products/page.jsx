
import { Droplet, Flame, Beaker, Package, Settings } from "lucide-react"

export default function ProductsPage() {
   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     Comprehensive range of metal forming lubricants, die casting solutions, and industrial equipment for all
                     your manufacturing needs.
                  </p>
               </div>
            </div>
         </section>

         {/* Prilube Products Section */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PRILUBE HOTFORGE Series</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Specially developed series of high-quality forging lubricants and coatings
                  </p>
               </div>

               {/* Water Based Graphite Lubricants */}
               <div className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center">
                        <Droplet className="w-7 h-7 text-[#0d4f8b]" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-gray-900">Water Based Graphite Forging Lubricants</h3>
                        <p className="text-gray-600">
                           Excellent lubricating and releasing properties with special stabilizer and binding system
                        </p>
                     </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl mb-8">
                     <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                     <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-[#0d4f8b] font-bold">✓</span>
                           Higher Lubricity
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-[#0d4f8b] font-bold">✓</span>
                           Higher Die Life
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-[#0d4f8b] font-bold">✓</span>
                           Low Consumption
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-[#0d4f8b] font-bold">✓</span>
                           Well Researched High Quality Micronized Graphite
                        </li>
                     </ul>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                        <thead className="bg-[#0d4f8b] text-white">
                           <tr>
                              <th className="px-6 py-4 text-left font-semibold">Product</th>
                              <th className="px-6 py-4 text-left font-semibold">Use</th>
                              <th className="px-6 py-4 text-left font-semibold">Solid Content %</th>
                              <th className="px-6 py-4 text-left font-semibold">Graphite</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 2010</td>
                              <td className="px-6 py-4 text-gray-700">Normal Forgings</td>
                              <td className="px-6 py-4 text-gray-700">29-30%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 5-6 Mic</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 2020</td>
                              <td className="px-6 py-4 text-gray-700">Extrusion & Normal Forgings</td>
                              <td className="px-6 py-4 text-gray-700">29-30%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 3-4 Mic</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 2020E</td>
                              <td className="px-6 py-4 text-gray-700">Extrusions</td>
                              <td className="px-6 py-4 text-gray-700">29-30%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 3-4 Mic</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 2030</td>
                              <td className="px-6 py-4 text-gray-700">Precision Forgings</td>
                              <td className="px-6 py-4 text-gray-700">27-28%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 1-2 Mic</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>

               {/* Water Based Synthetic Lubricants */}
               <div className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center">
                        <Flame className="w-7 h-7 text-indigo-600" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-gray-900">Water Based Synthetic Forging Lubricants</h3>
                        <p className="text-gray-600">
                           Pigmented and non-pigmented synthetic lubricants with excellent film formation
                        </p>
                     </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                     <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                     <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-indigo-600 font-bold">✓</span>
                           Clean Work Environment
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-indigo-600 font-bold">✓</span>
                           Higher Dilution Ratios
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-indigo-600 font-bold">✓</span>
                           No Fumes or Gases Generation
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-indigo-600 font-bold">✓</span>
                           Different Grades for Different Applications
                        </li>
                     </ul>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                        <thead className="bg-indigo-600 text-white">
                           <tr>
                              <th className="px-6 py-4 text-left font-semibold">Product</th>
                              <th className="px-6 py-4 text-left font-semibold">Use</th>
                              <th className="px-6 py-4 text-left font-semibold">Solid Content %</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 1010</td>
                              <td className="px-6 py-4 text-gray-700">Normal Forgings</td>
                              <td className="px-6 py-4 text-gray-700">29-30%</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 1020</td>
                              <td className="px-6 py-4 text-gray-700">Extrusion & Normal Forgings</td>
                              <td className="px-6 py-4 text-gray-700">32-33%</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE SST36</td>
                              <td className="px-6 py-4 text-gray-700">Precision Forging</td>
                              <td className="px-6 py-4 text-gray-700">34-35%</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>

               {/* Oil Based Lubricants */}
               <div className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center">
                        <Package className="w-7 h-7 text-amber-600" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-gray-900">Oil Based Forging Lubricants</h3>
                        <p className="text-gray-600">Highly stable dispersion of fine graphite particles in mineral oil</p>
                     </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-xl mb-8">
                     <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                     <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-amber-600 font-bold">✓</span>
                           High Flash Point
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-amber-600 font-bold">✓</span>
                           Maintained Sedimentation
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-amber-600 font-bold">✓</span>
                           Excellent Results for Critical Forging
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-amber-600 font-bold">✓</span>
                           Custom Sprayable Products Available
                        </li>
                     </ul>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                        <thead className="bg-amber-600 text-white">
                           <tr>
                              <th className="px-6 py-4 text-left font-semibold">Product</th>
                              <th className="px-6 py-4 text-left font-semibold">Solid Content %</th>
                              <th className="px-6 py-4 text-left font-semibold">Graphite</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 3010</td>
                              <td className="px-6 py-4 text-gray-700">17-18%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 5-6 Mic</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 3020</td>
                              <td className="px-6 py-4 text-gray-700">17-18%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 3-4 Mic</td>
                           </tr>
                           <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-semibold text-gray-900">HOTFORGE 3030</td>
                              <td className="px-6 py-4 text-gray-700">16-17%</td>
                              <td className="px-6 py-4 text-gray-700">Synthetic 1-2 Mic</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>

               {/* Additional Products */}
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                     <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                        <Beaker className="w-7 h-7 text-green-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3">Cleaners</h3>
                     <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-green-600">•</span>
                           Alkaline Cleaners
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-green-600">•</span>
                           Neutral Cleaners
                        </li>
                     </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
                     <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                        <Package className="w-7 h-7 text-purple-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3">Dry Lubricants</h3>
                     <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-purple-600">•</span>
                           High Purity Synthetic Graphite
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-purple-600">•</span>
                           Uniform Particle Size
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-purple-600">•</span>
                           Excellent Film Formation
                        </li>
                     </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
                     <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                        <Settings className="w-7 h-7 text-red-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3">Equipment</h3>
                     <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                           <span className="text-red-600">•</span>
                           Automation Units
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-red-600">•</span>
                           Automixing Units
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="text-red-600">•</span>
                           Spray Guns & Tanks
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Bhoomi India Products */}
         <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BHOOMI INDIA Product Range</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Comprehensive solutions for forging, die casting, machining, and welding applications
                  </p>
               </div>

               {/* Graviol Products */}
               <div className="mb-16">
                  <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                     <h3 className="text-3xl font-bold text-gray-900 mb-6">GRAVIOL Product Range</h3>

                     <div className="space-y-8">
                        <div>
                           <h4 className="text-xl font-bold text-[#0d4f8b] mb-4">For Sheet Metal:</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-[#0d4f8b] mt-1 font-bold">•</span>
                                 Deep Draw Lubricants (Water Based Paste / Oil)
                              </li>
                           </ul>
                        </div>

                        <div>
                           <h4 className="text-xl font-bold text-[#0d4f8b] mb-4">For Forging (Hot & Warm):</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-[#0d4f8b] mt-1 font-bold">•</span>
                                 Billet Cutting Fluids
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-[#0d4f8b] mt-1 font-bold">•</span>
                                 Billet Precoating (For Warm & Super Alloy Forging)
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-[#0d4f8b] mt-1 font-bold">•</span>
                                 Water & Oil Based Die Lubricants (Both Graphite based & Graphite Free)
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-[#0d4f8b] mt-1 font-bold">•</span>
                                 Coining Lubricants for removal of Flash
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Sunrise Metachem Products */}
               <div className="mb-16">
                  <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                     <h3 className="text-3xl font-bold text-gray-900 mb-6">SUNRISE METACHEM Product Range</h3>

                     <div className="space-y-8">
                        <div>
                           <h4 className="text-xl font-bold text-indigo-600 mb-4">For Aluminium Casting - HPDC:</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Ladle Paste – Ceramic based
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Plunger Lubricants – Water based / Oil Based / Dispersion of graphite in oil
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Water Based Release Agents
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Anti Weld Paste
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Ceramics Plunger Tips
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Plunger Beads
                              </li>
                           </ul>
                        </div>

                        <div>
                           <h4 className="text-xl font-bold text-indigo-600 mb-4">For GDC & LPDC:</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Conductive & Refractive Coatings
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Slide Pin / Slide Rail Lubricants with Zero Build Properties
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Ladle Paste
                              </li>
                           </ul>
                        </div>

                        <div>
                           <h4 className="text-xl font-bold text-indigo-600 mb-4">For Machining Applications:</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Water Soluble Machining Fluids (Synthetic & Semi Synthetic) for Ferrous & Non-ferrous Metals
                              </li>
                           </ul>
                        </div>

                        <div>
                           <h4 className="text-xl font-bold text-indigo-600 mb-4">For Welding:</h4>
                           <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Water Based Anti-Spatter Coating for Components & Nozzles
                              </li>
                              <li className="flex items-start gap-2">
                                 <span className="text-indigo-600 mt-1 font-bold">•</span>
                                 Ceramic Based Anti-Spatter Coating for MIG & TIG Welding Nozzles
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Industrial Equipment */}
               <div>
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 rounded-xl">
                     <h3 className="text-3xl font-bold mb-6">Industrial Equipment & Solutions</h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                           "Die Lubricant Pumping & Dosing Equipment",
                           "Die Loading System",
                           "Liquid Paint Pressurized Tanks",
                           "HPDC Spray Cassettes & Manifold",
                           "Hand Spray Gun",
                           "Fix Type Spray Nozzles",
                           "Precision Plunger Lubrication System",
                           "Hydraulic Power Pack & Cylinders",
                           "Spares for HPDC & GDC Machines",
                           "Ceramics Plunger Tips",
                           "Agitator Tanks",
                           "Pneumatic Diaphragm Pump (ARO & GRACO)",
                           "Shot Sleeve",
                           "Ceramic Thermocouple & Tube",
                           "Hydraulic Hose Pipes",
                           "SS & MS Fabrication (Conveyors & Shoots)",
                        ].map((item, index) => (
                           <div key={index} className="flex items-start gap-2">
                              <span className="text-cyan-200 mt-1 font-bold">✓</span>
                              <span className="text-blue-50">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="bg-[#0d4f8b] text-white py-20">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
               <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  We develop custom products according to your specific requirements. Contact us to discuss your needs.
               </p>
               <a
                  href="/contact"
                  className="bg-white text-[#0d4f8b] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
               >
                  Get in Touch
               </a>
            </div>
         </section>
      </div>
   )
}
