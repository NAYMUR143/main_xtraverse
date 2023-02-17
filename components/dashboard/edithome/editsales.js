// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "@mui/material";
// import { Box } from "@mui/system";
// import styled from "@emotion/styled";
// import { IoIosAddCircle, IoIosArrowDropright } from "react-icons/io";
// import { Form } from "../edithome/edithomepage.style";
// const Wrapper = styled.div`
//   width: 500px;
//   margin: auto;
// `;
// const Step = styled.div``;
// const Uploadsc = styled.div`
//   width: 100%;
//   height: 200px;
//   background: transparent;
//   border: 1px solid #fff;
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   margin: 10px 0px 0px;
//   .uparrow {
//     font-size: 3em;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     flex-direction: column;
//     gap: 2px;
//     justify-content: center;
//     align-items: center;
//     span {
//       font-size: 0.4em;
//       display: block;
//       color: rgba(255, 255, 255, 0.6);
//     }
//   }
//   .upldImg {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     img {
//       width: 100%;
//       object-fit: cover;
//     }
//   }
//   input {
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     position: relative;
//     z-index: 2;
//     cursor: pointer;
//   }
// `;

// function Editsales({ handleNext }) {
//   const [selectedImage, setSelectedImage] = useState();

//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };
//   return (
//     <>
//       <Wrapper>
//         <Step>
//           <span>Step 5</span>
//           <h1>Edit Homepage</h1>
//         </Step>
//         <Uploadsc>
//           <div className="uparrow">
//             <IoIosAddCircle />
//             <span>Upload logo</span>
//           </div>
//           <input
//             type="file"
//             id="myFile"
//             name="filename"
//             required
//             onChange={imageChange}
//           />
//           {selectedImage && (
//             <div className="upldImg">
//               <Image
//                 src={URL.createObjectURL(selectedImage)}
//                 width={100}
//                 height={300}
//                 alt="upload logo"
//               />
//               {/* <button onClick={removeSelectedImage}>
//                       <IoIosRemoveCircle />
//                     </button> */}
//             </div>
//           )}
//         </Uploadsc>
//         <Button
//           sx={{
//             background: "#f4b8ec",
//             border: "none",
//             width: "100%",
//             display: "block",
//             padding: "15px ",
//             color: "#000",
//             margin: "15px 0px",
//             "&:hover": {
//               background: "#fff",
//             },
//           }}
//         >
//           Update logo
//         </Button>
//         <Button
//           onClick={handleNext}
//           sx={{
//             background: "transparent",
//             border: "2px solid #fff",
//             width: "100%",
//             display: "block",
//             padding: "12px ",
//             color: "#000",
//             margin: "15px 0px",
//             color: "#fff",
//             "&:hover": {
//               background: "#fff",
//               color: "#000",
//             },
//           }}
//         >
//           Continue
//         </Button>
//       </Wrapper>
//     </>
//   );
// }

// export default Editsales;

import React from "react";

function Editsales() {
  return <div>editsales</div>;
}

export default Editsales;
