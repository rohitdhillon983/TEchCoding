"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSession} from "next-auth/react"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data: session } = useSession()

  if (session) {
    router.push("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", { email, password, redirect: false });
    console.log(result);
    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/");
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_0%_0px,#f7aca5_1px,transparent)]"></div>
      </div>
      <div className="flex justify-center items-center gap-2 w-[80%] mt-10 max-[426px]:mt-20 max-[769px]:mt-24 mb-2">
        {/* left side */}
        <div className="w-1/2 flex justify-center items-center max-[426px]:hidden">
          <DotLottieReact
              src="https://lottie.host/6977a354-bb8f-445e-87b5-5ac693801eee/lqVnLrP5sr.lottie"
              loop
              autoplay
              className="min-w-[700px] max-[769px]:min-w-[800px]"
            />
        </div>

        {/* right side */}
        <div className='w-1/2 flex flex-col justify-center items-center'>
            <h2 className="text-4xl font-bold Rubik mb-4">Login</h2>
            <form onSubmit={handleLogin} className="w-96 p-6 border rounded-3xl shadow-md bg-white pt-9">
              {error && <p className="text-red-500">{error}</p>}
              <input className="w-full mb-3 p-2 pl-4 border rounded-3xl" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="w-full mb-3 p-2 pl-4 border rounded-3xl" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="w-full p-2 bg-[#b91202] Rajdhani font-bold text-white rounded-3xl">{loading ? <span class="loader"></span> : "Login"}</button>
              <p className="mt-4 text-center">Don&apos;t have an account? <Link href="/register" className="text-[#b91202]">Register</Link></p>
            </form>
        </div>
      </div>
      
    </div>
  );
}
