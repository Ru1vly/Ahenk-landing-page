"use client";

import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/main-content";
import LoadingScreen from "./components/loading-screen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}

      <div className={`flex flex-col justify-between min-h-screen lg:h-screen w-screen overflow-y-auto lg:overflow-hidden transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <div className="surveillance-grid-overlay"></div>
        <div className="scanlines fixed inset-0 z-20 pointer-events-none"></div>
        <div className="grainy-overlay"></div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
