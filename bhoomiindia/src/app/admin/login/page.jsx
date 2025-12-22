"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await signIn("credentials", {
         email,
         password,
         redirect: false,
      });

      if (!res.error) router.push("/admin/dashboard");
      else alert("Invalid Admin Credentials");
   };

   return (
      <div style={{ padding: 40 }}>
         <h2>Admin Login</h2>

         <form onSubmit={handleSubmit}>
            <input
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
               type="password"
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
}
