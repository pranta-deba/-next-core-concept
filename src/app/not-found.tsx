import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="w-full min-h-screen place-content-center place-items-center space-y-3">
        <h1 className="text-3xl font-bold">404 Not Found!</h1>
        <div>
          <Link className="text-orange-700" href={"/"}>
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
