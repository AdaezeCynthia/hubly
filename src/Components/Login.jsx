import React from 'react';
import { MdOutlineClose } from "react-icons/md";
import white from '../assets/white.jpg';
import orange from '../assets/orange.jpg';
import sign from '../assets/sign.png';
import x from '../assets/x.png';



const Login = () => {
  return (
    <div
    className=" h-screen lg:w-[70%]  lg:mx-[200px] mx-[30px]  bg-cover lg:left-[30px]  left-[2%] relative "
    style={{
      backgroundImage: 'url("https://res.cloudinary.com/dbkc6y0cy/image/upload/v1702553436/Backdrop_tljqi0.jpg")', 
    }}
    >
      
     <div  className='flex items-center justify-center'>
     <img src={white} alt='white' className='absolute lg:bottom-[-50px]  bottom-[290px] rounded-lg lg:left-[100px] left-[50px] lg:h-[600px] h-[300px] lg:w-[50%] w-[39%] lg:my-[100px] my-[30px] ' />
     <img src={sign} alt='sign' className='absolute lg:top-[110px] top-[119px] lg:h-[550px] h-[250px] lg:left-[100px] left-[41px]'/>
     <img src={x} alt='x' className='absolute right-[50px]  top-[10px] h-[20px]'/>
    
     </div>
     <div  className='flex items-center justify-center'>
     <img src={orange} alt='orange' className=' absolute lg:bottom-[-50px] bottom-[269.9px] lg:right-[60px] right-[30px] lg:rounded-lg h-[300px] lg:h-[600px] lg:w-[40%] w-[40%] rounded-lg lg:my-[100px] my-[50px] lg:mx-[50px] mx-[25px]'/>
     </div>
    </div>
  );
};

export default Login;