'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => { removeEventListener("click", handleAnchorClick); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      < Navigation />
    </div>
  );
}
