import React from "react";


const Hero = ({title, image}) => {
return(
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
    <div className='overlay'></div>
<h1>{title}</h1>
</div>
)
}
export default Hero; 