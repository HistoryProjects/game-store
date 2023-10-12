import React from 'react';
import {BsCheckCircle} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const FinishPopUp = ({isOpen, onClose}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 
        bg-opacity-70 flex justify-center items-center z-[1000] " 
            onClick={onClose}
        >
            <div className="relative py-10 bg-white  rounded-md text-center shadow-xl text-black" onClick={(e) => e.stopPropagation()}>
                <div className="">
                    <BsCheckCircle size={60} className="text-green-400  block mx-auto" />
                  <h2 className="text-2xl font-bold mt-5">Спасибо за заказ</h2>
                  <p className="w-7/12 mx-auto mt-4">
                    В течение часа с Вами свяжется менеджер для подтверждения деталей.
                  </p>

                  <AiOutlineCloseCircle 
                    onClick={onClose}
                    size={40}
                    className="cursor-pointer text-red-500 absolute top-2.5 right-2.5"
                  />
                  
                </div>
            </div>
    </div>
    )
}

export default FinishPopUp