import Link from "next/link";
import LiveTerminal from "./live-terminal";
import HyperText from "./hyper-text";

const MainContent = () => {
  return (
    <main className="grid grid-cols-6 grid-rows-6 h-full w-full gap-2 p-4 pt-16 pb-16 relative z-30">
      <section className="col-span-3 row-span-2 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
        <div className="relative z-10 flex flex-col h-full">
          <h1 className="text-text-light text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl font-headline uppercase mb-2">
            <span className="text-primary">[DISTRIBUTED SYNC]</span> // CONFLICT-FREE PROTOCOL
          </h1>
          <p className="text-secondary-accent text-sm md:text-base mb-4 flex-grow">
            RUST-POWERED P2P • CRDT-BASED • OFFLINE-FIRST ARCHITECTURE.
            <br />
            CROSS-PLATFORM DATABASE SYNCHRONIZATION.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="https://github.com/Ru1vly/nexus-core" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center h-10 px-4 bg-primary text-background-dark text-sm font-extrabold uppercase hover:opacity-90 transition-opacity border-none">
              <span className="truncate">VIEW ON GITHUB</span>
            </a>
            <Link href="/docs" className="flex w-full sm:w-auto items-center justify-center h-10 px-4 bg-background-dark text-primary text-sm font-extrabold uppercase border border-primary hover:bg-primary/20 transition-colors">
              <span className="truncate">READ DOCS</span>
            </Link>
          </div>
        </div>
      </section>
      <LiveTerminal />
      <section className="col-span-3 row-span-2 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10"></div>
        <div className="relative w-full h-full flex flex-col justify-center items-center p-4 z-10">
          <div className="relative w-full h-full flex items-center justify-center border border-secondary-accent/40 bg-secondary-accent/5 overflow-hidden">
            <img
              alt="Low-res camera feed"
              className="w-full h-full object-cover grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5kzYqdHRwl2_0b9GA7WFMxBWtel8Az9Ks7qtznbUvCfbYyr8xO5jjb5woHTYuhzQc0uma66hokyjrBcSHOsQ3ZO0fI6XYdabypfaBv8NC40fyeaAqAy0xhcBsMEJLuFar2ms1UVVtGZwcs-uQeaorvKlBPd9cB4o9CCMol4rvFUIDE5ZRqe7RTL2MRtOVdO2lIFJjoh88AzR47oD0rddq_DfAfhIxQtmCK89nkxeR11LedilEUfc3iyjEa9M48IIzISaa46bWpCz8"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-primary absolute top-1/4 left-1/4 animate-pulse"></div>
              <div className="w-16 h-16 border-2 border-neon-pink absolute bottom-1/4 right-1/4 animate-pulse" style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)' }}></div>
              <div className="w-8 h-8 rounded-full border border-primary absolute top-[10%] right-[10%]"></div>
              <span className="absolute top-[calc(10%+1rem)] right-[calc(10%+1rem)] text-primary text-xs font-code">
                TARGET-A
              </span>
              <div className="w-2 h-2 rounded-full bg-neon-pink absolute bottom-[20%] left-[20%]"></div>
            </div>
          </div>
          <p className="text-xs text-secondary-accent mt-2 font-code uppercase">
            NETWORK-MAP // PEER-MESH //{" "}
            <span className="text-primary">6 NODES ACTIVE</span>
          </p>
        </div>
      </section>
      <section className="col-span-3 row-span-1 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-text-light text-xl font-bold font-headline uppercase mb-1">
            SYNC STATUS: <span className="text-primary">CONVERGED</span>
          </h2>
          <p className="text-secondary-accent text-sm">
            CROSS-PLATFORM SUPPORT: <span className="text-primary">iOS • ANDROID • DESKTOP • EMBEDDED</span>
          </p>
        </div>
      </section>
      <section className="col-span-2 row-span-2 bg-background-dark/80 border border-neon-pink/30 p-4 flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/5 to-transparent z-0 opacity-10"></div>
        <h2 className="text-text-light text-xl font-bold font-headline uppercase border-b border-neon-pink/20 pb-2 mb-2 relative z-10">
          CREDITS // SYSTEM
        </h2>
        <div className="relative z-10 flex flex-col gap-4 items-center justify-center flex-grow text-center">
          <div className="flex flex-col gap-2">
            <p className="text-text-light text-sm font-code">
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
            <p className="text-neon-pink text-lg font-headline animate-pulse">
              &#x3C;3
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-secondary-accent text-xs font-code uppercase">
              CONSIDER A DONATION
            </p>
            <a
              href="https://buymeacoffee.com/ru1vly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary text-primary font-bold font-code text-xs uppercase hover:bg-primary hover:text-background-dark transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              <svg
                className="size-4 relative z-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"/>
              </svg>
              <span className="relative z-10 group-hover:text-background-dark transition-colors">BUY ME A COFFEE</span>
            </a>
          </div>
        </div>
      </section>
      <section className="col-span-4 row-span-2 bg-background-dark/80 border border-primary/50 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 z-0 opacity-20"></div>
        <div className="relative z-10 text-center flex flex-col items-center gap-3 w-full max-w-lg">
          <h2 className="text-text-light text-2xl md:text-3xl font-black tracking-tighter font-headline uppercase">
            <span className="text-primary">[INITIATE]</span> AHENK PROTOCOL
          </h2>
          <p className="max-w-xl text-secondary-accent text-sm font-bold">
            BATTERIES-INCLUDED SYNC INFRASTRUCTURE.
            <br />
            CARGO ADD:{" "}
            <span className="blinking-cursor">ahenk</span>
          </p>
          <Link href="/docs" className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center h-12 px-5 bg-primary text-background-dark text-base font-extrabold uppercase hover:opacity-90 transition-opacity border-none shadow-none">
            <span className="truncate">GET STARTED</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
