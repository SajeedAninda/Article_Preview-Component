import React, { useState } from 'react';
import mainImg from "../assets/drawers.jpg"
import avatar from "../assets/avatar.jpg"
import shareIcon from "../assets/icon-share.svg"
import fbIcon from "../assets/icon-facebook.svg";
import pinIcon from "../assets/icon-pinterest.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Article = () => {
    let [showTooltip, setShowTooltip] = useState(false);

    let toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    }



    return (
        <div className='w-full h-screen bg-[#ecf2f8] flex justify-center items-center relative'>
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

                    <div className='mt-7 flex justify-between items-center'>
                        <div className='w-[50%] flex items-center gap-4'>
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

                        <div onClick={toggleTooltip} className='w-[50%] flex justify-end items-center cursor-pointer'>
                            <div className='p-2 bg-[#e8ebf0] rounded-full'>
                                <img className='w-[17px]' src={shareIcon} alt="Share Icon" />
                            </div>
                        </div>

                        {showTooltip &&
                            <div className='absolute bottom-72 right-52 w-56 px-8 py-4 z-10 bg-[#48556a] text-white text-center rounded-lg shadow-lg flex justify-between items-center'>
                                <p className='text-[13px] text-[#a9bddf] font-bold tracking-widest'>SHARE</p>
                                <div className='flex space-x-2'>
                                    <img className='w-[18px] cursor-pointer' src={fbIcon} alt="Facebook Icon" />
                                    <img className='w-[18px] cursor-pointer' src={twitterIcon} alt="Twitter Icon" />
                                    <img className='w-[18px] cursor-pointer' src={pinIcon} alt="Pinterest Icon" />
                                </div>
                                <div className='absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#48556a] rotate-45'></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
