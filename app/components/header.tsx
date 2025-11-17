const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background-dark/95 backdrop-blur-sm z-50 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-secondary-accent/20">
      <div className="flex items-center gap-2 text-text-light">
        <div className="size-5 sm:size-6 text-primary animate-pulse">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
        </div>
        <h2 className="text-text-light text-sm sm:text-base md:text-lg font-bold tracking-wide sm:tracking-widest font-headline uppercase">
          <span className="blinking-cursor">AHENK</span>
          <span className="hidden sm:inline text-primary ml-2">// ONLINE</span>
        </h2>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 text-xs font-code uppercase">
        <span className="hidden lg:inline text-secondary-accent">
          STATUS: <span className="text-primary">SYNCHRONIZED</span>
        </span>
        <span className="text-neon-pink border border-neon-pink px-2 py-1 text-[10px] sm:text-xs font-bold">[P2P]</span>
      </div>
    </header>
  );
};

export default Header;
