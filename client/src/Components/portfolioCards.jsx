import React from 'react';
import RightIcon from "../assets/rightIcon.png";

const PortfolioCard = ({ image, Name, desc }) => {
    return (
        <div>
            <img src={image} alt={Name}  />
            <h4>{Name}</h4>
            <p >{desc}</p>
            
        </div>
    );
};

export default PortfolioCard;
