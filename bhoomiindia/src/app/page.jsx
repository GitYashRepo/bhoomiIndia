"use client"
import Link from "next/link"
import { ArrowRight, Factory, Wrench, ShieldCheck, Users } from "lucide-react"
import { LogoSlider } from "./webcomp/logo-slider";

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <section className="relative min-h-[90vh] flex items-center text-white">
            {/* Background Image */}
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: "url('/banner2.png')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 px-6 max-w-4xl">
               <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  Leading Manufacturer of Metal Forming Products
               </h1>

               <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
                  Specialized solutions in forging lubricants, die casting equipment, and industrial
                  automation for metal forming industries worldwide.
               </p>

               <div className="flex flex-wrap gap-4">
                  <Link
                     href="/products"
                     className="bg-white text-[#0d4f8b] px-8 py-2 rounded-lg font-semibold text-lg hover:bg-blue-50 transition inline-flex items-center gap-2"
                  >
                     Explore Products
                     <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                     href="/contact"
                     className="border-2 border-white px-8 py-2 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
                  >
                     Contact Us
                  </Link>
               </div>
            </div>
         </section>


         {/* Stats Section */}
         <section className="bg-white py-16">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                     <div className="text-4xl md:text-5xl font-bold text-[#0d4f8b] mb-2">50+</div>
                     <div className="text-gray-600">Tonnes/Month Capacity</div>
                  </div>
                  <div className="text-center">
                     <div className="text-4xl md:text-5xl font-bold text-[#0d4f8b] mb-2">100+</div>
                     <div className="text-gray-600">Product Range</div>
                  </div>
                  <div className="text-center">
                     <div className="text-4xl md:text-5xl font-bold text-[#0d4f8b] mb-2">10+</div>
                     <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                     <div className="text-4xl md:text-5xl font-bold text-[#0d4f8b] mb-2">200+</div>
                     <div className="text-gray-600">Satisfied Clients</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     We combine innovation, quality, and customer-driven solutions to deliver excellence in metal forming
                     technology
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                     <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Factory className="w-8 h-8 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Manufacturing</h3>
                     <p className="text-gray-600 leading-relaxed">
                        State-of-the-art facilities with cutting-edge technology for consistent quality production
                     </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                     <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Wrench className="w-8 h-8 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Tailored products and services designed to meet your specific industrial requirements
                     </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                     <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Well-equipped quality control lab ensuring highest standards in every product
                     </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                     <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Experienced professionals with technical expertise and dedication to customer satisfaction
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Product Categories */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Range</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Comprehensive solutions for forging, die casting, and machining applications
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white hover:shadow-2xl transition-all duration-300">
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3">Forging Lubricants</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                           Water-based graphite and synthetic lubricants for normal, precision, and extrusion forging
                        </p>
                        <Link
                           href="/products"
                           className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                        >
                           Learn More
                           <ArrowRight className="w-5 h-5" />
                        </Link>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white hover:shadow-2xl transition-all duration-300">
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3">Die Casting Solutions</h3>
                        <p className="text-indigo-100 mb-6 leading-relaxed">
                           Release agents, plunger lubricants, and coatings for HPDC, GDC, and LPDC applications
                        </p>
                        <Link
                           href="/products/die-casting-tools"
                           className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                        >
                           Learn More
                           <ArrowRight className="w-5 h-5" />
                        </Link>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 text-white hover:shadow-2xl transition-all duration-300">
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3">Industrial Equipment</h3>
                        <p className="text-cyan-100 mb-6 leading-relaxed">
                           Dosing systems, spray guns, automation units, and custom fabrication solutions
                        </p>
                        <Link
                           href="/products/tools-accessories"
                           className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                        >
                           Learn More
                           <ArrowRight className="w-5 h-5" />
                        </Link>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
               </div>
            </div>
         </section>

         <section className="">
            <LogoSlider />
         </section>

         {/* CTA Section */}
         <section className="bg-gradient-to-r from-[#0d4f8b] to-[#1e5a9e] text-white py-20">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
               <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact our team today to discuss your metal forming needs and discover how we can help optimize your
                  operations
               </p>
               <Link
                  href="/contact"
                  className="bg-white text-[#0d4f8b] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
               >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </section>
      </div>
   );
}
