"use client";

import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  const tips = [
    {
      title: "P2P NETWORKING",
      description: "Built on libp2p with automatic peer discovery using mDNS",
    },
    {
      title: "CRDT CONFLICT RESOLUTION",
      description: "Hybrid Logical Clocks ensure causal ordering and conflict-free merges",
    },
    {
      title: "OFFLINE-FIRST ARCHITECTURE",
      description: "Operation logs track changes for sync when devices reconnect",
    },
    {
      title: "NAT TRAVERSAL",
      description: "Automatic relay server connection for devices behind firewalls",
    },
    {
      title: "SECURE AUTHENTICATION",
      description: "Argon2 password hashing with timing-safe verification",
    },
    {
      title: "DEVICE PAIRING",
      description: "QR code-based authorization for easy device management",
    },
    {
      title: "CROSS-PLATFORM SUPPORT",
      description: "Works on iOS, Android, macOS, Windows, Linux, and embedded devices",
    },
    {
      title: "ZERO CONFIGURATION",
      description: "Automatic schema migrations and peer discovery out of the box",
    },
    {
      title: "SQLITE BACKEND",
      description: "Lightweight, reliable local-first database storage",
    },
    {
      title: "RUST POWERED",
      description: "Memory-safe, blazingly fast synchronization infrastructure",
    },
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Rotate tips
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-background-dark flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#40e0d0_1px,transparent_1px),linear-gradient(to_bottom,#40e0d0_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid_20s_linear_infinite]" />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,#40e0d0_0px,#40e0d0_1px,transparent_1px,transparent_2px)]" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-pink" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-pink" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary" />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full px-8 flex flex-col items-center gap-8">
        {/* Logo/Title */}
        <div className="text-center">
          <h1
            className={`text-6xl md:text-7xl font-black font-headline text-primary uppercase tracking-wider ${
              glitchActive ? "animate-pulse" : ""
            }`}
            style={{
              textShadow: glitchActive
                ? "2px 2px #ff0000, -2px -2px #00ffff"
                : "0 0 20px rgba(64, 224, 208, 0.5)",
            }}
          >
            AHENK
          </h1>
          <p className="text-text-light font-code text-sm mt-2 tracking-[0.3em]">
            [INITIALIZING SYNC PROTOCOL]
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-2 bg-background-dark border-2 border-primary/30 relative overflow-hidden">
            {/* Progress fill */}
            <div
              className="h-full bg-primary transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_1s_ease-in-out_infinite]" />
            </div>

            {/* Glitch overlay */}
            {glitchActive && (
              <div className="absolute inset-0 bg-primary/50 mix-blend-difference" />
            )}
          </div>

          <div className="flex justify-between items-center text-xs font-code">
            <span className="text-primary">{progress}% LOADED</span>
            <span className="text-secondary-accent">
              {progress < 30 && "ESTABLISHING CONNECTION..."}
              {progress >= 30 && progress < 60 && "VERIFYING PEERS..."}
              {progress >= 60 && progress < 90 && "SYNCING DATA..."}
              {progress >= 90 && "READY"}
            </span>
          </div>
        </div>

        {/* Tips section */}
        <div className="w-full border-2 border-primary/30 bg-primary/5 p-6 relative overflow-hidden min-h-[120px]">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary text-xs font-code uppercase tracking-wider">
                [TIP #{String(currentTip + 1).padStart(2, "0")}]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <h3 className="text-primary text-lg font-headline uppercase mb-2">
              {tips[currentTip].title}
            </h3>
            <p className="text-text-light text-sm font-code leading-relaxed">
              {tips[currentTip].description}
            </p>
          </div>

          {/* Animated scan line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_3s_ease-in-out_infinite]" />
        </div>

        {/* Bottom status */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-primary text-xs font-code">
            <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            <span>SYSTEM ONLINE</span>
          </div>
          <p className="text-secondary-accent text-xs font-code">
            PEER ID: 12D3KooWR...{Math.random().toString(36).substring(7)}
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-[float_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes scan {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(120px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
