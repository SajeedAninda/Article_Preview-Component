import React from 'react';
import mainImg from "../assets/drawers.jpg"

const Article = () => {
    return (
        <div className='w-full h-screen bg-[#ecf2f8] flex justify-center items-center'>
          <div className='h-fit w-[60%] rounded-2xl bg-white'>
            <div className="imgDiv w-[40%]">
                <img className='object-contain' src={mainImg} alt="" />
            </div>

            <div className="textDiv w-[60%]">

            </div>
          </div>
        </div>
    );
};

export default Article;