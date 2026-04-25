

// import { Navbar } from "../../../layouts/shared/Navbar"
// import { Hero } from "../../../layouts/shared/Hero"
// import HeroSlide from "../components/HeroSlide"


// export default function HomePage(){
//   return(
//   <>
//     <Navbar isHomePage={true}/>
//     <Hero Content={HeroSlide}/>
   
//     </>

//   )

// }
import { useEffect, useState } from "react";
import { Navbar } from "../../../layouts/shared/Navbar"
import { Hero } from "../../../layouts/shared/Hero"
import HeroSlide from "../components/HeroSlide"
import { SignIn } from "../../auth/components/user/SignIn";
import { SignUp } from "../../auth/components/user/SignUp";

export default function HomePage() {

 const [showLoginModal, setShowLoginModal] = useState(false);
 const [modalType,setModalType]=useState('login')
useEffect(() => {
  if (showLoginModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showLoginModal]);


  
 

  return (
    <>
      {/* Blur the page when modal is open */}
      <div
        className={`transition-all duration-300 ${
          showLoginModal ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <Navbar
          isHomePage={true}
          onUserLoginClick={(modaltype:string) => {
            setModalType(modaltype)
            setShowLoginModal(true)
          }}

        />

        <Hero Content={HeroSlide} />
      </div>

      {/* Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          {/* click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setShowLoginModal(false)}
          />

          <div
            className="relative z-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLoginModal(false)}
             className="absolute top-5 right-2 z-20 h-9 w-9 rounded-full bg-white shadow-md text-gray-500 hover:text-black flex items-center justify-center"       >
              ✕
            </button>
            {
              modalType==='sigIn'? <SignIn />:<SignUp/>
            }
           
          </div>
        </div>
      )}
    </>
  );
}

