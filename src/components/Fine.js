// import React, { useState } from "react";
// import image2 from "../Images/WhatsApp Image 2024-04-22 at 22.34.59_a04b678f.jpg";
// import { toPng } from "html-to-image";
// import download from "downloadjs";
// import { Link } from "react-router-dom";

// const Letter = () => {
//   const [DataEdit, setDateEdit] = useState({
//     date: "",
//     fine: "",
//     reason:"",
//   });

//   const handleClick = (e) => {
//     setDateEdit(e.target.value);
//   };
//   const node = document.getElementById("image-download");

//   function downloadImage() {
//     toPng(node)
//       .then((dataURl) => {
//         download(dataURl, "Notice.png");
//       })
//       .catch(() => console.log("Error in download"));
//   }
//   return (
//     <div className="w-100  bg-white">
//       <div className="w-100 flex bg-red-700 ps-5 text-white cursor-pointer">
//         <h2 className="mt-1">Notice</h2>
//         <div className="flex ms-20 mt-3 font-medium">
//           <Link className="text-decoration-none" to="/home"><p className="ms-3 text-white no-underline ">All</p></Link>
//           <p className="ms-5">Fine</p>
//           <p className="ms-5">Information</p>
//           <p className="ms-5">Academics</p>
//           <p className="ms-5">Holidays</p>
//         </div>
//       </div>
//       <div className="mt-10 w-auto" id="image-download ">
//         <div className="flex absolute mt-44">
//           <p className="ms-80 mt-3">Ref No. :- SVGOI/THEUNIQUES/2024/44</p>
//           <input type="date" className="relative ms-32"></input>
//         </div>

//         <div className="w-75">
//           <h3 className="absolute mt-64 w-100 ms-96  ps-44">Notification</h3>
//           <p className="absolute mt-80 w-100 ms-96  ps-20 w-80">
//             This is to inform to 
//             <input
//               style={{ width: "100px" }}
//               type="text"
//               placeholder="name"
//               className="input mx-2"
//               value={DataEdit.date}
//               name="date"
//               onChange={handleClick}
//             />
//             a fine of Rs.
//             <input
//               style={{ width: "110px" }}
//               type="text"
//               placeholder="fine amount"
//               className="input mx-2"
//               value={DataEdit.fine}
//               name="fine"
//               onChange={handleClick}
//             /><br/> 
//             has been imposed for the  
//             <input
//               style={{ width: "110px" }}
//               type="text"
//               placeholder="reason"
//               className="input ms-2"
//               value={DataEdit.reason}
//               name="fine"
//               onChange={handleClick}
//             />
//           </p>
//         </div>

//         <div className="w-100 flex justify-center ">
//           <img width="700px" className="shadow-xl" src={image2} alt="image"></img>
//         </div>

//       </div>
//         <button
//           className="download-image flex justify-center bg-red-500 text-white px-2 "
//           onClick={downloadImage}
//         >
//           Download
//         </button>
//     </div>
//   );
// };

// export default Letter;
