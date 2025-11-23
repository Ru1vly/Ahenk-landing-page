import Link from "next/link";
import Image from "next/image";
import LiveTerminal from "./live-terminal";
import HyperText from "./hyper-text";

const MainContent = () => {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-[40%_60%] h-full flex-1 w-full gap-3 p-3 lg:p-4 relative z-30 overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col gap-3 h-full overflow-hidden">
        {/* Hero Section - Smaller */}
        <section className="w-full flex-[0.8] bg-background-dark/80 border border-secondary-accent/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
          <div className="relative z-10 flex flex-col h-full justify-center">
            <h1 className="text-text-light text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] font-headline uppercase mb-4">
              <span className="text-primary block mb-2">[DISTRIBUTED SYNC]</span>
              <span className="text-lg sm:text-xl lg:text-2xl text-secondary-accent">CONFLICT-FREE PROTOCOL</span>
            </h1>
            <p className="text-secondary-accent text-base sm:text-lg mb-4 max-w-2xl font-medium">
              RUST-POWERED P2P • CRDT-BASED • OFFLINE-FIRST ARCHITECTURE.
              <br className="hidden sm:block" />
              CROSS-PLATFORM DATABASE SYNCHRONIZATION.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="https://github.com/Ru1vly/nexus-core" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center h-12 px-6 bg-primary text-background-dark text-base font-extrabold uppercase hover:opacity-90 transition-opacity border-none">
                <span className="truncate">VIEW ON GITHUB</span>
              </a>
              <Link href="/docs" className="flex w-full sm:w-auto items-center justify-center h-12 px-6 bg-background-dark text-primary text-base font-extrabold uppercase border border-primary hover:bg-primary/20 transition-colors">
                <span className="truncate">READ DOCS</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Network Map - Bigger */}
        <section className="w-full flex-[1.5] bg-background-dark/80 border border-secondary-accent/30 p-5 sm:p-6 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10"></div>
          <div className="relative w-full h-full flex flex-col justify-center items-center p-2 z-10">
            <div className="relative w-full h-full flex items-center justify-center border border-secondary-accent/40 bg-secondary-accent/5 overflow-hidden">
              <Image
                alt="Low-res camera feed"
                className="object-cover grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5kzYqdHRwl2_0b9GA7WFMxBWtel8Az9Ks7qtznbUvCfbYyr8xO5jjb5woHTYuhzQc0uma66hokyjrBcSHOsQ3ZO0fI6XYdabypfaBv8NC40fyeaAqAy0xhcBsMEJLuFar2ms1UVVtGZwcs-uQeaorvKlBPd9cB4o9CCMol4rvFUIDE5ZRqe7RTL2MRtOVdO2lIFJjoh88AzR47oD0rddq_DfAfhIxQtmCK89nkxeR11LedilEUfc3iyjEa9M48IIzISaa46bWpCz8"
                fill
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-primary absolute top-1/4 left-1/4 animate-pulse"></div>
                <div className="w-20 h-20 border-2 border-neon-pink absolute bottom-1/4 right-1/4 animate-pulse" style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)' }}></div>
                <div className="w-10 h-10 rounded-full border border-primary absolute top-[10%] right-[10%]"></div>
                <span className="absolute top-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] text-primary text-sm font-code font-bold">
                  TARGET-A
                </span>
                <div className="w-3 h-3 rounded-full bg-neon-pink absolute bottom-[20%] left-[20%]"></div>
              </div>
            </div>
            <p className="text-sm text-secondary-accent mt-3 font-code uppercase font-bold">
              NETWORK-MAP // PEER-MESH //{" "}
              <span className="text-primary">6 NODES ACTIVE</span>
            </p>
          </div>
        </section>

        {/* Credits - Smaller */}
        <section className="w-full flex-[0.8] bg-background-dark/80 border border-neon-pink/30 p-5 sm:p-6 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/5 to-transparent z-0 opacity-10"></div>
          <h2 className="text-text-light text-xl sm:text-2xl font-bold font-headline uppercase border-b border-neon-pink/20 pb-2 mb-2 relative z-10">
            CREDITS // SYSTEM
          </h2>
          <div className="relative z-10 flex flex-col gap-4 items-center justify-center flex-grow text-center">
            <div className="flex flex-col gap-2">
              <p className="text-text-light text-base font-code">
                MADE BY{" "}
                <HyperText
                  text="APPAHOLICS"
                  href="https://appaholics.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:opacity-80 transition-opacity uppercase underline"
                  duration={40}
                />
              </p>
              <p className="text-neon-pink text-xl font-headline animate-pulse">
                &#x3C;3
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <p className="text-secondary-accent text-sm font-code uppercase font-bold">
                CONSIDER A DONATION
              </p>
              <a
                href="https://buymeacoffee.com/ru1vly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-primary/10 border-2 border-primary text-primary font-bold font-code text-sm uppercase hover:bg-primary hover:text-background-dark transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                <svg
                  className="size-5 relative z-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z" />
                </svg>
                <span className="relative z-10 group-hover:text-background-dark transition-colors">BUY ME A COFFEE</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3 h-full overflow-hidden">
        {/* Live Terminal - Big */}
        <div className="w-full flex-[1.5] overflow-hidden">
          <LiveTerminal />
        </div>

        {/* Sync Status - Small */}
        <section className="w-full flex-[0.5] bg-background-dark/80 border border-secondary-accent/30 p-6 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-text-light text-2xl sm:text-3xl font-bold font-headline uppercase mb-3">
              SYNC STATUS: <span className="text-primary">CONVERGED</span>
            </h2>
            <p className="text-secondary-accent text-base sm:text-lg font-medium">
              CROSS-PLATFORM SUPPORT: <span className="text-primary font-bold">iOS • ANDROID • DESKTOP • EMBEDDED</span>
            </p>
          </div>
        </section>

        {/* Get Started CTA - Medium */}
        <section className="w-full flex-[1] bg-background-dark/80 border border-primary/50 p-6 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 z-0 opacity-20"></div>
          <div className="relative z-10 text-center flex flex-col items-center gap-5 w-full max-w-lg">
            <h2 className="text-text-light text-3xl sm:text-4xl font-black tracking-tighter font-headline uppercase">
              <span className="text-primary">[INITIATE]</span> AHENK PROTOCOL
            </h2>
            <p className="max-w-xl text-secondary-accent text-base sm:text-lg font-bold">
              BATTERIES-INCLUDED SYNC INFRASTRUCTURE.
              <br />
              CARGO ADD:{" "}
              <span className="blinking-cursor text-primary">ahenk</span>
            </p>
            <Link href="/docs" className="flex min-w-[120px] w-full max-w-xs cursor-pointer items-center justify-center h-14 px-6 bg-primary text-background-dark text-lg font-extrabold uppercase hover:opacity-90 transition-opacity border-none shadow-none">
              <span className="truncate">GET STARTED</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
