const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-background-dark/80 backdrop-blur-sm z-50 py-2 px-4 flex justify-between items-center border-t border-secondary-accent/20">
      <div className="flex items-center gap-2 text-secondary-accent text-xs uppercase font-code">
        <div className="size-3 text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" width="14" x="5" y="5"></rect>
          </svg>
        </div>
        <p>DATA STREAM // ENCRYPTED</p>
      </div>
      <div className="flex items-center gap-4 text-xs text-secondary-accent font-code">
        <span className="hidden sm:inline">
          2024 HARMONIZE. // <span className="text-primary">CONFIDENTIAL</span>
        </span>
        <a
          className="hover:text-primary transition-colors uppercase font-bold"
          href="#"
        >
          TERMS
        </a>
        <a
          className="hover:text-primary transition-colors uppercase font-bold"
          href="#"
        >
          PRIVACY
        </a>
      </div>
    </footer>
  );
};

export default Footer;
