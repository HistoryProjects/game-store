import React from "react";
import {useNavigate} from 'react-router-dom';
import {MdKeyboardBackspace} from "react-icons/md"

const BackPage = () =>{
    const navigate = useNavigate();
    return (
        
        <div> 
            <button onClick={() => navigate(-1)} className="text-orng">
                <MdKeyboardBackspace size={40} />
            </button>
        </div>
    )

}

export default BackPage;