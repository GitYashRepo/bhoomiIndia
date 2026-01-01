import { Target, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="relative min-h-[60vh] flex items-center text-white">
            {/* Background Image */}
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: "url('/About-Us-Banner-2048x520.png')" }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
               <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>

                  <p className="text-lg md:text-2xl text-blue-100 leading-relaxed">
                     Leading the way in specialty metal forming products and industrial solutions with innovation, quality, and
                     customer satisfaction at our core.
                  </p>
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

         <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-70"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

            <div className="relative container mx-auto px-4 z-10">
               <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
                     <div className="h-1 w-20 bg-[#0d4f8b] mx-auto mb-6"></div>
                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Visionary leader driving innovation and excellence in industrial solutions
                     </p>
                  </div>

                  {/* Founder Card */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     {/* Image Side */}
                     <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                           {/* Decorative frame */}
                           <div className="absolute -inset-8 bg-gradient-to-br from-[#0d4f8b] via-blue-400 to-[#0d4f8b] rounded-3xl opacity-20 blur-2xl"></div>

                           {/* Image Container */}
                           <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white backdrop-blur-sm">
                              <div className="aspect-square w-full max-w-sm overflow-hidden">
                                 <img
                                    src="/skyadav2.jpeg"
                                    alt="S.K Yadav - Founder"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                 />
                              </div>
                              {/* Gradient overlay on bottom */}
                              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d4f8b] to-transparent opacity-0"></div>
                           </div>

                           {/* Floating accent badge */}
                           <div className="absolute -bottom-8 -right-4 bg-[#0d4f8b] text-white rounded-2xl p-4 shadow-lg border-4 border-white backdrop-blur-sm">
                              <p className="font-bold text-sm md:text-lg">Founder &</p>
                              <p className="font-bold text-sm md:text-lg">CEO</p>
                           </div>
                        </div>
                     </div>

                     {/* Content Side */}
                     <div className="space-y-8 px-6 md:px-0">
                        {/* Name and Title */}
                        <div>
                           <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">S.K Yadav</h3>
                           <p className="text-xl text-[#0d4f8b] font-semibold">Founder & Chief Executive Officer</p>
                           <div className="h-1 w-16 bg-gradient-to-r from-[#0d4f8b] to-blue-400 mt-4"></div>
                        </div>

                        {/* Vision Text */}
                        <div className="space-y-4">
                           <p className="text-lg text-gray-700 leading-relaxed">
                              With an exceptional track record in industrial solutions and metal forming technologies, S.K Yadav
                              founded Bhoomi India with a singular vision: to revolutionize the industry through cutting-edge
                              innovation and uncompromising quality standards.
                           </p>
                           <p className="text-lg text-gray-700 leading-relaxed">
                              Under his visionary leadership, Bhoomi India has rapidly grown to become a trusted partner for
                              premier manufacturers across North India, delivering customized solutions that exceed expectations.
                           </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col md:flex-row gap-6 pt-8">
                           <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-[#0d4f8b] hover:shadow-lg transition-all duration-300">
                              <p className="text-3xl font-bold text-[#0d4f8b]">2023</p>
                              <p className="text-gray-600 font-medium">Year Founded</p>
                           </div>
                           <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-[#0d4f8b] hover:shadow-lg transition-all duration-300">
                              <p className="text-3xl font-bold text-[#0d4f8b]">50+</p>
                              <p className="text-gray-600 font-medium">Product Range</p>
                           </div>
                        </div>
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

                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                     <h3 className="text-2xl font-bold mb-4">Bhoomi India</h3>
                     <p className="text-blue-100 leading-relaxed">
                        Plot No. 89 SP, Sector-6
                        <br />
                        Dharuhera, Haryana
                        <br />
                        123106, India
                     </p>
                     <div className="mt-4 space-y-2">
                        <p className="text-blue-100">
                           <a href="tel:+919430918956" className="text-white hover:underline block">
                              +91 94309 18956
                           </a>
                        </p>
                        <p className="text-blue-100">
                           <a href="tel:+911274313498" className="text-white hover:underline block">
                              +91 1274 313498
                           </a>
                        </p>
                        <p className="text-blue-100">
                           <a href="mailto:info@bhoomiindia.co.in" className="text-white hover:underline">
                              info@bhoomiindia.co.in
                           </a>
                        </p>
                        <p className="text-blue-100">
                           <a href="mailto:infobhoomiindia@gmail.com" className="text-white hover:underline">
                              infobhoomiindia@gmail.com
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
