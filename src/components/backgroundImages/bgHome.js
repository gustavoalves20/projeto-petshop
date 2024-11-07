import React from 'react';
import fundoImg from '../../assets/images/fundo.png';

const BgImageHome = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(${fundoImg})`,
      }}
    >
    </div>
  );
};

export default BgImageHome;
