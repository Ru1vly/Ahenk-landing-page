import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-background-dark/95 backdrop-blur-sm z-50 py-3 px-4 sm:px-6 flex justify-between items-center border-t border-secondary-accent/20">
      <div className="flex items-center gap-2 text-secondary-accent text-xs uppercase font-code">
        <div className="size-3 sm:size-4 text-neon-pink animate-pulse">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" width="14" x="5" y="5"></rect>
          </svg>
        </div>
        <p className="text-xs sm:text-sm">
          <span className="text-neon-pink font-bold">ACTIVE</span>
          <span className="hidden sm:inline text-secondary-accent ml-2">// P2P SYNC</span>
        </p>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 text-xs text-secondary-accent font-code">
        <span className="hidden lg:inline">
          2024 AHENK // <span className="text-primary">OPEN SOURCE</span>
        </span>
        <a
          className="hover:text-primary transition-colors uppercase font-bold"
          href="https://github.com/Ru1vly/nexus-core"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <Link
          className="hover:text-primary transition-colors uppercase font-bold"
          href="/docs"
        >
          DOCS
        </Link>
        <a
          className="hover:text-primary transition-colors uppercase font-bold hidden md:inline"
          href="https://github.com/Ru1vly/nexus-core/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          LICENSE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
