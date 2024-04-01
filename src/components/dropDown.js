import React, { useState } from "react";
import {MdKeyboardArrowUp } from "react-icons/md";

const DropDown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropDown">
            <div className="dropDownChild" onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }}>
                <span>{title}</span>
                <MdKeyboardArrowUp 
        style={{ 
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)', 
            transition: 'transform 0.3s ease-in-out'
        }} 
    />            </div>

                <div
                className="content"
                  style={{
                    height: isOpen ? 100 : 0,
                    transition: 'height 0.5s ease-in-out',
                    overflow: 'auto',
                }}
                >
                   {content}
                </div>
        </div>
    );
};

export default DropDown;
