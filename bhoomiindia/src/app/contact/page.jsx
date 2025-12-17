
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     We're here to help with all your metal forming and industrial equipment needs. Reach out to our expert
                     team today.
                  </p>
               </div>
            </div>
         </section>

         {/* Contact Information */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 mb-20">
                     {/* Prilube Industries Contact */}
                     <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Prilube Industries</h2>
                        <div className="space-y-6">
                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <MapPin className="w-6 h-6 text-[#0d4f8b]" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                 <p className="text-gray-700 leading-relaxed">
                                    Jeevan Nagar, Tathawade
                                    <br />
                                    Pune - 411033
                                    <br />
                                    Maharashtra, India
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <Mail className="w-6 h-6 text-[#0d4f8b]" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                 <a href="mailto:prilubeindustries@gmail.com" className="text-[#0d4f8b] hover:underline">
                                    prilubeindustries@gmail.com
                                 </a>
                              </div>
                           </div>

                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <Phone className="w-6 h-6 text-[#0d4f8b]" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                                 <a
                                    href="http://www.prilube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0d4f8b] hover:underline"
                                 >
                                    www.prilube.com
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Bhoomi India Contact */}
                     <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bhoomi India</h2>
                        <div className="space-y-6">
                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <MapPin className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                 <p className="text-gray-700 leading-relaxed">
                                    House No 397, Sector 4A
                                    <br />
                                    Dharuhera - 123106
                                    <br />
                                    Rewari, Haryana, India
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <Mail className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                 <a href="mailto:infobhoomiindia@gmail.com" className="text-indigo-600 hover:underline">
                                    infobhoomiindia@gmail.com
                                 </a>
                              </div>
                           </div>

                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <Phone className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                 <div className="space-y-1">
                                    <a href="tel:+919430918956" className="text-indigo-600 hover:underline block">
                                       +91 94309 18956
                                    </a>
                                    <a href="tel:+911274313498" className="text-indigo-600 hover:underline block">
                                       +91 1274 313498
                                    </a>
                                 </div>
                              </div>
                           </div>

                           <div className="flex items-start gap-4">
                              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <MapPin className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                 <h3 className="font-semibold text-gray-900 mb-1">GSTN</h3>
                                 <p className="text-gray-700">06IKJPK6038R1ZA</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Contact Form */}
                  <div className="max-w-4xl mx-auto">
                     <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Send Us a Message</h2>
                        <p className="text-gray-600 text-center mb-8">
                           Fill out the form below and we'll get back to you as soon as possible
                        </p>

                        <form className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Name *
                                 </label>
                                 <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all"
                                    placeholder="Your full name"
                                 />
                              </div>
                              <div>
                                 <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Email *
                                 </label>
                                 <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all"
                                    placeholder="your.email@example.com"
                                 />
                              </div>
                           </div>

                           <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Phone
                                 </label>
                                 <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all"
                                    placeholder="+91 XXXXX XXXXX"
                                 />
                              </div>
                              <div>
                                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Subject *
                                 </label>
                                 <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all"
                                    placeholder="What is this regarding?"
                                 />
                              </div>
                           </div>

                           <div>
                              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                                 Company Name
                              </label>
                              <input
                                 type="text"
                                 id="company"
                                 name="company"
                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all"
                                 placeholder="Your company name"
                              />
                           </div>

                           <div>
                              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                 Message *
                              </label>
                              <textarea
                                 id="message"
                                 name="message"
                                 required
                                 rows={6}
                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] focus:border-transparent outline-none transition-all resize-none"
                                 placeholder="Tell us about your requirements..."
                              ></textarea>
                           </div>

                           <button
                              type="submit"
                              className="w-full bg-[#0d4f8b] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0d4f8b]/90 transition-colors"
                           >
                              Send Message
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Business Hours */}
         <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm">
                     <Clock className="w-6 h-6 text-[#0d4f8b]" />
                     <div className="text-left">
                        <div className="font-semibold text-gray-900">Business Hours</div>
                        <div className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM IST</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
