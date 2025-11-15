import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/main-content";

export default function Home() {
  return (
    <>
      <div className="surveillance-grid-overlay"></div>
      <div className="scanlines fixed inset-0 z-20 pointer-events-none"></div>
      <div className="grainy-overlay"></div>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
