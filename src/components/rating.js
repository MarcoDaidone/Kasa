import React from "react";
import { FaStar } from 'react-icons/fa';

const Rating = ({rating}) => {
    const nombreEtoiles = 5;
    const etoiles = [];
    for (let i = 0; i < nombreEtoiles; i++) {
        if (i < rating) {
          etoiles.push(<FaStar key={i} color="#FF6060" />);
        } else {
          etoiles.push(<FaStar key={i} color="#E3E3E3" />);
        }
      }
      return <>{etoiles}</>;
    }

export default Rating;