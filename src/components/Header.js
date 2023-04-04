import React from "react";
import HeaderLinks from "./HeaderLinks";
import ButtonNoFill from "./ButtonNoFill";
import ButtonFill from "./ButttonFill";


const Header = () => {
    return(
        <div className={'header'}>
            <div className={'logo-links'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#F2994A"/>
                    <rect x="11" y="11" width="14" height="6" rx="2" fill="white"/>
                    <rect x="11" y="19" width="14" height="6" rx="2" fill="white"/>
                </svg>
                <HeaderLinks/>
            </div>
            <div>
                <ButtonNoFill/>
                <ButtonFill/>
            </div>
        </div>
    )
}
export  default Header;