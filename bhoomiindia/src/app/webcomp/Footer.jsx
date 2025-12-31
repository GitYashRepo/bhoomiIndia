"use client"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
const FooterQuickLinks = [
   {
      name: "Home",
      link: "/"
   },
   {
      name: "About Us",
      link: "/about"
   },
   {
      name: "Products",
      link: "/products"
   },
   {
      name: "Contact Us",
      link: "/contact"
   },
   {
      name: "Admin",
      link: "/admin/dashboard"
   },
]

const FooterOurSolutionsLink = [
   {
      name: "All Products",
      link: "/products"
   },
   {
      name: "Hot Forging Lubricants",
      link: "/products"
   },
   {
      name: "Die Casting Tools",
      link: "/products/die-casting-tools"
   },
   {
      name: "Tools And Accessories",
      link: "/products/tools-accessories"
   },
]

export default function Footer() {
   return (
      <footer className="bg-[#1e3a8a] text-white">
         {/* Main footer content */}
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
               {/* Company Info */}
               <div className="lg:col-span-1">
                  <div className="mb-6">
                     <h3 className="text-2xl font-bold mb-2">BHOOMI INDIA</h3>
                     <p className="text-blue-200 text-sm"></p>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-sm mb-6">
                     Pioneering industrial solutions with cutting-edge technology and unwavering commitment to quality.
                  </p>
                  <div className="flex gap-3">
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Facebook className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Linkedin className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Instagram className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Youtube className="w-4 h-4" />
                     </a>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                  <ul className="space-y-3">
                     {FooterQuickLinks.map((item) => (
                        <li key={item.name}>
                           <a href={item.link} className="text-blue-100 hover:text-white transition-colors">
                              {item.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Product Categories */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Our Solutions</h4>
                  <ul className="space-y-3">
                     {FooterOurSolutionsLink.map((item) => (
                        <li key={item.name}>
                           <a href={item.link} className="text-blue-100 hover:text-white transition-colors">
                              {item.name}
                           </a>
                        </li>
                     ),
                     )}
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Call Us</p>
                           <a href="tel:+919430918956" className="text-white hover:text-blue-100 transition-colors">
                              +91 94309 18956
                           </a>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Email Us</p>
                           <a
                              href="mailto:info@bhoomiindia.com"
                              className="text-white hover:text-blue-100 transition-colors break-all"
                           >
                              info@bhoomiindia.co.in
                           </a><br />
                           <a
                              href="mailto:info@bhoomiindia.com"
                              className="text-white text-sm hover:text-blue-100 transition-colors break-all"
                           >
                              infobhoomiindia@gmail.com
                           </a>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Visit Us</p>
                           <p className="text-white text-sm leading-relaxed">
                              Plot No. 89 SP, Sector-6
                              <br />
                              Dharuhera, Haryana
                              <br />
                              123106, India
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
