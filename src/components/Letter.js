import React, { useState } from "react";
import image2 from "../Images/WhatsApp Image 2024-04-22 at 22.34.59_a04b678f.jpg";
import { toPng, toJpeg } from "html-to-image";
import download from "downloadjs";
import { Link } from "react-router-dom";



const Letter = () => {
  const [DataEdit, setDateEdit] = useState({
    date: "",
    festival: "",
  });

  const handleClick = (e) => {
    setDateEdit(e.target.value);
  };
  const node = document.getElementById('image-download');

  function downloadImage() {
    toPng(node)
      .then((dataURl) => {
        download(dataURl, "custom-image.png");
      })
      .catch(() => console.log("Error in download"));
  }


  function buttonDownload() {
    toJpeg(node)
      .then((dataURL) => {
        download(dataURL, "notice.jpg");
      })
      .catch(() => console.log("error"));
  }

  
  return (
    <div className="w-100  bg-white">
      <div className="w-100 flex bg-red-700 ps-5 text-white cursor-pointer">
        <h2 className="mt-1">Notice</h2>
        <div className="flex ms-20 mt-3 font-medium">
          <Link className="text-decoration-none" to="/home"><p className="ms-3 text-white no-underline ">All</p></Link>
          <p className="ms-5">Fine</p>
          <p className="ms-5">Information</p>
          <p className="ms-5">Academics</p>
          <p className="ms-5">Holidays</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
            className="download-button mt-10 flex justify-center px-3 py-2 bg-red-700 text-white rounded-lg "
            onClick={downloadImage}
          >
            Download
          </button>
        </div>
      <div className="mt-10 w-auto" id='image-download'>
        <div className="flex absolute mt-44 ms-80" >
          <p className="" style={{margin:"0px 100px"}}>Ref No. :- SVGOI/THEUNIQUES/2024/44</p>
          <input type="date" className="relative ms-32"></input>
        </div>
        <div className="ms-32"><textarea className="absolute mt-80 ml-96 w-96 h-50" rows={5} cols={30}></textarea></div>
        
        

        <div className="w-100 flex justify-center ">
          <img width="700px" className="shadow-xl" src={image2} alt="image"></img>
        </div>

      </div>
       
    </div>
  );
};

export default Letter;