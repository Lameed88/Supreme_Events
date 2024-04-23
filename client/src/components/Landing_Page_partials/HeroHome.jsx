// import Image from "next/image";
// function HeroHome() {
//   return (
   
//     <section
//       className="relative"
//       style={{
//         backgroundImage: "url(/heropic.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         zIndex: -1,
//         filter: "blur(0.2px)",
//       }}
//     >
//       <br />
//       <br />
//       <br />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
//         {/* Hero content */}
//         <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <h1 className="h1 m-2">
//               {"su"}
//               <span className="text-[color:var(--darker-secondary-color)]">
//                 PRE
//               </span>
//               {"me"}
//               <p className="mt-3 text-5xl text-white">{"Event Management"}</p>
//             </h1>
//             <p className="text-2xl text-white mb-8">
//               "Bringing Your Events to Life: Simplified Registration, Seamless
//               Management, and Easy Ticketing."
//             </p>

//             {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
//               <div>
//                 <a
//                   href="/users/signin"
//                   className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
//                 >
//                   Signin
//                 </a>
//               </div>
//               <div>
//                 <a
//                   className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
//                   href="/users/signup"
//                 >
//                   Signup
//                 </a>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       </section>
//   );
// }

// export default HeroHome;

import Image from 'next/image'

import { useState, useEffect } from "react";



const images = [
  "/heropic.jpg",
  "/coupon.jpg",
  "/table-5.jpg"
];

function HeroHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (

    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      <br />
      <br />     
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 m-2">
              {"su"}
              <span className="text-[color:var(--darker-secondary-color)]">
                PRE
              </span>
              {"me"}
              <p className="mt-3 text-5xl text-white">{"Event Management"}</p>
            </h1>
            <p className="text-2xl text-white mb-8">
              "Bringing Your Events to Life: Simplified Registration, Seamless
              Management, and Easy Ticketing."
            </p>
          </div>
        </div>
      </div>

    
  </section>
  );
}

export default HeroHome;
