"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@wrist.com" && password === "password123") {
      localStorage.setItem("isLoggedIn", "true");
      document.cookie = "isLoggedIn=true; path=/;";
      
      toast.success("Login Successful!");
      
      window.location.href = redirectTo; 
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="w-full max-w-sm p-8 shadow-2xl card bg-base-100">
        <h2 className="mb-6 text-2xl font-semibold text-center text-primary text-shadow-lg">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="mb-2 font-bold label">Email Address</label>
            <input
              type="email"
              placeholder="admin@wrist.com"
              className="w-full input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="mb-2 font-bold label">Password</label>
            <input
              type="password"
              placeholder="password123"
              className="w-full input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-lg text-white btn btn-primary"
          >
            Login Now
          </button>
        </form>
        <p className="mt-4 text-xs text-center text-gray-500">
          ID & Pass for login: admin@wrist.com / password123
        </p>
      </div>
  );
};
