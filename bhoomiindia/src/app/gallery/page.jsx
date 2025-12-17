

export default function GalleryPage() {
   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     Explore our range of products, facilities, and successful implementations across various industries.
                  </p>
               </div>
            </div>
         </section>

         {/* Gallery Content */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products & Solutions</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Visual showcase of our manufacturing excellence and innovative solutions
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Placeholder gallery items */}
                  {[
                     { title: "Forging Equipment", category: "Manufacturing" },
                     { title: "Die Casting Solutions", category: "Industrial" },
                     { title: "Spray Systems", category: "Equipment" },
                     { title: "Quality Control Lab", category: "Facility" },
                     { title: "Production Line", category: "Manufacturing" },
                     { title: "Custom Solutions", category: "Projects" },
                  ].map((item, index) => (
                     <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square hover:shadow-2xl transition-all duration-300"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0d4f8b]/80 to-[#1e5a9e]/80 flex flex-col items-center justify-center p-6">
                           <span className="text-blue-200 text-sm font-semibold mb-2">{item.category}</span>
                           <h3 className="text-white text-2xl font-bold text-center">{item.title}</h3>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                     </div>
                  ))}
               </div>

               <div className="mt-16 text-center">
                  <p className="text-gray-600 text-lg mb-6">
                     Interested in seeing more? Contact us for detailed product catalogs and case studies.
                  </p>
                  <a
                     href="/contact"
                     className="inline-block bg-[#0d4f8b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0d4f8b]/90 transition-colors"
                  >
                     Request Catalog
                  </a>
               </div>
            </div>
         </section>
      </div>
   )
}
