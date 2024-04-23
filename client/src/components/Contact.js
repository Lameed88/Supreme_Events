// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


// const contact = () => {
//   return (
//     <div className="">
//       <div className="bg-[#c9c8c8]">
//         <div className="flex flex-row ">
//           <img src="/contactPic.png" alt="contact" width={'820px'} />
//           <div className="flex flex-row items-center">
//             <p className="text-[50px] font-bold ml-40 ">Contact</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[rgb(153,156,161)] flex flex-row justify-center py-[40px] ">
//         <div className="flex flex-col w-[365px] gap-10 ">
//           <h1 className="text-[30px] font-semibold">Let's talk with us</h1>
//           <p>
//             Questions, comments, or suggestions? Simply fill in the form and
//             we’ll be in touch shortly.
//           </p>

//           <div className="flex flex-col gap-13 md:gap-23 gap-5">

//           <div>
//   <div className="flex gap-4 items-center text-011334" style={{ color: "purple" }}>
//     <FontAwesomeIcon icon={faMapMarkerAlt} />
//     <p>No 6, Babaegbe street, off Ekoro road, Abule Egba, Lagos State.</p>
//   </div>
//   <div className="flex gap-4 items-center text-011334" style={{ color: "purple" }}>
//     <FontAwesomeIcon icon={faPhone} />
//     <p>+234 8031861169</p>
//   </div>
//   <div className="flex gap-4 items-center text-011334" style={{ color: "purple" }}>
//     <FontAwesomeIcon icon={faEnvelope} />
//     <p>moradeyor88@gmail.com</p>
//   </div>
// </div>
//             {/* <div className="flex gap-4 text-011334">
//               <p size="25px" color="purple" />
//               No 6, Babaegbe street, off Ekoro road, Abule Egba, Lagos State.
//             </div>
//             <div className="flex gap-4 text-011334">
//               <p color="purple" /> +234 8031861169
//             </div>
//             <div className="flex gap-4 text-011334">
//               <p color="purple" /> moradeyor88@gmail.com
//             </div> */}
//           </div>
//         </div>
//         <div className=" ml-[40px] bg-gray-300 h-[565px]   md:w-[565px] lg:w-50% rounded-[10px] border-black border-2 shadow-2xl  ">
//           <div className="flex flex-col justify-center gap-[20px]">
//             <div className="flex flex-row justify-center ">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="md:text-lg mt-[50px]  bg-white p-2 border-black w-[222px] rounded-[5px] "
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className="md:text-lg mt-[50px] ml-[25px] bg-white p-2 border-black w-[222px] rounded-[5px] "
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Email"
//               className="md:text-lg ml-[40px] bg-white p-2 border-black w-[465px] rounded-[5px] "
//             />
//             <input
//               type="text"
//               placeholder="Phone number"
//               className="md:text-lg ml-[40px] bg-white p-2 border-black w-[465px] rounded-[5px] "
//             />

//             <textarea
//               placeholder="Type your Message"
//               className="md:text-lg ml-[40px] bg-white h-[140px] border-black w-[465px] rounded-[5px] "
//             />

//             <button className="transition-all duration-1000 bg-blue-500 hover:bg-blue-700 text-white md:text-lg h-22px md:h-45px w-260px ml-[40px] rounded-[10px] md:w-[465px] p-2 mt-[40px]">
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default contact;


const contact = () => {
  return (
    <div className="">
      <div className="bg-[#c9c8c8]">
        <div className="flex flex-row ">
          <img src="/contactPic.png" alt="contact" width={'820px'} />
          <div className="flex flex-row items-center">
            <p className="text-[50px] font-bold ml-40 ">Contact</p>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(153,156,161)] flex flex-row justify-center py-[40px] ">
        <div className="flex flex-col w-[365px] gap-10 ">
          <h1 className="text-[30px] font-semibold">Let's talk with us</h1>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>

          <div className="flex flex-col gap-13 md:gap-23 gap-5">
            <div className="flex gap-4 text-011334">
              <p size="25px" color="purple" />
              No 6, Babaegbe street, off Ekoro road, Abule Egba, Lagos State.
            </div>
            <div className="flex gap-4 text-011334">
              <p color="purple" /> +234 8031861169
            </div>
            <div className="flex gap-4 text-011334">
              <p color="purple" /> moradeyor88@gmail.com
            </div>
          </div>
        </div>
        <div className=" ml-[40px] bg-gray-300 h-[565px]   md:w-[565px] lg:w-50% rounded-[10px] border-black border-2 shadow-2xl  ">
          <div className="flex flex-col justify-center gap-[20px]">
            <div className="flex flex-row justify-center ">
              <input
                type="text"
                placeholder="First name"
                className="md:text-lg mt-[50px]  bg-white p-2 border-black w-[222px] rounded-[5px] "
              />
              <input
                type="text"
                placeholder="Last name"
                className="md:text-lg mt-[50px] ml-[25px] bg-white p-2 border-black w-[222px] rounded-[5px] "
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              className="md:text-lg ml-[40px] bg-white p-2 border-black w-[465px] rounded-[5px] "
            />
            <input
              type="text"
              placeholder="Phone number"
              className="md:text-lg ml-[40px] bg-white p-2 border-black w-[465px] rounded-[5px] "
            />

            <textarea
              placeholder="Type your Message"
              className="md:text-lg ml-[40px] bg-white h-[140px] border-black w-[465px] rounded-[5px] "
            />

            <button className="transition-all duration-1000 bg-blue-500 hover:bg-blue-700 text-white md:text-lg h-22px md:h-45px w-260px ml-[40px] rounded-[10px] md:w-[465px] p-2 mt-[40px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;