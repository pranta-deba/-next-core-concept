"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();


  const user = {
    email: "example@gmail.com",
    role: "admin",
  };

  const handleNavigation = () => {
    if (user && user.role === "user") {
      router.push("/user-dashboard");
    } else if (user && user.role === "admin") {
      router.push("/admin-dashboard");
    } else {
      router.push("/");
    }
  };

  // dashboard open to normal navbar hidden
  if (pathname.includes("dashboard")) {
    return <></>;
  }

  return (
    <div className="px-3 py-5 bg-orange-700 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Logo</Link>
        </h1>
        <ul className="flex items-center gap-4">
          <li className="hover:underline cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="hover:underline cursor-pointer relative group">
            <Link href={"/contact"}> Contact</Link>
          </li>
          <li className="hover:underline cursor-pointer relative group">
            <button
              className="hover:underline cursor-pointer relative group"
              onClick={handleNavigation}
            >
              Dashboard
            </button>
          </li>
          <li className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
