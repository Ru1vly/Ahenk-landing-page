const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background-dark/80 backdrop-blur-sm z-50 flex items-center justify-between px-4 py-2 border-b border-secondary-accent/20">
      <div className="flex items-center gap-2 text-text-light">
        <div className="size-5 text-primary animate-pulse">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
        </div>
        <h2 className="text-text-light text-base font-bold tracking-widest font-headline uppercase">
          <span className="blinking-cursor">AHENK-CLI</span> //{" "}
          <span className="text-primary">ONLINE</span>
        </h2>
      </div>
      <div className="flex items-center gap-4 text-xs font-code uppercase">
        <span className="hidden sm:inline">
          PEER: AHENK-NODE // STATUS: SYNCHRONIZED
        </span>
        <span className="text-neon-pink border border-neon-pink px-2 py-1">[P2P]</span>
      </div>
    </header>
  );
};

export default Header;
