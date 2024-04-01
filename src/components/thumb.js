import React from 'react';

const Thumb = ({titre, cover}) => {
  return (
    <div className='thumb' style={{backgroundImage:`url(${cover})`}}>
      <div className='overlay'></div>
<p>
{titre}
</p>
    </div>
  );
};

export default Thumb;
