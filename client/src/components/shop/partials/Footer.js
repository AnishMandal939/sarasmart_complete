import React, { Fragment } from "react";
import moment from "moment";
import ScrollToTop from "react-scroll-to-top";

const Footer = (props) => {
  return (
    <Fragment>
       <div className='w-full flex flex-col bg-red-600'>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2'>
                    <div className='flex flex-col p-10 space-y-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1728 1408"><path fill="white" d="M576 1152q0-52-38-90t-90-38t-90 38t-38 90t38 90t90 38t90-38t38-90zM192 640h384V384H418q-13 0-22 9L201 588q-9 9-9 22v30zm1280 512q0-52-38-90t-90-38t-90 38t-38 90t38 90t90 38t90-38t38-90zM1728 64v1024q0 15-4 26.5t-13.5 18.5t-16.5 11.5t-23.5 6t-22.5 2t-25.5 0t-22.5-.5q0 106-75 181t-181 75t-181-75t-75-181H704q0 106-75 181t-181 75t-181-75t-75-181h-64q-3 0-22.5.5t-25.5 0t-22.5-2t-23.5-6t-16.5-11.5T4 1114.5T0 1088q0-26 19-45t45-19V704q0-8-.5-35t0-38t2.5-34.5t6.5-37t14-30.5t22.5-30l198-198q19-19 50.5-32t58.5-13h160V64q0-26 19-45t45-19h1024q26 0 45 19t19 45z" /></svg>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  font-semibold text-lg capitalize'>Express delivery</p>
                            <p className='text-white  capitalize'>Express Delivery on orders all over Nepal</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-10 space-y-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12V21Z" /></svg>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  font-semibold text-lg capitalize'>secure shopping</p>
                            <p className='text-white  capitalize'>We are committed to protecting the security of your information</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-10 space-y-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1376"><path fill="white" d="M1792 928v192q0 13-9.5 22.5t-22.5 9.5H384v192q0 13-9.5 22.5T352 1376q-12 0-24-10L9 1046q-9-9-9-22q0-14 9-23l320-320q9-9 23-9q13 0 22.5 9.5T384 704v192h1376q13 0 22.5 9.5t9.5 22.5zm0-544q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5T1408 704V512H32q-13 0-22.5-9.5T0 480V288q0-13 9.5-22.5T32 256h1376V64q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z" /></svg>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  font-semibold text-lg capitalize'>easy returns</p>
                            <p className='text-white  capitalize'>Easy returns on our products, Returns are free and easy!</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-10 space-y-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z" /><path stroke-linecap="round" d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9" /><path fill="white" d="m11.691 11.829l-7.8-4.334A.6.6 0 0 0 3 8.02v8.627a.6.6 0 0 0 .309.525l7.8 4.333A.6.6 0 0 0 12 20.98v-8.627a.6.6 0 0 0-.309-.524Z" /></g></svg>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  font-semibold text-lg capitalize'>quality control</p>
                            <p className='text-white  capitalize'>We are providing top quality products and service.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2'>
                    <div className='flex flex-col p-10 space-y-5'>
                        <div className='flex space-x-4 items-center'>
                            <span className='text-white pb-1 font-semibold text-lg capitalize'>company info</span>
                            <span className='h-0.5  w-14 bg-white'></span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  capitalize hover:cursor-pointer'>- about us</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- privacy policy</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- terms & condition</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-10 space-y-5'>
                        <div className='flex space-x-4 items-center'>
                            <span className='text-white pb-1 font-semibold text-lg capitalize'>customer care</span>
                            <span className='h-0.5  w-14 bg-white'></span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  capitalize hover:cursor-pointer'>- how to buy</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- returns & refunds</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-10 space-y-5'>
                        <div className='flex space-x-4 items-center'>
                            <span className='text-white pb-1 font-semibold text-lg capitalize'>my account</span>
                            <span className='h-0.5  w-14 bg-white'></span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <p className='text-white  capitalize hover:cursor-pointer'>- login</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- register</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- cart</p>
                            <p className='text-white  capitalize hover:cursor-pointer'>- wishlist</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-10 space-y-5'>
                        <div className='flex space-x-4 items-center'>
                            <span className='text-white pb-1 font-semibold text-lg capitalize'>connect with us</span>
                            <span className='h-0.5  w-14 bg-white'></span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7.175q.125 0 .262-.038q.138-.037.263-.112L19.6 8.25q.2-.125.3-.312q.1-.188.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437q.1.188.3.288l7.075 4.425q.125.075.263.112q.137.038.262.038Z" /></svg>
                                <p className='text-white  hover:cursor-pointer pb-0.5'>&nbsp;: example@example.com</p>
                            </div>
                            <div className='flex flex-col'>
                                <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613q.225-.262.575-.337l3.45-.7q.35-.05.713.062q.362.113.587.338L10.9 17q1.9-1.15 3.475-2.725Q15.95 12.7 17 10.9l-2.4-2.45q-.225-.225-.288-.513q-.062-.287-.012-.637l.65-3.5q.05-.35.325-.575Q15.55 3 15.9 3h4.05q.45 0 .75.3t.3.75q0 3.225-1.438 6.287q-1.437 3.063-3.8 5.425q-2.362 2.363-5.424 3.8Q7.275 21 4.05 21Z" /></svg>
                                    <p className='text-white  hover:cursor-pointer pb-0.5'> &nbsp;:</p>
                                </span>
                                <p className='text-white  hover:cursor-pointer pb-0.5'>+977-xxxxxxxxxx</p>
                                <p className='text-white  hover:cursor-pointer pb-0.5'>xxxxxxxxxx(Ncell)</p>
                            </div>

                            <div className='flex space-x-4'>
                                <span className=' hover:cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="black" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443v1.581z" /></svg>
                                </span>

                                <span className=' hover:cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="black" d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z" /></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-8 bg-white flex items-center justify-center'>
                    <span className='text-red-600 text-base capitalize'>we accept: &nbsp;</span>
                    <span className='text-gray-700 text-base capitalize'>cash on delivery , esewa, connectIPS, fonepay</span>
                </div>

                {/* copyright */}
                <div className='w-full h-10 flex items-center justify-center py-2'>
                    <span className="xs:text-sm  text-white smd:text-base">© {moment().format("YYYY")} ecom.com - All Rights Reserved </span>
                </div>
            </div>
      {/* <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Develop & Design QuantumTechInfo © Copyright {moment().format("YYYY")}
      </footer> */}
      <ScrollToTop smooth />
    </Fragment>
  );
};

export default Footer;
