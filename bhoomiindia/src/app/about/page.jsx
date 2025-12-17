
import { Target, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     Leading the way in specialty metal forming products and industrial solutions with innovation, quality, and
                     customer satisfaction at our core.
                  </p>
               </div>
            </div>
         </section>

         {/* Prilube Industries Section */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <div className="mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">PRILUBE INDUSTRIES</h2>
                     <div className="h-1 w-24 bg-[#0d4f8b] mb-8"></div>
                  </div>

                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                     <p>
                        PRILUBE INDUSTRIES is one of the leading manufacturers of specialty metal forming products and coatings
                        for a wide range of industrial applications. We are a customer-driven and technologically strong firm,
                        believing in end-to-end customer satisfaction in a cost-effective manner.
                     </p>
                     <p>
                        PRILUBE INDUSTRIES is an innovative, customer-driven, environmentally responsible manufacturer of
                        metalforming lubricants and coatings under the HOTFORGE brand. We supply our proprietary HOTFORGE
                        products to customers engaged in metal forging, extrusion, piercing, and other metal forming activities
                        throughout the world.
                     </p>
                     <p>
                        With our advanced manufacturing facility, well-equipped quality control lab, well-experienced staff, and
                        wide distributor network, we are committed to quality and on-time delivery of our products. We have
                        continually manufactured cost-effective lubricants and coatings of the highest quality.
                     </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-[#0d4f8b]">
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Capacity</h3>
                     <p className="text-xl text-gray-700">
                        With our advanced manufacturing capacity of more than{" "}
                        <span className="font-bold text-[#0d4f8b]">200 Tonnes per month</span>, Prilube Industries offers a wide
                        range of products according to customer needs and also custom-developed products according to
                        requirements.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Bhoomi India Section */}
         <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <div className="mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">BHOOMI INDIA</h2>
                     <div className="h-1 w-24 bg-[#0d4f8b] mb-8"></div>
                  </div>

                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                     <p>
                        BHOOMI INDIA is a Dharuhera, Delhi NCR based company, incorporated in 2023 and led by S K YADAV along
                        with his team of technically advanced and expert professionals. Bhoomi has diversified into different
                        business verticals and services for the industries.
                     </p>
                     <p>
                        We have touched different milestones since inception, having North India presence for sale and marketing
                        of our product ranges. Our sales/marketing and backend team are highly professional and experts in their
                        respective fields.
                     </p>
                     <p>
                        Our product ranges, sourced from well-known manufacturers, include release agent solutions for
                        Forging/Die Casting and machine cutting tools/machine tools/lubricants/abrasive products tooled up
                        solutions and other allied products. Our strategic stock points in Delhi NCR are located in
                        Dharuhera/Faridabad/Noida with our corporate office in Dharuhera Rewari.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Division</h3>
                        <ul className="space-y-2 text-gray-700">
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>Customized Industrial Dosing & Pumping Systems</span>
                           </li>
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>Consumable Spares for HPDC, GDC & LPDC</span>
                           </li>
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>Customized Material Handling Conveyors</span>
                           </li>
                        </ul>
                     </div>

                     <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution Partnerships</h3>
                        <ul className="space-y-2 text-gray-700">
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>Exclusive Business Partners of Graviol & Sunrise Metachem</span>
                           </li>
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>100+ Products for Metal Forming Industry</span>
                           </li>
                           <li className="flex items-start gap-2">
                              <span className="text-[#0d4f8b] mt-1">•</span>
                              <span>Strategic presence across North India</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Values Section */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="text-center">
                     <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-10 h-10 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
                     <p className="text-gray-600 leading-relaxed">
                        End-to-end customer satisfaction in a cost-effective manner
                     </p>
                  </div>

                  <div className="text-center">
                     <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-10 h-10 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Highest quality standards with rigorous quality control processes
                     </p>
                  </div>

                  <div className="text-center">
                     <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="w-10 h-10 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Responsibility</h3>
                     <p className="text-gray-600 leading-relaxed">Sustainable and eco-friendly manufacturing practices</p>
                  </div>

                  <div className="text-center">
                     <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-10 h-10 text-[#0d4f8b]" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Continuous technological advancement and product development
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Contact Info Section */}
         <section className="bg-[#0d4f8b] text-white py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">Our Locations</h2>
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                     <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Prilube Industries</h3>
                        <p className="text-blue-100 leading-relaxed">
                           Jeevan Nagar, Tathawade
                           <br />
                           Pune - 411033, Maharashtra
                           <br />
                           India
                        </p>
                        <div className="mt-4 space-y-2">
                           <p className="text-blue-100">prilubeindustries@gmail.com</p>
                           <p className="text-blue-100">www.prilube.com</p>
                        </div>
                     </div>

                     <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Bhoomi India</h3>
                        <p className="text-blue-100 leading-relaxed">
                           House No 397, Sector 4A
                           <br />
                           Dharuhera - 123106
                           <br />
                           Rewari, Haryana, India
                        </p>
                        <div className="mt-4 space-y-2">
                           <p className="text-blue-100">+91 94309 18956</p>
                           <p className="text-blue-100">+91 1274 313498</p>
                           <p className="text-blue-100">infobhoomiindia@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
