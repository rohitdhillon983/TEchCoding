"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/register/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    setName("");
    setEmail("");
    setPassword("");
    if (res.status === 200) {
      setMessage("Registration successful");
      setTimeout(() => router.push("/login"), 2000);
      setLoading(false);
    } else {
      console.log(data.message);
      setMessage(data.error);
      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_0%_0px,#f7aca5_1px,transparent)]"></div>
      </div>
      <div className="flex justify-center items-center gap-2 w-[80%] mt-10 max-[426px]:mt-20 max-[769px]:mt-24 mb-2">
        {/* left section */}
        <div className="w-1/2 flex justify-center items-center max-[426px]:hidden">
          <DotLottieReact
              src="https://lottie.host/c9b6581d-0d91-44fa-8c54-342a2e00794d/HxvJxiFQMi.lottie"
              loop
              autoplay
              className="min-w-[900px] max-[769px]:min-w-[800px]"
            />
        </div>

        {/* right section */}
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <h2 className="text-4xl font-bold Rubik mb-4">Register</h2>
          <form onSubmit={handleRegister} className="w-96 p-6 border rounded-3xl shadow-md bg-white pt-9">
            {message && <p className="text-red-500">{message}</p>}
            <input className="w-full mb-3 p-2 pl-4 border rounded-3xl" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-full mb-3 p-2 pl-4 border rounded-3xl" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full mb-3 p-2 pl-4 border rounded-3xl" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="w-full p-2 bg-[#b91202] Rajdhani font-bold text-white rounded-3xl">{loading ? <span class="loader"></span> : "Register"}</button>
            <p className="mt-2 text-center">Already have an account? <Link href="/login" className="text-[#b91202]">Login</Link></p>
          </form>
        </div>
      </div>
      
    </div>
  );
}
