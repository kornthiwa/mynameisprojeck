import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export function Layout({ children }: any) {
  return (
    <div className=" border-4 bg-slate-300">
      <Navbar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
