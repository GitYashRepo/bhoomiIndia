"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, Mail, AlertCircle, Loader2 } from "lucide-react"

export default function AdminLogin() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()

   const handleSubmit = async (e) => {
      e.preventDefault()
      setError("")
      setIsLoading(true)

      try {
         const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
         })

         if (res?.error) {
            setError("Invalid email or password. Please try again.")
         } else if (!res?.error) {
            router.push("/admin/dashboard")
         }
      } catch (err) {
         setError("An error occurred. Please try again.")
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
         <div className="w-full max-w-md">
            {/* Header Section */}
            <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4 mx-auto">
                  <Lock className="w-6 h-6 text-white" />
               </div>
               <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
               <p className="text-slate-400">Secure access to your dashboard</p>
            </div>

            {/* Login Card */}
            <div className="bg-slate-800 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl">
               <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                     <label className="block text-sm font-medium text-slate-200">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                           type="email"
                           placeholder="admin@example.com"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                           required
                           disabled={isLoading}
                        />
                     </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                     <label className="block text-sm font-medium text-slate-200">Password</label>
                     <div className="relative">
                        <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                           type="password"
                           placeholder="••••••••"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                           required
                           disabled={isLoading}
                        />
                     </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                     <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <p className="text-sm text-red-400">{error}</p>
                     </div>
                  )}

                  {/* Submit Button */}
                  <button
                     type="submit"
                     disabled={isLoading}
                     className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                     {isLoading ? (
                        <>
                           <Loader2 className="w-5 h-5 animate-spin" />
                           <span>Signing in...</span>
                        </>
                     ) : (
                        <>
                           <Lock className="w-5 h-5" />
                           <span>Sign In</span>
                        </>
                     )}
                  </button>
               </form>

               {/* Footer Note */}
               <p className="text-center text-xs text-slate-500 mt-6">
                  This is a secure admin area. Unauthorized access is prohibited.
               </p>
            </div>

            {/* Additional Security Note */}
            <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
               <p className="text-xs text-slate-400 text-center">Use your admin credentials to access the dashboard</p>
            </div>
         </div>
      </div>
   )
}
