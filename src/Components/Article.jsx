import React from 'react';
import mainImg from "../assets/drawers.jpg"
import avatar from "../assets/avatar.jpg"

const Article = () => {
    return (
        <div className='w-full h-screen bg-[#ecf2f8] flex justify-center items-center'>
            <div className='h-fit w-[60%] rounded-2xl bg-white flex overflow-hidden'>
                <div className="imgDiv w-[40%]">
                    <img className='w-full h-full object-cover rounded-l-2xl' src={mainImg} alt="" />
                </div>
                <div className="textDiv w-[60%] p-7">
                    <h2 className='text-[#48556a] font-semibold text-[18px]'>
                        Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h2>

                    <p className='text-[#9eafc2] text-[13px] mt-3'>
                        Ever been in a room and felt like something was missing? <br /> Perhaps it felt slightly bare and uninviting. I’ve got some simple tips <br /> to help you make any room feel complete.
                    </p>

                    <div className='mt-7'>
                        <div className='w-[50%] flex justify-between items-center gap-4'>
                            <div className="img">
                                <img className='w-[55px] rounded-full' src={avatar} alt="" />
                            </div>

                            <div>
                                <h2 className='text-[#48556a] font-semibold text-[14px]'>
                                    Michael Appleton
                                </h2>

                                <p className='text-[#8190a0] text-[13px]'>
                                    28th June, 2020
                                </p>
                            </div>
                        </div>

                        <div className='w-[50%]'>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
