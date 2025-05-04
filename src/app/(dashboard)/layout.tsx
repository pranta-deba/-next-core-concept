import Link from "next/link";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 min-h-screen">
        {/* dash side bar */}
        <div className="col-span-3 border p-4">
          <h1>
            <Link href={"/"}>Logo</Link>
          </h1>
          <ul className="p-4">
            <li>Dashboard</li>
            <li>Order</li>
            <li>Payment</li>
            <li>Profile</li>
          </ul>
        </div>
        {/* dash content */}
        <div className="col-span-9 border p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
