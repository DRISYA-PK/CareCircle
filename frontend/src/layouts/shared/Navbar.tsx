// ─── NAVBAR ─────────────────────────────────────────
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DonateButton from '../../features/home/components/DonateButton';
import { useNavigate } from 'react-router-dom';
import { HOME_LINKS } from '../../constant/homeLink';
type NavbarProps = {
  isHomePage?: boolean;
  onUserLoginClick?: (setModalType:string) => void;
};
type NavLink = {
  name: string;
  path: string;
};

export const Navbar: React.FC<NavbarProps> = ({
  isHomePage = false,
  onUserLoginClick
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();



const [showSignInOptions, setShowSignInOptions] = useState<boolean>(false);
// add this state with your other useState
const [showSignUpOptions, setShowSignUpOptions] = useState<boolean>(false);

  const links: NavLink[] = isHomePage ? HOME_LINKS : [];

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#dde8e6] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex items-center justify-between px-2 py-1">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/icon.png" alt="logo" className="h-14 md:h-16" />

          <span className="font-semibold text-lg  text-[#C96B3C]">
            Care Circle Charitable Trust
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ name }) => (
            <a
              key={name}
              href="#"
              className="text-[#339B95] font-bold hover:text-[#E2B4A3]"
            >
              {name}
            </a>
          ))}

          {/* Sign In Dropdown */}
          <div className="relative group">
            {/* Main Button */}
            <button className="text-[#339B95] font-bold px-5 py-2 rounded-full hover:bg-[#E2B4A3] transition-colors">
              Sign In
            </button>

            {/* 1. Removed mt-2 and added pt-2 
      2. The container now starts exactly where the button ends 
  */}
            <div className="absolute right-0 pt-2 hidden group-hover:block">
              <div className="flex flex-col bg-white shadow-xl rounded-lg w-52 p-2 border border-gray-100">
                <button
                  className="w-full text-left px-4 py-2.5 mb-1 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all"
                  onClick={() => {
                    setOpen(false);
                    onUserLoginClick?.("sigIn");
                  }}
                >
                  SignIn as User""
                </button>

                <button className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all">
                  SignIn as Volunteer
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
                    onClick={() => {
                    setOpen(false);
                    onUserLoginClick?.("signUp");
                  }}
                >
                  Login as User
                </button>

                <button className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-[#E2B4A3] hover:text-white rounded-md transition-all">
                  Login as Volunteer
                </button>
              </div>
            </div>
          </div>

          <DonateButton onClick={() => console.log('Donation started!')} />
        </nav>
        {/* Mobile Button */}
     <button
  className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-white/50 text-[#2d8c84] hover:bg-[#2d8c84] hover:text-white transition-all duration-300"
  onClick={() => setOpen(!open)}
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>
      </div>

      {/* Mobile Menu */}
    {/* Mobile Menu */}
{open && (
  <div className="md:hidden fixed inset-0 z-[100] bg-white">
    {/* Top bar */}
    <div className="flex items-center justify-between px-4 h-[72px] border-b border-gray-200">
   <div className="flex items-center gap-2 min-w-0">
    <img
      src="/assets/icon.png"
      alt="Care Circle Logo"
      className="h-12 w-12 object-contain"
    />

    <span className="text-[#C96B3C] font-semibold text-sm leading-tight">
      Care Circle
      <br />
      Charitable Trust
    </span>
  </div>

      <button
        onClick={() => setOpen(false)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f3f7f7] text-[#2d8c84]"
      >
        <X size={24} />
      </button>
    </div>

    {/* Menu Content */}
    <div className="h-[calc(100vh-72px)] overflow-y-auto px-5 py-5 space-y-5">
      {/* Nav Links */}
      <div className="space-y-2">
        {links.map(({ name }) => (
          <button
            key={name}
            className="w-full flex items-center justify-between px-4 py-4 rounded-2xl text-left text-gray-700 font-semibold hover:bg-[#f4f7f7] transition"
          >
            <span>{name}</span>
            <span className="text-[#2d8c84]">›</span>
          </button>
        ))}
      </div>

      {/* Sign In */}
      <div className="rounded-2xl border border-[#d8ece9] bg-[#f8fbfb] p-4">
        <button
          onClick={() => setShowSignInOptions(!showSignInOptions)}
          className="w-full flex items-center justify-between text-[#2d8c84] font-bold"
        >
          <span>Sign In</span>
          <span
            className={`transition-transform duration-300 ${
              showSignInOptions ? 'rotate-180' : ''
            }`}
          >
            ▼
          </span>
        </button>

        {showSignInOptions && (
          <div className="mt-3 space-y-2">
            <button
              className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-100"
              onClick={() => {
                setOpen(false);
                onUserLoginClick?.();
              }}
            >
              Sign In as Usermmmm
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-100">
              Sign In as Volunteer
            </button>
          </div>
        )}
      </div>

      {/* Sign Up */}
      <div className="rounded-2xl border border-[#f0ddd6] bg-[#fff8f6] p-4">
        <button
          onClick={() => setShowSignUpOptions(!showSignUpOptions)}
          className="w-full flex items-center justify-between text-[#E2B4A3] font-bold"
        >
          <span>Sign Up</span>
          <span
            className={`transition-transform duration-300 ${
              showSignUpOptions ? 'rotate-180' : ''
            }`}
          >
            ▼
          </span>
        </button>

        {showSignUpOptions && (
          <div className="mt-3 space-y-2">
            <button
              className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-100"
              onClick={() => {
                setOpen(false);
                navigate('/userSignUp');
              }}
            >
              Sign Up as User
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-100">
              Sign Up as Volunteer
            </button>
          </div>
        )}
      </div>

      {/* Donate */}
      <button
        className="w-full py-4 rounded-2xl bg-[#2d8c84] text-white font-bold"
        onClick={() => console.log('Donation started!')}
      >
        Donate Now
      </button>
    </div>
  </div>
)}
    </header>
  );
};
