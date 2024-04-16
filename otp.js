// import React from "react";
// // import { useVerifyApiMutation } from "./verifyotpApiSlice";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useVerifyOtpMutation } from "./verifyotpApiSlice";
// import { setCredentials } from "../register/authSlice";
// import { useDispatch } from "react-redux";
// // import olog from "./image/otpnew.png";
// import olog from "../image/otpnew.png";

// const Otp = () => {
//   const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
//   const schema = yup.object().shape({
//     otp_number: yup.number().required("123456"),
//   });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     console.log("data", data);
//     try {
//       const proresult = await verifyOtp(data);
//       console.log("organization result", proresult);
//       navigate("/app/dashboard");
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="text-center">
//         <label> Enter the OTP</label>
//         <input
//           type="text"
//           name="otp_number"
//           className="border ml-2 mt-2 outline-none border-blue-700 h-8 rounded-md p-2"
//           {...register("otp_number")}
//         />
//         {errors.otp_number && (
//           <p className="text-red-600">{errors.otp_number.message}</p>
//         )}
//       </div>
//       <div className="text-center mt-2">
//         <button
//           type="submit"
//           className="border px-3 py-1 rounded-md bg-blue-400 text-white  hover:bg-blue-800"
//         >
//           {" "}
//           Verify OTP
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Otp;

// import React from "react";
// import Otpimage from "../image/otpnew.png";

// import { useVerifyApiMutation } from "./verifyotpApiSlice";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useVerifyOtpMutation } from "./verifyotpApiSlice";
// import { setCredentials } from "../register/authSlice";
// import { useDispatch } from "react-redux";

// const Otp = () => {
//   const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
//   const schema = Yup.object().shape({
//     otp_number: Yup.number().required("123456"),
//   });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     console.log("data", data);

//     try {
//       const proresult = await verifyOtp(data);
//       console.log("organization result", proresult);
//       alert("success");
//       navigate("/app/dashboard");
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex min-h-full h-screen">
//         <div className="flex flex-1 flex-col w-1/2 justify-center border  ">
//           <div className="mx-auto my-10 lg:w-3/5  2xl:w-3/6 lg:w-100 bg-white border rounded-2xl">
//             <div className="grid grid-cols-2">
//               <div className="self-center">
//                 <img src={Otpimage} alt="rlog" />
//               </div>
//               <div className=" bg-white  p-12 rounded-r-2xl">
//                 <h2 className=" text-2xl selfalign-center text-center font-semibold text-black">
//                   OTP-Verification
//                 </h2>
//                 <p className="text-black  font-semiboldtext-sm text-center">
//                   Enter OTP send to Registered Email
//                 </p>
//                 <div class="flex items-center justify-center space-x-4 mt-6">
//                   <input
//                     type="text"
//                     id="digit1"
//                     name="otp_number"
//                     class="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor"
//                     {...register("otp_number")}
//                   />

//                   <input
//                     type="text"
//                     id="digit2"
//                     class="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor"
//                   />
//                   <input
//                     type="text"
//                     class="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor"
//                     id="digit3"
//                   />
//                   <input
//                     type="text"
//                     class="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor "
//                     id="digit4"
//                   />
//                   <input
//                     type="text"
//                     class="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor"
//                     id="digit5"
//                   />
//                   <input
//                     type="text"
//                     class="w-8 h-10 text-center border outline-none focus:border-blue-300 border-gray-300 rounded bg-Otpcolor"
//                     id="digit6"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-black text-center font-semibold">
//                     Did n't receive OTP code?
//                   </p>

//                   <h3 className=" text-center text-blue-500"> Resend Code </h3>
//                 </div>

//                 <div className="text-center mt-3 ">
//                   <button
//                     type="submit"
//                     name="submit"
//                     className="px-3 py-1 bg-blue-600 text-white rounded-md text-center"
//                   >
//                     Verify & Proceed
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Otp;

// OtpPage.js
import React, { useState } from "react";
import { useVerifyOtpMutation } from "./verifyotpApiSlice";

import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [verifyOtp, { isLoading, isError, isSuccess }] = useVerifyOtpMutation();

  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async (data) => {
    console.log("data", data);
    const otpValue = otp.join("");
    verifyOtp(otpValue);
    if (otpValue) {
      navigate("/app/dashboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            name="otp_number"
            // maxLength="1"
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor  ml-2 "
          />
        ))}
      </div>
      <div className="mt-5">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
      {isError && <p>Error sending OTP</p>}
      {isSuccess && <p>OTP sent successfully</p>}
    </div>
  );
};

export default Otp;
