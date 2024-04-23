// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

// function TeamSection({images: developers}) {
//     return (
//         <div>
//             <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
//                 <br />
//                 <br />
//                 <br />
//                 <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//                     <h2 className="h2 mb-4">
//                         Our{" "}
//                         <span className="text-[color:var(--secondary-color)]">
//                             super cool
//                         </span>{" "}
//                         Team
//                     </h2>
//                 </div>
//                 <div className="mt-10 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
//                     {developers?.map((developer) => (
//                         <div key={developer?.id} className="flex flex-col">
//                             <div className="flex-shrink-0">
//                                 <Image
//                                     className="rounded-lg shadow-md w-full h-64 object-cover"
//                                     src={developer?.src}
//                                     alt={developer?.title}
//                                     width={500}
//                                     height={500}
//                                     cover
//                                 />
//                             </div>
//                             <div className="flex-1 flex flex-col justify-between">
//                                 <div className="mt-4">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         {developer?.title}
//                                     </h3>
//                                     <p className="mt-2 text-base text-gray-500">
//                                         {developer?.role}
//                                     </p>
//                                 </div>
//                                 <div className="mt-6 flex-grow flex items-center">
//                                     <div className="flex space-x-3">
//                                         {developer?.githubUrl && (
//                                             <a
//                                                 href={developer?.githubUrl}
//                                                 className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
//                                                 target="_blank"
//                                             >
//                                                 <span className="sr-only">
//                                                     GitHub
//                                                 </span>
//                                                 <FaGithub className="h-6 w-6" />
//                                             </a>
//                                         )}
//                                         {developer?.linkedinUrl && (
//                                             <a
//                                                 href={developer?.linkedinUrl}
//                                                 className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
//                                                 target="_blank"
//                                             >
//                                                 <span className="sr-only">
//                                                     LinkedIn
//                                                 </span>
//                                                 <FaLinkedin className="h-6 w-6" />
//                                             </a>
//                                         )}
//                                         {developer?.websiteUrl && (
//                                             <a
//                                                 href={developer?.websiteUrl}
//                                                 className="text-gray-500 hover:text-[color:var(--darker-secondary-color)] transition-all ease-in-out"
//                                                 target="_blank"
//                                             >
//                                                 <span className="sr-only">
//                                                     Personal Website
//                                                 </span>
//                                                 <FaLink className="h-6 w-6" />
//                                             </a>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TeamSection;
import Image from 'next/image'; // Import Image component from Next.js
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 text-black">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-10 px-10">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Navigation</h1>
              <div className="mt-2">
                <p className="text-lg font-normal " >Home</p>
                <p className="text-lg font-normal">About Us</p>
                <p className="text-lg font-normal">Contact</p>
                <p className="text-lg font-normal">FAQs</p>
              </div>
            </div>

            <div className="flex flex-col">
              <Image src="/suplogo.png" alt="Logo" width={150} height={70} className="rounded-lg" />
              <h1 className="text-2xl font-semibold mt-4">Event Management</h1>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Connect With Us On Social Media</h1>
              <div className="mt-2 flex flex-col space-x-4 items-start">
                <a href="#" className="text-lg font-normal flex items-center"><FaFacebook className="mr-2" />Facebook</a> <br/>
                <a href="#" className="text-lg font-normal flex items-center"><FaTwitter className="mr-2" />Twitter</a> <br/>
                <a href="#" className="text-lg font-normal flex items-center"><FaLinkedin className="mr-2" />LinkedIn</a> <br/>
                <a href="#" className="text-lg font-normal flex items-center"><FaInstagram className="mr-2" />Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
              <p className="text-sm">Copyright 2024 Supreme, Event Management. All rights reserved.</p>
              <div className="flex space-x-6">
                <p className="text-sm">Terms of Service</p>
                <p className="text-sm">Privacy Policy</p>
                <p className="text-sm">Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
