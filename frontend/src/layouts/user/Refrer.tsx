import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DonateButton from "../user/Buttton.tsx";
import FeatureSlider from "../user/Slide.tsx"


// ─── NAVBAR ─────────────────────────────────────────




const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About Us", "Our Work", "Gallery", "Blog", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#dde8e6] shadow-md" : "bg-transparent"
      }`}
    >
    <div className="w-full flex items-center justify-between px-2 py-1">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/icon.png"
            alt="logo"
            className="h-14 md:h-16"
          />

          <span className="font-semibold text-lg  text-[#E2B4A3] ">
            Care Circle Charitable Trust
          </span>
        </div>

        {/* Desktop Menu */}
       <nav className="hidden md:flex items-center gap-6">
  {links.map((item) => (
    <a
      key={item}
      href="#"
      className="text-[#339B95] font-bold hover:text-[#E2B4A3]"
    >
      {item}
    </a>
  ))}

  {/* Sign In Dropdown */}
  <div className="relative group">
  {/* Main Button */}
  <button className="text-[#339B95] font-bold px-5 py-2 rounded-full hover:bg-[#E2B4A3] transition-colors">
    Sign Up
  </button>

  {/* 1. Removed mt-2 and added pt-2 
      2. The container now starts exactly where the button ends 
  */}
  <div className="absolute right-0 pt-2 hidden group-hover:block">
    <div className="flex flex-col bg-white shadow-xl rounded-lg w-52 p-2 border border-gray-100">
      <button 
        className="w-full text-left px-4 py-2.5 mb-1 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all"
      >
        Register as User
      </button>

      <button 
        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all"
      >
        Register as Volunteer
      </button>
    </div>
  </div>
</div>

  {/* Sign Up Dropdown */}
   <div className="relative group">
  {/* Main Button */}
  <button className="text-[#339B95] font-bold px-5 py-2 rounded-full hover:bg-[#E2B4A3] transition-colors">
    Sign Up
  </button>

  {/* 1. Removed mt-2 and added pt-2 
      2. The container now starts exactly where the button ends 
  */}
  <div className="absolute right-0 pt-2 hidden group-hover:block">
    <div className="flex flex-col bg-white shadow-xl rounded-lg w-52 p-2 border border-gray-100">
      <button 
        className="w-full text-left px-4 py-2.5 mb-1 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all"
      >
        Register as User
      </button>

      <button 
        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all"
      >
        Register as Volunteer
      </button>
    </div>
  </div>
</div>


      <DonateButton onClick={() => console.log("Donation started!")} />
 


 
</nav>
        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#dde8e6] border-t">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 font-medium hover:text-[#2d8c84]"
              >
                {item}
              </a>
            ))}

            <button className="bg-[#2d8c84] text-white py-2 rounded-full">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// ─── HERO SECTION ───────────────────────────────────

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#dde8e6]"
      style={{
        minHeight: "calc(100vh - 70px)",
      }}
    >
      {/* Teal Shape */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: "25%",
          height: "180px",
          background:
            "linear-gradient(135deg,#2d8c84 0%,#3a9e95 60%,transparent 100%)",
          borderBottomRightRadius: "60% 80%",
        }}
      />

      {/* Secondary Shape */}
      <div
        className="absolute top-0 left-0 opacity-40"
        style={{
          width: "27%",
          height: "200px",
          background:
            "linear-gradient(135deg,#2d8c84 0%,#3a9e95 60%,transparent 100%)",
          borderBottomRightRadius: "60% 80%",
        }}
      />

      {/* Right Shape */}
      <div
        className="absolute"
        style={{
          right: "10%",
          top: "18%",
          width: 480,
          height: 420,
          background:
            "radial-gradient(ellipse at 40% 40%, #e8b5a2 0%, #e8b5a2 60%, transparent 100%)",
          borderRadius: "30% 30% 65% 65% / 50% 40% 45% 60%",
          opacity: 0.85,
        }}
      />

      {/* Content */}
      
     
   
      <section className="py-20">
        <FeatureSlider />
      </section>

      {/* Other sections */}
   


    </section>
  );
};

// ─── ROOT APP ───────────────────────────────────────

export default function App3() {
  return (
    <>
   
      <Navbar />
      <Hero />
    </>
  );
}