const MainContent = () => {
  return (
    <main className="grid grid-cols-6 grid-rows-6 h-full w-full gap-2 p-4 pt-16 pb-16 relative z-30">
      <section className="col-span-3 row-span-2 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
        <div className="relative z-10 flex flex-col h-full">
          <h1 className="text-text-light text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl font-headline uppercase mb-2">
            <span className="text-primary">[TARGET LOCK]</span> // SYNC PROTOCOL
          </h1>
          <p className="text-secondary-accent text-sm md:text-base mb-4 flex-grow">
            DATA INTEGRITY: CRITICAL. OFFLINE_BUFFER: 0x00_EMPTY.
            <br />
            INITIATING REALTIME CONVERGENCE.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="flex w-full sm:w-auto items-center justify-center h-10 px-4 bg-primary text-background-dark text-sm font-extrabold uppercase hover:opacity-90 transition-opacity border-none">
              <span className="truncate">DEPLOY SECURE LINK</span>
            </button>
            <button className="flex w-full sm:w-auto items-center justify-center h-10 px-4 bg-background-dark text-primary text-sm font-extrabold uppercase border border-primary hover:bg-primary/20 transition-colors">
              <span className="truncate">ACCESS LOGS</span>
            </button>
          </div>
        </div>
      </section>
      <section className="col-span-3 row-span-3 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10"></div>
        <div className="flex items-center gap-2 p-1 bg-primary/10 border-b border-primary/30 mb-2 relative z-10">
          <div className="w-2 h-2 bg-primary animate-pulse"></div>
          <div className="w-2 h-2 bg-primary"></div>
          <div className="w-2 h-2 bg-primary"></div>
          <span className="text-xs text-primary ml-auto uppercase">
            STATUS::STREAM_ACTIVE
          </span>
        </div>
        <div className="flex-grow overflow-y-auto text-left font-code text-xs text-text-light/90 relative z-10 p-2">
          <pre>
            <code className="language-bash">
              &gt; TARGET_ID: ALPHA-07
              <br />
              &gt; STATUS: ACQUIRING...
              <br />
              [00:12:01] &lt;SYSTEM&gt; USER 1::OUT_OF_RANGE.
              <br />
              [00:12:05] &lt;SYSTEM&gt; PING :: 192.168.1.101 (OFFLINE)
              <br />
              [00:12:10] &lt;SYSTEM&gt; USER 2::AUTH_SUCCESS.
              <br />
              [00:12:12] &lt;SYSTEM&gt; PULL :: DATA_CHUNK_001
              <br />
              [00:12:15] &lt;SYSTEM&gt; MERGE_INIT::CRDT.
              <br />
              <span className="text-primary font-bold">
                [00:12:18] &lt;ALERT&gt; CONFLICT_VECTOR_DETECTED. STATUS:
                0x00_WARNING.
              </span>
              <br />
              <span className="text-primary font-bold">
                [00:12:20] &lt;SYSTEM&gt; AUTO_RESOLVE::PENDING.
              </span>
            </code>
          </pre>
        </div>
      </section>
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
              <div className="w-16 h-16 border-2 border-primary absolute bottom-1/4 right-1/4 animate-pulse"></div>
              <div className="w-8 h-8 rounded-full border border-primary absolute top-[10%] right-[10%]"></div>
              <span className="absolute top-[calc(10%+1rem)] right-[calc(10%+1rem)] text-primary text-xs font-code">
                TARGET-A
              </span>
              <div className="w-2 h-2 rounded-full bg-primary absolute bottom-[20%] left-[20%]"></div>
            </div>
          </div>
          <p className="text-xs text-secondary-accent mt-2 font-code uppercase">
            IMAGER-SCAN // AREA-7 //{" "}
            <span className="text-primary">ANOMALY DETECTED</span>
          </p>
        </div>
      </section>
      <section className="col-span-3 row-span-1 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-transparent z-0 opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-text-light text-xl font-bold font-headline uppercase mb-1">
            DATA FLOW: <span className="text-primary">FRAGMENTED</span>
          </h2>
          <p className="text-secondary-accent text-sm">
            PROTOCOL EFFICIENCY AT <span className="text-primary">47%</span>.
            RESOLUTION REQUIRED.
          </p>
        </div>
      </section>
      <section className="col-span-2 row-span-2 bg-background-dark/80 border border-secondary-accent/30 p-4 flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10"></div>
        <h2 className="text-text-light text-xl font-bold font-headline uppercase border-b border-secondary-accent/20 pb-2 mb-2 relative z-10">
          MODULES // ACTIVE
        </h2>
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="size-8 bg-primary text-background-dark flex-shrink-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-base"
                data-icon="alt_route"
              ></span>
            </div>
            <div>
              <h3 className="text-text-light text-base font-bold font-headline uppercase">
                SECURE_CHANNEL
              </h3>
              <p className="text-secondary-accent text-xs leading-tight">
                ENCRYPTED DATA STREAM. ZERO_CONFLICT GUARANTEE.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-8 bg-primary text-background-dark flex-shrink-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-base"
                data-icon="cloud_off"
              ></span>
            </div>
            <div>
              <h3 className="text-text-light text-base font-bold font-headline uppercase">
                AUTONOMOUS_MODE
              </h3>
              <p className="text-secondary-accent text-xs leading-tight">
                OPERATIONAL OFFLINE. LOCAL CACHE // PRIORITY.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-8 bg-primary text-background-dark flex-shrink-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-base"
                data-icon="hub"
              ></span>
            </div>
            <div>
              <h3 className="text-text-light text-base font-bold font-headline uppercase">
                LEGACY_INTEGRATION
              </h3>
              <p className="text-secondary-accent text-xs leading-tight">
                COMPATIBILITY LAYER // ESTABLISHED.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-4 row-span-2 bg-background-dark/80 border border-primary/50 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 z-0 opacity-20"></div>
        <div className="relative z-10 text-center flex flex-col items-center gap-3 w-full max-w-lg">
          <h2 className="text-text-light text-2xl md:text-3xl font-black tracking-tighter font-headline uppercase">
            <span className="text-primary">[INITIATE]</span> HARMONY PROTOCOL
          </h2>
          <p className="max-w-xl text-secondary-accent text-sm font-bold">
            SECURE CONVERGENCE. DEPLOY CONFLICT-FREE.
            <br />
            ACTIVATION CODE:{" "}
            <span className="blinking-cursor">XXXX-XXXX-XXXX</span>
          </p>
          <button className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center h-12 px-5 bg-primary text-background-dark text-base font-extrabold uppercase hover:opacity-90 transition-opacity border-none shadow-none">
            <span className="truncate">DEPLOY NOW</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
