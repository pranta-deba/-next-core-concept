"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // dashboard open to normal footer hidden
  if (pathname.includes("dashboard")) {
    return <></>;
  }
  return (
    <div className="bg-orange-700 text-white">
      <div className="container mx-auto place-content-center place-items-center px-3 py-5">
        <h1>2025 || @ Alright Reverse</h1>
      </div>
    </div>
  );
};

export default Footer;
