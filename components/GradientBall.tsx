import React from 'react';

interface GradientBallProps {
    left?: boolean;
    right?: boolean;
}

const GradientBall: React.FC<GradientBallProps> = ({ left}) => {
    return (
        <div className={`absolute w-[400px] md:w-[700px] h-[300px] bg-lime-400 rounded-full blur-[150px] ${left ? 'left-0' : 'left-full'} transform -translate-x-1/2 -translate-y-1/2 top-1/2 opacity-30 z-10`}></div>
    );
};

export default GradientBall;
